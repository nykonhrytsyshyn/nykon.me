# --- Stage 1: Build the project (builder) ---
# Use a JDK 21 image for compilation.
FROM openjdk:21-jdk-slim as builder

# Install build tools like Gradle, which are not included in the slim image.
# This line is for Gradle projects. For Maven, you would adjust this.
RUN apt-get update && apt-get install -y build-essential

# Set the working directory.
WORKDIR /app

# Copy all project files and the Gradle wrapper.
COPY . .

# Build the project, skipping tests for a faster build.
# We use the Gradle Wrapper script.
RUN ./gradlew build -x test

# --- Stage 2: Run the application (production) ---
# Use a lightweight image with just the JRE, without the build tools.
FROM openjdk:21-jdk-slim

# Set the working directory.
WORKDIR /app

# Copy only the compiled JAR file from the 'builder' stage.
COPY --from=builder /app/build/libs/website-api-0.0.1-SNAPSHOT.jar app.jar

# Expose the application's port.
EXPOSE 8080

# The command that runs the application when the container starts.
ENTRYPOINT ["java", "-jar", "app.jar"]