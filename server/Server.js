const express = require("express");
const mongoose = require("mongoose");
import { readdirSync } from "fs";

const app = express();

//middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//autoload Routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    console.log(err);
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

const PORT = process.env.PORT || 8000;
app.listen(`Server is running on port ${PORT}`);
