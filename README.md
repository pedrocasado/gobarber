Setup database

    docker run --name mysql -p 3309:3306 -d  -t -e MYSQL_ROOT_PASSWORD=root mysql:5.7.25

Run server

    yarn start

http://localhost:3333
