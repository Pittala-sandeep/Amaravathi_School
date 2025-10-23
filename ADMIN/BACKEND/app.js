require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cors = require('cors');
const Admin = require("./models/Admin");
const ExpressError = require('./utils/ExpressError')

const carousel = require('./routes/carousel');
const gallery = require('./routes/gallery');
const notice = require('./routes/notice');

const app = express();


const path = require("path");


app.use(express.static(path.join(__dirname, "../FRONTEND/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [process.env.FRONTEND_ORIGIN, process.env.ADMIN_FRONTEND_ORIGIN],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.set("trust proxy", 1);

app.use(session({
  secret: process.env.SESSION_SECREAT,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DataBase connected successfully")
}

app.use("/carousel", carousel);
app.use("/gallery", gallery);
app.use("/notice", notice);

app.get("/register-admin", async (req, res) => {
  try {
    const admin = new Admin({ username: "sandeep" });
    await Admin.register(admin, "AmaravathiSchool"); 
    res.send("Admin created successfully!");
  } catch (err) {
    res.send(err);
  }
});

app.get("/isauth", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true, user: req.user });
  } else {
    res.status(200).json({ isAuthenticated: false });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in", user: req.user });
});

app.post('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.send({ success: true });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONTEND/dist/index.html"));
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"))
})

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).json(message)
})

app.listen(5000, () => {
  console.log("Server Started at port 5000")
})