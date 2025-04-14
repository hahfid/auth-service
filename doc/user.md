# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "hafid",
  "password" : "oke",
  "name" : "hafid vi"
}
```

Response Body (Success) : 

```json
{
  "data" : {
    "username" : "hafid",
    "name" : "hafid vi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "hafid",
  "password" : "oke"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "hafid",
    "name" : "hafid vi",
    "token" : "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : {
    "username" : "hafid",
    "name" : "hafid vi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization: token

Request Body :

```json
{
  "password" : "oke", // optional, if want to change password
  "name" : "hafid" // optional, if want to change name
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "hafid",
    "name" : "hafid vi"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : true
}
```

