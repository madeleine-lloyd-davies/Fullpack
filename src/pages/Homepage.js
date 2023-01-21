import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PackingList } from "../components";

const Homepage = () => {
  return (
    <div>
      <PackingList />
    </div>
  );
};
export default Homepage;
