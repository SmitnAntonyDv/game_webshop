const express = require("express");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const productRouter = require("./routers/products");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log("server started"));
