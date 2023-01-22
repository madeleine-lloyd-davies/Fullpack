import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={"/basic"}>Click here for a basic packing list</Link>
    </div>
  );
};
export default Homepage;
