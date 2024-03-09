import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(config.MONGO_URI, {}).then(() => console.log("DB connected"));
