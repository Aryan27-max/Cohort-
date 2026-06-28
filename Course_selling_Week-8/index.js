const express = require ("express");
const { userRouter } = require ("./routes/user");
const { courseRouter } = require ("./routes/course");
const { adminRouter } = require("./routes/admin");
require("./db");
const app = express();

// Optional DNS fix for MongoDB Atlas
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

async function startServer() {
  app.listen(3000, () => {
    console.log("Server running at port 3000");
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});

