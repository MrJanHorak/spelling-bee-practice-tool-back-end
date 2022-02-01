import "dotenv/config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import methodOverride from "method-override";
import logger from "morgan";
import cors from "cors";
import { passUserToView } from "./middleware/middleware.js";

// connect to MongoDB with mongoose
import('./config/database.js')

// require routes
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from "./routes/auth.js";
import { router as indexRouter } from "./routes/index.js"

// create the express app
const app = express();

// view engine setup
app.set(
  "views",
  path.join(path.dirname(fileURLToPath(import.meta.url)), "views")
);
app.set("view engine", "ejs");

//middleware
app.use(methodOverride("_method"));
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public")
  )
);

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax",
    },
  })
);

//custom middleware
app.use(passUserToView);

// router middleware
app.use("/", indexRouter)
app.use("/auth", authRouter);
app.use('/api/profiles', profilesRouter)
app.use("/api/auth", authRouter);

// catch 404
app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }