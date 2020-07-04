## REST Routes
API for server.js


### Login - *POST*
* /api/login

_requires_
```json
  "user": {
    "email": <email>,
    "password": <password>
  }
```


### Register - *POST*
* /api/register

_requires_
```json
  "user": {
    "email": <email>,
    "password": <password>,
    "confirmedPassword": <password>
  }
```
