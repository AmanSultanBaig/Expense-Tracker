import { connect } from "mongoose";
import { config } from "dotenv";
config({ path: ".env" });
const uri = process.env.MONGO_DB_URI || '';

const dbConnection = connect(uri)
  .then((resolve) => {
    console.log("------------ DB CONNECTED SUCCESSFULLY ------------");
  })
  .catch((err) => {
    console.log(`error while connecting mongo ${err}`);
    throw err;
  });

export default dbConnection
