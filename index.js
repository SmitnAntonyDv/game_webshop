const express = require("express");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => console.log("server started"));
