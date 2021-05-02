# Dealer-Network
It is a project to manage a Dealer Network

## Download all dependencies

```
npm i
```

## Export DB in your local enviroment

1. Create a new database in your MariaDB client with **dealer_network_DB** name or whatever you want, 
   just change the name in the enviroment file.
2. Run  migrations.

```
npm run up-migrations	
```

If you want down the migrations you can use:
```
npm run down-migrations
```

## Run the API

```
npm start
```
