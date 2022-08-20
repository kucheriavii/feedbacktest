import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This item is feedback item 1"  ,
            rating: 10      
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

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
        console.log("App", id)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    return (
    <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext