import "dotenv/config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";

// connect to MongoDB with mongoose
import('./config/database.js')

// require routes
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from "./routes/auth.js";
import { router as indexRouter } from "./routes/index.js"
import { router as wordRouter } from "./routes/words.js"

// create the express app
const app = express();


app.use(cors({
  origin: '*'
}));
app.use(logger("dev"));
app.use(express.json());


// router middleware
app.use("/api/auth", authRouter);
app.use('/api/profiles', profilesRouter)
app.use("/api/words", wordRouter)

// catch 404
app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }