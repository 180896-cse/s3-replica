# Project Title

Replica of AWS s3 service

## Description

Technology used

- RestAPI
- Typescript
- Node JS
- Express JS
- Mongo Db
- Mongooese

Extra Functionality

- Integrated User authentication (JWT)
- APIS documentation/ Swagger Integrated

## Getting Started

### commands for Executing program

- clone the project
- Install all dependencies packages from package.json of every folder by using

```
npm i
```

- create a .env file in same directory of package.json
- To run Express Server you have to run command

```
npm run start
```

### Routes and APIs

- For Getting to swagger APIs Documentation .

```
 http://localhost:3001/api-docs
```

- Need to Authenticate user for performing action over APIs.
- For Genration of Bearer Token

```
 http://localhost:3002/user/new

Need to create a new user for which the Token will be genrated, and then it can be use to Authorize other APIs.
Or can use {
   userId:demoUser
   password:Admin
}
```

##

## Authors

Contributors names and contact info

ex. Shantanu Pratap
