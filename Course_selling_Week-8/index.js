const express = require ("express");
const { userRouter } = require ("./routes/user");
const { courseRouter } = require ("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000, () => {
  console.log("Server running at port 3000");
  console.log("MongoDB connected Sucessfuly");
});

