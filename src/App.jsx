import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

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
    <Router>
        <Header text="Hello world"/>
        <div className="container">
            <Routes>
                <Route exact path= "/" element={
                    <>
                        <FeedbackForm handleAdd = {addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>
                }>
                </Route>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    </Router>
    )
}

export default App;