# Project Title

Replica of AWS s3 service 

## Description

Technology used
* RestAPI
* Typescript
* Node JS
* Express JS
* Mongo Db
* Mongooese


Extra Functionality
* Integrated User authentication
* APIS documentation/ Swagger

## Getting Started


### commands for Executing program

* clone the project
* Install all dependencies packages from package.json of every folder by using
```
npm i
```
* create a .env file in same directory of package.json
* To run graph QL Server you have to run command
```
npm run start
```

### Routes and payload

* For checking the Health of Apis
```
 http://localhost:3002/api
```
* For getting paticular object based on its id (ex: 6596e984cfe5f0ae66377fd8)
```
 http://localhost:3002/get

 payload:{
    "objectId": "6596e984cfe5f0ae66377fd8"
 } 
 This will be body JSON params.
```

* For getting list of all objects in DB.
```
 http://localhost:3002/list
```

* For creating a new record in the DB
```
 http://localhost:3002/upload

 payload:{
    imgName: firstdemo
    bucketName: demoBucket

    Files:
    testImage: File
 }
 This will be Form data format
```

* For removing a paticular record in object collection based on id
```
 http://localhost:3002/remove

 payload:{
    objectId: 6596e984cfe5f0ae66377fd8
 }
 This will be Query params.
```

* For creating bucket in Db
```
 http://localhost:3002/createBucket

 payload: {
    "userId":123,
    "bucketName":"Demotest"
 }
 This will be body JSON params.
```

* For listing all bucket in Db
```
 http://localhost:3002/listBucket
```

* For creating new user in Db
```
 http://localhost:3002/newUser
 paylod:{
    "userId":123,
    "password": "hsdkfbskbid"
 }
 This will be body JSON params. The password will be stored as hash.
```

* For Login user in Db
```
 http://localhost:3002/userLogin
 paylod:{
  "userId":124,
  "password": "Admin"
 }
 This will be body JSON params.
```


## 




## Authors

Contributors names and contact info

ex. Shantanu Pratap  



