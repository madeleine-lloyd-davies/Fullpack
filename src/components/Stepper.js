import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customListQuiz } from "../../data/packData";
import { MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material/";
import { useTheme } from "@mui/material/styles";
import WizardCategory from "./WizardCategory";

const Stepper = () => {
  const testArr = ["hi1", "hi2", "hi3", "hi4"];
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      <MobileStepper
        variant='progress'
        // replace steps with quiz.length
        steps={customListQuiz.length}
        position='static'
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === customListQuiz.length - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handlePrev} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Previous
          </Button>
        }
      />
      {WizardCategory(customListQuiz[activeStep])}
    </>
  );
};

export default Stepper;
