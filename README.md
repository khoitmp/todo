# TODO

## Features
| Feature        | Description                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Login/Logout` | The user could login/logout the app                                                                                                                                         |
| `View task`    | The signed-in user could see all of his/her tasks                                                                                                                           |
| `Search task`  | The signed-in user could search his/her tasks                                                                                                                               |
| `Add task`     | The user could add a new task, then press **↵ Enter** to save (doesn't allow empty)                                                                                         |
| `Update task`  | The user could update a selected task inline, the description will be automatically saved after a short period of inactive (empty will not be saved, keep previous version) |
| `Delete task`  | The user could delete a selected task                                                                                                                                       |

---
**NOTE**

- To simplify the usage, TODO doesn't trictly follow the requirement like UI design or controls' validation errors
- As mock API doesn't provide enough information, local APIs were developed to integrate with TODO

---

## Structure
| Directory/File       | Description                           |
| -------------------- | ------------------------------------- |
| app                  | Stand-alone Angular front-end         |
| src                  | Stand-alone .NET Core API back-end    |
| sql                  | Backend database migration            |
| Dockerfile           | Docker file for back-end              |
| Dockerfile-app       | Docker file for front-end             |
| Dockerfile-migration | Docker file for database migration    |
| docker-compose.yaml  | Compose front-end, back-end, database |

## Run In Local
### Version
| Framework/Tool | Version |
| -------------- | ------- |
| Angular        | 18.2.3  |
| Node           | 18.20.4 |
| NPM            | 10.7.0  |
| Docker         | 27.2.0  |
| .NET           | 8.0.401 |

### 1. Run TODO in Docker mode
```sh
docker compose -f docker-compose.yaml -f development.yaml build
docker compose -f docker-compose.yaml -f development.yaml up -d

# Access TODO on port http://localhost:10000
```

### 2. Run TODO in Debug mode
```sh
# Compose API & Migration (required)
docker compose -f docker-compose.yaml -f development.yaml build
docker compose -f docker-compose.yaml -f development.yaml up -d

# Run app directly by Angular CLI
cd ./app 
npm install
ng serve

# Access TODO on port http://localhost:4200
```

### 3. Emails (use to login)
- thanos@email.test
- thor@email.test
- loki@email.test

## Demo
### Images
<p align="center">
  <img src="demo/2024-09-09 15-32-35.png" width="150" />
  <img src="demo/2024-09-09 15-33-21.png" width="150" />
  <img src="demo/2024-09-09 15-33-45.png" width="150" />
  <img src="demo/2024-09-09 15-33-39.png" width="150" />
</p>

### Video
- Find demo video at path **demo/todo-demo.mp4**

<div align="center">
    <video width="520" height="440" controls>
        <source src="demo/todo-demo.mp4" type="video/mp4">
    </video>
</div>