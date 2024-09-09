# TODO

## Features
- `Login/Logout`: The user could login/logout the app
- `View task`: The signed-in user could see all of his/her tasks
- `Search task`: The signed-in user could search his/her tasks
- `Add task`: The user could add a new task, then press **↵ Enter** to save (doesn't allow empty)
- `Update task`: The user could update a selected task inline, the description will be automatically saved after 1s of inactive (empty will not be saved, keep previous version)
- `Delete task`: The user could delete a selected task

---
**NOTE**

To simplify the usage, TODO doesn't trictly follow the requirement like UI design or controls' validation errors

---

## Run In Local
### Structure
- `sql`: Migration
- `src`: Backend API (stand-alone)
- `app`: TODO app (stand-alone)

### Version
- Angular:    18.2.3
- Node:       18.20.4
- NPM:        10.7.0
- Docker      27.2.0
- .NET        8.0.401

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

### Demo Video
- Find demo video at path **demo/todo-demo.mp4**

<div align="center">
    <video width="520" height="440" controls>
        <source src="demo/todo-demo.mp4" type="video/mp4">
    </video>
</div>