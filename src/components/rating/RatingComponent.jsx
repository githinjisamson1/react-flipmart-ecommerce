import { Rating } from "@mui/material";
import React from "react";

// inline destructuring rating
const RatingComponent = ({ rating }) => {
  return <Rating name="half-rating" defaultValue={rating} precision={0.5} />;
};

export default RatingComponent;
