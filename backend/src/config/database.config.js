import { connect, set } from "mongoose";
import { UserModel } from "../Models/user.model.js";
import { FoodModel } from "../Models/food.model.js";
import { sample_users } from "../data.js";
import { sample_foods } from "../data.js";

import bcrypt from "bcryptjs";

const PASSWORD_HASH_SALT_ROUNDS = 10;
// const mongoose = require("mongoose");
set("strictQuery", true);
// it will strictly use the schema the mother's strictly
const connectionString =
  "mongodb+srv://SrishK:qwerty100@cluster0.qwrrelz.mongodb.net/Cluster0";
// "mongodb://localhost:27017/Food-db.Foodss";
export const connectDB = async () => {
  try {
    const conn = await connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedFoods();
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

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log("Users seed is already done!");
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log("Users seed is done");
}

async function seedFoods() {
  const foods = await FoodModel.countDocuments();
  if (foods > 0) {
    console.log("Foods seed is already done!");
    return;
  }

  for (const food of sample_foods) {
    food.imageUrl = `/foods/${food.imageUrl}`;
    await FoodModel.create(food);
  }

  console.log("Foods seed Is Done!");
}
