# Setup for Running the project Locally with Docker

This document outlines the steps to configure and run an the project using Docker in your local environment.

## Prerequisites

Make sure you have the following instaled on your system.

- Docker Engine: [Installation Instructions](https://docs.docker.com/engine/install/ubuntu/)
- Docker Compose: [Installation Instructions](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

## Configuration Steps

### 1. Clone the repository

```bash
git clone git@github.com:biotz/academy.git
```

### 2. Navigate to the Project Directory


```bash
cd academy
```

### 3. Build and Run the Containers

  ```bash
    docker-compose up --build
```

This will build the necessary images and run the containers according to the configuration in `docker-compose.yml`.

### 4. Access Your Application

Open a web browser and visit `http://localhost:3000` (or the port you specified) to access your application.

---