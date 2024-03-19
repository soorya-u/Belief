#!/bin/bash

main() {

printf "What Environment do you want the app to run on? Docker(d)/Local(l): "
read env

case $env in

  "d")
    dockerSetup
    ;;

  "l")
    localSetup
    ;;
  
  *) 
    exit 1
    ;;

esac

}


dockerSetup() {
  docker-compose -f ./scripts/docker-compose.yml -p belief up -d &> /dev/null
  printf "\n Container has been Successfully Spun Up \n"
  exit 0
}

localSetup() {
scripting_shell="$(readlink /proc/$$/exe | sed "s/.*\///")"
client_port=5000
server_port=9000

for cmd in pnpm yarn npm; do
    if command -v $cmd > /dev/null; then
        node_package_manager=$cmd 
        break
    fi
done

if ! test -d ./client/node_modules; then
  printf "Initalizing node_modules \n"
  cd client
  command $node_package_manager i > /dev/null
  cd ..
  printf "node_modules Initialized \n\n"
fi

if ! test -d ./server/env; then
  printf "Creating Python Virtual Environment \n"
  cd server
  python3 -m venv env
  source env/bin/activate
  pip3 install -r requirements.txt &> /dev/null
  cd ..
  printf "Created Python Virtual Environment \n\n"
fi

cd client && command $node_package_manager dev --port $client_port > /dev/null  &
client_process=$!

if [ "$scripting_shell" = "zsh" ]; then
  cd ..
fi

cd server && python3 -m flask run --debug --port=$server_port &> /dev/null &
server_process=$!

printf "Development Server started! \n\n"
printf "Client is running at http://localhost:$client_port \n"
printf "Server is running at http://loaclhost:$server_port \n"

wait $client_process $server_process
}

main