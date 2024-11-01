import express from "express";
import router from "./routes/index.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
