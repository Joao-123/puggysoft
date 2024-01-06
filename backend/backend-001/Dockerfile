#prepare
FROM gradle:6.4.1-jdk8 AS build

WORKDIR /app

COPY . /app

RUN gradle bootJar --no-daemon
# run
FROM openjdk:8-jre-slim-buster

EXPOSE 8080

RUN mkdir -p /app/
COPY --from=build /app//build/libs/java-spring-puggysoft.jar /app/java-spring-puggysoft.jar

ENTRYPOINT ["java", "-jar", "/app/java-spring-puggysoft.jar", "--spring.profiles.active=production"]

# FROM ubuntu:latest AS build
# RUN apt-get update
# RUN apt-get install openjdk-8-jdk -y
# COPY . .
# RUN ./gradlew bootJar --no-daemon

# FROM openjdk:8-jdk-slim
# EXPOSE 8080
# COPY --from=build /build/libs/java-spring-puggysoft.jar app.jar

# ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=production"]
