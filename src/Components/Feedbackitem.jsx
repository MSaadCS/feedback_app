import FeedbackContext from "../Context/Feedback-data";
import { React, useContext } from "react";
import {FaTimes, FaEdit} from 'react-icons/fa';
export const Feedbackitem = ({rating , text , ratingID}) => {
  const ctx = useContext(FeedbackContext);
  return (
    <div className="card">
        <div className="num-display">
            {rating}  
        </div>
        <button onClick={()=>ctx.editItem(rating , text, ratingID)} className="edit"><FaEdit/></button>
        <button className="close" onClick={()=>ctx.deleteItem(ratingID)}><FaTimes/></button>
        <div className="text-display">
            {text}
        </div>
    </div>
  )
}
