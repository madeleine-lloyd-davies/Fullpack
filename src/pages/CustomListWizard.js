import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customListQuiz } from "../../data/packData";
import { MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material/";
import Stepper from "../components/Stepper";

const CustomListWizard = () => {
  return <Stepper />;
};
export default CustomListWizard;
