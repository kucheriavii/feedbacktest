import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This item is feedback item 1"  ,
            rating: 5      
        },
        {
            id: 2,
            text: "This item is feedback item 2"  ,
            rating: 1     
        },
        {
            id: 3,
            text: "This item is feedback item 3"  ,
            rating: 1     
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        console.log("App", id)
    }
    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    //set item to be updeted
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item  ))
    }
 
    return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext