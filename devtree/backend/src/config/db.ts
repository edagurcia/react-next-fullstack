import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  const databaseURL = process.env.DATABASE_URL;

  try {
    const { connection } = await mongoose.connect(databaseURL);

    console.log(
      colors.blue(`MongoDB Server: ${connection.host} : ${connection.port}`),
    );
  } catch (error) {
    console.log(error);
  }
};
