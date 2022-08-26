import BookingIndexPage from "./BookingSteps";
import StepFive from "./BookingSteps/StepFive";
import StepFour from "./BookingSteps/StepFour";
import StepThree from "./BookingSteps/StepThree";
import StepTwo from "./BookingSteps/StepTwo";

const ConditionHandler = (step, nextStep) => {
    const handlers = {
        0: <BookingIndexPage nextStep={nextStep} />,
        1: <StepTwo  nextStep={step} />,
        2: <StepThree nextStep={step} />,
        3: <StepFour nextStep={step} />,
        4: <StepFive nextStep={step} />,
    }
    return handlers[step]
}

export default ConditionHandler;