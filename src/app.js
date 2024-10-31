import express from "express";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
