import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
        console.log("App", id)
    }
    return (
    <>
        <Header text="Hello world"/>
        <div className="container">
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
    )
}

export default App;