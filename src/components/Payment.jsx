import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import API_URL from "../api/config";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

function Payment({ amount }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const merchantUPI = "soumen19j@okicici";

  // Construct the payment URL with the specified amount
  const paymentURL = `upi://pay?pa=${merchantUPI}&pn=MerchantName&am=${productDetail.price}&cu=INR`;
  useEffect(() => {
    console.log(id, "id");
    console.log(products, "products");
    if (products.length > 0) {
      const product = products.find((product) => product.id == id);
      // console.log(product);
      if (product) {
        setProductDetail(product);
      }
    } else {
      axios
        .get(`${API_URL}/${id}`)
        .then((response) => setProductDetail(response.data))
        .catch((error) => console.error(error));
    }
  }, []);

  console.log(productDetail, "pp");
  console.log(products, "products");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold">step 3/3</div>
      <h2 className="text-2xl my-4 font-semibold">
        Scan QR Code to Pay ₹{productDetail.price}
      </h2>
      <QRCode value={paymentURL} />
    </div>
  );

  return <div>Payment</div>;
}

export default Payment;
