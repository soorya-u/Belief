function main {
  $env = Read-Host "What Environment do you want the app to run on? Docker(d)/Local(l)"

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
  Write-Host "`n Container has been Successfully Spun Up `n"
  exit 0
}

function localSetup {
  $client_port = 5000
  $server_port = 9000

  $node_package_manager = "npm", "yarn", "pnpm" | Where-Object { Test-Path (Get-Command $_).Path }

  if (-not (Test-Path .\client\node_modules)) {
    Write-Host "Initalizing node_modules `n"
    Set-Location .\client
    &$node_package_manager i > $null
    Set-Location ..
    Write-Host "node_modules Initialized `n`n"
  }

  if (-not (Test-Path .\server\env)) {
    Write-Host "Creating Python Virtual Environment `n"
    Set-Location .\server
    python3 -m venv env
    .\env\Scripts\Activate
    pip3 install -r requirements.txt > $null
    Set-Location ..
    Write-Host "Created Python Virtual Environment `n`n"
  }

  Set-Location .\client
  Start-Process -FilePath "$node_package_manager.cmd" -ArgumentList "dev", "--port", $client_port -NoNewWindow
  $client_process = Get-Process -Name "node"

  Set-Location .\server
  Start-Process -FilePath "python3" -ArgumentList "-m", "flask", "run", "--debug", "--port=$server_port" -NoNewWindow
  $server_process = Get-Process -Name "python"

  Write-Host "Development Server started! `n`n"
  Write-Host "Client is running at http://localhost:$client_port `n"
  Write-Host "Server is running at http://loaclhost:$server_port `n"

  Wait-Process $client_process, $server_process
}

main
