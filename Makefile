start-output:
		./compose up --remove-orphans
start:
		./compose up -d
stop:
		./compose stop
down:
		./compose down --remove-orphans
build:
		./compose build
build-no-cache:
		./compose build --no-cache
rebuild:
		make build start
restart:
		make build stop start
