const dbConn = require("../../config/dbconfig");

const Products = function (product) {
  this.id = product.id;
  this.mahsulot = product.mahsulot;
  this.miqdori = product.miqdori;
  this.olchovi = product.olchovi;
  this.narxi = product.narxi;
  this.olingan_vaqti = product.olingan_vaqti;
};
Products.getProducts = (result) => {
  dbConn.query("SELECT * FROM mahsulot_kirmi", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.getProductsId = (id, result) => {
  dbConn.query("select * from mahsulot_kirmi where id=$1", [id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.addProducts = (productData, result) => {
  dbConn.query(
    "Insert into mahsulot_kirmiVALUES ($1, $2, $3, $4, $5)",
    [
      productData.id,
      productData.mahsulot,
      productData.miqdori,
      productData.olchovi,
      productData.narxi,
      productData.olingan_vaqti,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.updateProducts = (id, productData, result) => {
  dbConn.query(
    "UPDATE mahsulot_kirmi SET id=$1 mahsulot=$2, miqdori=$3, olchovi=$4, narxi=$5, olingan_vaqti=$6 WHERE id=$7",
    [
      productData.id,
      productData.mahsulot,
      productData.miqdori,
      productData.olchovi,
      productData.narxi,
      productData.olingan_vaqti,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.deleteProducts = (id, result) => {
  dbConn.query("delete from mahsulot_kirmi where id=$1", [id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Products;
