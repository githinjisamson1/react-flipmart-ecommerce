import React from "react";
import "./details.css";
import { useParams } from "react-router-dom";

const Details = () => {
  const { productId } = useParams();
  console.log(productId);
  return <div>Details for {productId}</div>;
};

export default Details;
