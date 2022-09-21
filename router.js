const router = require("express").Router();
const productsRouter = require("./scr/products/router");
const buyurtmaRouter = require("./scr/buyurtmalar/router");
router.use("/product", productsRouter);
router.use("/buyurtmalar", buyurtmaRouter);

module.exports = router;
