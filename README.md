# Welcome to Flights Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory
- Create `.env` file add add following environment variables
  - `PORT = 3000`
- Inside `src/config` folder create new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```