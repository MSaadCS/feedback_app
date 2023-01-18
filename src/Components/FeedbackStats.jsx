import FeedbackContext from "../Context/Feedback-data";
import { React, useContext } from "react";
export const FeedbackStats = () => {
    const ctx = useContext(FeedbackContext);
    let feedbackListLength = ctx.feedback.length;
    let feedbackAverage = ctx.feedback.reduce((total, currentValue, currentIndex, arr)=>{
        return total + currentValue.rating;
    }, 0)/feedbackListLength;
  return (
    <div className="feedback-stats">
        <h4>{feedbackListLength} Reveiews</h4>
        <h4>average rating : {isNaN(feedbackAverage) ? 0 : feedbackAverage.toFixed(1)}</h4>
    </div>
  )
}
