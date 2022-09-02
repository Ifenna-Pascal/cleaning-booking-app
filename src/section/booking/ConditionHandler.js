import BookingIndexPage from "./BookingSteps";
import StepFive from "./BookingSteps/StepFive";
import StepFour from "./BookingSteps/StepFour";
import StepThree from "./BookingSteps/StepThree";
import StepTwo from "./BookingSteps/StepTwo";
import Review from "./Review";

const ConditionHandler = (step, handleChange, mockData, updatePrice=()=> {}, changeRooms=()=>{}) => {
    const handlers = {
        0: <BookingIndexPage mockData={mockData} handleChange={handleChange}/>,
        1: <StepTwo  nextStep={step}  mockData={mockData} handleChange={changeRooms} updatePrice={updatePrice}/>,
        2: <StepThree nextStep={step} mockData={mockData} handleChange={handleChange} />,
        3: <StepFour nextStep={step} mockData={mockData} handleChange={handleChange}/>,
        4: <StepFive nextStep={step}  mockData={mockData} handleChange={handleChange}/>,
        5: <Review data={mockData} step={step} />
    }
    return handlers[step]
}

export default ConditionHandler;