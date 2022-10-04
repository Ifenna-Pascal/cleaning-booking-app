import BookingIndexPage from "./BookingSteps";
import StepFive from "./BookingSteps/StepFive";
import StepTwo from "./BookingSteps/StepTwo";
import Review from "./Review";

const ConditionHandler = (step, handleChange, mockData) => {
    const handlers = {
        0: <BookingIndexPage mockData={mockData} handleChange={handleChange}/>,
        1: <StepTwo  nextStep={step}  mockData={mockData} handleChange={handleChange}/>,
        2: <StepFive nextStep={step}  mockData={mockData} handleChange={handleChange}/>,
        3: <Review data={mockData} step={step} />
    }
    return handlers[step]
}

export default ConditionHandler;