module.exports = {
    dialect: 'mysql',
    host: '0.0.0.0',
    port: '3309',
    username: 'root',
    password: 'root',
    database: 'gobarber',
    operatorAliases: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}

// {
//     "development": {
//       "username": "root",
//       "password": null,
//       "database": "database_development",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     },
//     "test": {
//       "username": "root",
//       "password": null,
//       "database": "database_test",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     },
//     "production": {
//       "username": "root",
//       "password": null,
//       "database": "database_production",
//       "host": "127.0.0.1",
//       "dialect": "mysql"
//     }
//   }
