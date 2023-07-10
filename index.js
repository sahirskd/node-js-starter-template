import * as dotenv from 'dotenv';
/* Loading the environment variables from the .env file. */
dotenv.config()
import mongoose from 'mongoose'
import app from './config/express'

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    promiseLibrary: global.Promise,
})

/* This is a callback function that is called when the connection to the database is made. */
mongoose.connection.on('connected', function () {
  console.log(`Server Connected to Mongoose 💚 @ ${process.env.DATABASE_URL}`);
});

/* This is a callback function that is called when the connection to the database is disconnected due to error. */
mongoose.connection.on('error', function (err) {
  console.error(
    `Failed to Connect to Mongoose 💥 @ ${process.env.DATABASE_URL} | Error - ${err}`
  );
});

/* This is a callback function that is called when the connection to the database is disconnected. */
mongoose.connection.on('disconnected', function (info) {
  console.error(
    `Server and Mongoose Disconnected from 💥 @ ${process.env.DATABASE_URL} | Error - ${info}`
  );
});

/* This is a catch all for any uncaught exceptions. */
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception  💥  : ${err}`);
});

/* This is a catch all for any unhandled rejections. */
process.on('unhandledRejection', (reason, promise) => {
  console.error(`Unhandled rejection  💥  at ${promise}, reason: ${reason}`);
});

/* This is a callback function that is called when the server is started. */
app.listen(process.env.PORT, () => {
  console.log(`Server Started  💚  On Port (${process.env.PORT})`);
});

export default app;