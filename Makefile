start-output:
		docker-compose up --remove-orphans
start:
		docker-compose up -d
stop:
		docker-compose stop
down:
		docker-compose down --remove-orphans
build:
		docker-compose build
build-no-cache:
		docker-compose build --no-cache
rebuild:
		make build start
restart:
		make build stop start
