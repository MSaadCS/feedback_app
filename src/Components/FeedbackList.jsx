import FeedbackContext from "../Context/Feedback-data";
import { React, useContext } from "react";
import { Feedbackitem } from "./Feedbackitem";
export const FeedbackList = () => {
    const ctxData = useContext(FeedbackContext);
  
    if (!ctxData.feedback || ctxData.feedback.length === 0 ) {
        return <p>no feedbacks</p>
    }
    
    

  return (
    <>
        {
           ctxData.feedback.map((element)=>(
                <Feedbackitem key={element.id} rating={element.rating} text={element.text} ratingID={element.id}/>
            )).reverse()
        }
       
        
    </>
  )
}
