# --- Stage 1: Build the project ---
FROM openjdk:21-jdk-slim AS builder

RUN apt-get update && apt-get install -y build-essential

WORKDIR /app

COPY . .

RUN chmod +x ./gradlew

ARG SKIP_TESTS=true
RUN if [ "$SKIP_TESTS" = "true" ]; then ./gradlew build -x test; else ./gradlew build; fi

# --- Stage 2: Run the application ---
FROM openjdk:21-jdk-slim

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
