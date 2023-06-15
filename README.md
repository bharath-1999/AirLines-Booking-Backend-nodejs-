#welcome to flights search service

## Project Setup
- clone the project on your local
-  execute `npm install` on the same path as of your root directory
- Create a `.env` file in the root directory and add the following environment variable.
- `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following code;

```

{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 
}



```

## DB design
 - airplane table
        - uniqueId
        - model_number
        -capacity
        -created_at
        -updated-at
 - flight
        -id
        -src_airport_id
        -dest_airport_id
        -departure
        -arrival
        -flight_number
        
 - airport
        -id
        -name
        -city_id
        -address

 -city
      -id
      -name

Once you have added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`