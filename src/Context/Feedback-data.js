import { useState, createContext } from "react";
import  {v4 as uuidv4} from 'uuid';
const FeedbackDataContext = createContext();

export const FeedbackContext = ({children}) =>{

    const [selected, setSelected] = useState(10);
    const [Text, setText] = useState('');
    const [msg,setMsg] = useState('');
    const [Showmsg,setShowMsg] = useState(false);
    const [allowEdit, setAllowEdit] = useState(false);
    const [editedItem , setEditedItem] = useState({});

    const [feedback , setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },

        {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },

        {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },

    ])

    const addNewFeedback = (feedbacKItem)=>{

            feedbacKItem.id = uuidv4();
            setFeedback([...feedback, feedbacKItem]);
            setText('');
            setSelected();
            setShowMsg(false);
            setMsg('')
            
      }

    const deleteItem = (rating_id)=>{
        if(window.confirm('Are you sure you want to delete ?')){
         setFeedback(feedback.filter((element)=>(
           element.id !== rating_id
         )))
        }
       }

    const editItem = (rating , text , rating_id)=>{
        const item = {
            id : rating_id,
            rating : rating,
            text : text,
        }
        setText(text);
        setSelected(rating);
        setAllowEdit(true);
       setEditedItem(item);
    }

    const updateItem = (id, updatedItem)=>{

        setFeedback(feedback.map((ele)=>(
            ele.id === id ? {id : id , rating : updatedItem.rating , text : updatedItem.text} : ele
        )))
     
        setText('');
        setSelected();
        setShowMsg(false);
        setMsg('')
        setAllowEdit(false);
        
            
    }

    return  <FeedbackDataContext.Provider value={{
        feedback , 
        deleteItem , 
        addNewFeedback,
        editItem,
        updateItem,
        setText,
        setSelected,
        setShowMsg,
        setMsg,
        selected,
        Text,
        msg,
        Showmsg,
        editedItem,
        allowEdit
        }}>
                {children}
            </FeedbackDataContext.Provider>

}
export default FeedbackDataContext ;



