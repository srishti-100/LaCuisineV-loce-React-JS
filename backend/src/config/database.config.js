import { connect, set } from "mongoose";

// const mongoose = require("mongoose");
set("strictQuery", true);
// it will strictly use the schema the mother's strictly
const connectionString =
  "mongodb+srv://SrishK:qwerty100@cluster0.qwrrelz.mongodb.net/Cluster0/";
export const connectDB = async () => {
  try {
    const conn = await connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect successfully----");
  } catch (error) {
    console.error(error);
  }
};

// const connDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MON_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Connected To Mongodb Database ${conn.connection.host}`);
//   } catch (error) {
//     console.log(`Error in Mongodb ${error}`);
//   }
// };
