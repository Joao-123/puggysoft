# java-spring-puggysoft

## Prerequisites 🔨

1. Install Windows 10
2. Install gradle-6.4.1
3. Install java 1.8.0_201
4. Install Mysql 5
5. Install 19.03.8 (Optional)

### Optional install mysql db in docker

0. Docker 19.03.8

1. download docker mysql image:

```
docker pull mysql:5
```

2. start container:

```
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=secret123 -p 3306:3306 mysql:5
```

3. download docker phpmyadmin image:

```
docker pull phpmyadmin/phpmyadmin:4.8
```

4. start container:

```
docker run -d --name myadmin --link mysql:db -p 8080:80 phpmyadmin/phpmyadmin:4.8
container will start in:
http://10.31.35.100:8080/
root, secret123
```

## Deploy 🚀

### Deploy Normal

0. execute all queries from sql folder
1. gradlew build
2. configure: build/resources/main/java/com/puggysoft/resources/application.properties
3. java -jar build/libs/java-spring-puggysoft.jar
4. Optional for devs: gradlew bootRun

### Deploy Docker
0. execute all queries from sql folder
1. gradlew build
2. configure: build/resources/main/java/com/puggysoft/resources/application.properties

```
*server.address=0.0.0.0 # Bind all Docker Container 
*Mandatory: server.address=0.0.0.0
*recomended db host with ip.
```

3. create docker image

```
docker build -t java-spring-puggysoft:1.0 .
```

4. run container:

```
first time: docker run -d --name java-spring-puggysoft -p 8080:8080 java-spring-puggysoft:1.0
then: docker start java-spring-puggysoft
```

## Diagrams

### Class Diagram

<p align="center">
  <img src="documents/class-diagram.jpg">
</p>

### Entity relation data base

<p align="center">
  <img src="documents/entity-relation-dbeaver.jpg">
</p>

## Usage

### Default Token: 

```
Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiZHZlcmExIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0V
SIl0sImlhdCI6MTYwMjEyMTQzMX0.Ee_NdiR3q2HY3nrjP4YY5B5sRs8udEjsZjTDqfT9MUAp8yxWTJ1FYmZZb-F50jeIyEqmQwSXlxejuadeFlI25Q
```

### API:

#### Login:

```
POST localhost:8080/api/v1/login

{
  "username": "admin",
  "password": "admin123"
  "token": "Bearer ..."
}
```

#### Users:

```
GET localhost:8080/api/v1/users
POST localhost:8080/api/v1/users
GET localhost:8080/api/v1/users/{id}
GET localhost:8080/api/v1/users/pagination?page=0&size=10
GET localhost:8080/api/v1/users/pagination/size/10
PUT localhost:8080/api/v1/users/{id}
DELETE localhost:8080/api/v1/users/{id}

{
  "id": 1010,
  "username": "lzimpson",
  "password": "cass222",
  "dni": "5928354",
  "name": "N/A",
  "secondName": null,
  "lastName": "Capry",
  "secondLastName": null,
  "birthDate": "1992-03-18",
  "telephone": "74874444",
  "address": "Av. Sheeba",
  "email": "Liza.Simpson@gmail.com",
  "image": null,
  "createdBy": "admin",
  "updatedBy": null,
  "creationDate": "2022-06-07T14:54:58.000+0000",
  "updateDate": null
}
```

#### Products:

```
GET localhost:8080/api/v1/products
POST localhost:8080/api/v1/products
GET localhost:8080/api/v1/products/{id}
GET localhost:8080/api/v1/products/pagination?page=0&size=10
GET localhost:8080/api/v1/products/pagination/size/10
GET localhost:8080/api/v1/products/size
PUT localhost:8080/api/v1/products/{id}
DELETE localhost:8080/api/v1/products/{id}

{
  "id": 1010,
  "name": "Te Dharamsala",
  "purchasePrice": 15.0,
  "salePrice": 18.0,
  "stock": 39,
  "description": "",
  "image": null,
  "barCode": null,
  "location": "Estante 3, Nivel 3",
  "minimumStock": null,
  "createdBy": null,
  "updatedBy": null,
  "creationDate": "2022-06-07T14:55:24.000+0000",
  "updateDate": null
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/1001`
3. Commit your changes: `git commit -m 'feature/1001: Add some feature'`
4. Push to the branch: `git push origin feature/1001`
5. Submit a pull request.

## License

- Free.
