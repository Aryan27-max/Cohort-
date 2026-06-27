const express = require ("express");
const { createUserRouter } = require ("./routes/user");
const { createCourseRouter } = require ("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/courses", courseRouter);

    app.listen(3000, () = > {
        console.log("server running at port 3000")
    });

