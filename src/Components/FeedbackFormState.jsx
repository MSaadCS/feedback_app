import FeedbackContext from "../Context/Feedback-data";
import React, { useState , useEffect , useContext } from 'react'
import { FeedbackRating } from './FeedbackRating';
import { Button } from './Shared/Button';
import validationData from '../Data/validation';
export const FeedbackFormState = () => {
    const ctx = useContext(FeedbackContext);

   
    const [DisableBtn, setDisableBtn] = useState(true);


    const handleRatingChange = (e)=>{
        ctx.setSelected(parseInt(e.target.value));
    }

    const handleChangeText = (e)=>{
       
        ctx.setText(e.target.value);
        ctx.setMsg(validationData.textValidation); 
        
    }

    useEffect(() => {
        
       //Runs on the first render
       //And any time ctx changed
        if (ctx.Text.trim().length < 2 ) {
            setDisableBtn(true);      
            ctx.setShowMsg(true)
        }else{
            setDisableBtn(false);
            ctx.setShowMsg(false) 
        }
    },[ctx]);

    const addFeedback = (e)=>{
        e.preventDefault();
    
         const FeedbackObj = {rating : ctx.selected , text : ctx.Text};   

        if (ctx.allowEdit === true) {
            ctx.updateItem(ctx.editedItem.id, FeedbackObj);
           
        }else{
            ctx.addNewFeedback(FeedbackObj);
        }
       
    }
    
    
  return (
    <div className='card'>
        <form onSubmit={addFeedback}>
            <h2>How Woud u rate our service ?</h2>
            <FeedbackRating handleRatingChange={handleRatingChange}/>
            <div className='input-group'>
                <input type="text" placeholder='write a review' onChange={handleChangeText} value={ctx.Text}/>
                <Button type='submit' version='secondary' isDisabled={DisableBtn}>send</Button>
            </div>
            <p style={{color: "red"}}>{ctx.Showmsg && ctx.msg }</p>
        </form>
    </div>
  )
}
