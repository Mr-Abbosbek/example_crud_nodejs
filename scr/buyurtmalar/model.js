const dbConn = require("../../config/dbconfig");

const Products = function (product) {
  this.id = product.id;
  this.ism = product.ism;
  this.familya = product.familya;
  this.tel_num = product.tel_num;
  this.manzil = product.manzil;
  this.mahsulot_nomi = product.mahsulot_nomi;
  this.miqdori= product.miqdori;
  this.olchov = product.olchov;
};
Products.getProducts = (result) => {
  dbConn.query("SELECT * FROM buyurtmalar", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.getProductsId = (id, result) => {
  dbConn.query("select * from buyurtmalar where id=$1", [id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.addProducts = (productData, result) => {
  dbConn.query(
    "Insert into buyurtmalar VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      productData.id,
      productData.ism,
      productData.familya,
      productData.tel_num,
      productData.manzil,
      productData.mahsulot_nomi,
      productData.miqdori,
      productData.olchov,
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
    "UPDATE buyurtmalar SET id=$1, ism=$2, familya=$3, tel_num=$4, manzil=$5, mahsulot_nomi=$6, miqdori=$7, olchov=$8 WHERE id=$9",
    [
      productData.id,
      productData.ism,
      productData.familya,
      productData.tel_num,
      productData.manzil,
      productData.mahsulot_nomi,
      productData.miqdori,
      productData.olchov,
      id
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
  dbConn.query("delete from buyurtmalar where id=$1", [id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Products;
