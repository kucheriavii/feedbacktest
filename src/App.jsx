import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

function App() {
    return (
    <>
        <Header text="Hello world"/>
        <div className="container">
            <FeedbackItem />
        </div>
    </>
    )
}

export default App;