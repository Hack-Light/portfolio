
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const indexRouter = require("./routes/indexRouter");


const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(
    process.env.DATABASE_URI || "mongodb://localhost:27017/resume",
    dbOptions
  )
  .then(() => {
    console.log(`Connected to mongodb successfully`);
  })
  .catch(e => {
    console.log(e);
  });


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "/public/javascripts")));
app.use("/img", express.static(path.join(__dirname, "/public/images")));
app.use("/vendor", express.static(path.join(__dirname, "/public/vendor")));

app.use("/", indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3800, () => {
  console.log("listening on port 3000");
});

