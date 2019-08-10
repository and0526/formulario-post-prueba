import promise from 'bluebird';
import pgPromise from 'pg-promise';
import 'dotenv/config';

const {
  DATABASE_PORT,
  DATABASE_IP,
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_NAME
} = process.env;

const cn = {
  "host": DATABASE_IP,
  "port": DATABASE_PORT,
  "database": DATABASE_NAME,
  "user": DATABASE_USER,
  "password": DATABASE_PASS
}

const initOptions = {
  promiseLib: promise
}

const pgp = pgPromise(initOptions);

//database instance.


const db = pgp(cn);


export default db;