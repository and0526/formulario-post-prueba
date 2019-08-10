const DATABASE = {
    host: "127.0.0.1",                // The ip of your database.
    port: "5432",                     // The open port that is running.
    databaseName: "YourDatabaseName", // The name of the database you want to connect.
    role: {
      name: "yourUserName",           // The username for the connection.
      password: "yourPassword"        // The password for the conenction.
    }
  };
  
  export {DATABASE};