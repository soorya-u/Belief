function main {
  $env = Read-Host "What Environment do you want the app to run on? Docker(d)/Local(l)"

  Write-Host

  switch ($env) {
    "d" {
      dockerSetup
      break
    }
    "l" {
      localSetup
      break
    }
    default {
      exit 1
      break
    }
  }
}

function dockerSetup {
  docker-compose -f .\scripts\docker-compose.yml -p belief up -d > $null 2>&1
  Write-Host "Container has been Successfully Spun Up"
  exit 0
}

function localSetup {
  $client_port = 5000
  $server_port = 9000

  $package_managers = @("bun", "pnpm", "yarn", "npm")
  $node_package_manager = $null
  
  foreach ($manager in $package_managers) {
    $executable = Join-Path $env:APPDATA "npm\$manager.cmd"
    if (Test-Path $executable) {
      $node_package_manager = $executable
      break
    }
  }

  if (-not (Test-Path .\client\node_modules)) {
    Write-Host "Initializing node_modules"
    Set-Location .\client
    Invoke-Expression "$node_package_manager i" > $null
    Set-Location ..
    Write-Host "node_modules Initialized `n"
  }

  if (-not (Test-Path .\server\env)) {
    Write-Host "Creating Python Virtual Environment"
    Set-Location .\server
    python -m venv env
    .\env\Scripts\Activate.ps1
    pip install -r requirements.txt > $null 2>&1
    Set-Location ..
    Write-Host "Created Python Virtual Environment `n"
  }

  
  Set-Location .\client
  $client_process = Start-Process -FilePath "$node_package_manager" -ArgumentList "dev", "--port", $client_port, ">", "`$null", "2>&1" -NoNewWindow -PassThru
  
  Set-Location ..
  .\server\env\Scripts\Activate.ps1
  Set-Location .\server
  $server_process = Start-Process -FilePath "python" -ArgumentList "-m", "flask", "run", "--debug", "--port=$server_port",  -NoNewWindow -PassThru -WindowStyle Hidden
    
  Set-Location ..

  Write-Host "Development Server started!`n"
  Write-Host "Client is running at http://localhost:$client_port"
  Write-Host "Server is running at http://localhost:$server_port`n"

  $client_process.waitForExit()
  $server_process.waitForExit()

}

main