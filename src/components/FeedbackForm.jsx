import React, { useContext, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import RaitingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';


export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRaiting] = useState(10);
  const [btnDisabled, steBtnDisabled] = useState(true);
  const [message, setMessage] = useState('')

  const {addFeedback} = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if(text === ''){
      steBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length<=10) {
      steBtnDisabled(true)
      setMessage('text must be at least 10 characters')
    } else {
      steBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedBack = {
        text,
        rating
      }

      addFeedback(newFeedBack)
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RaitingSelect select={(rating) => setRaiting(rating)}/>

        <div className='input-group'>
          <input type="text" 
              placeholder='write a review' 
              onChange={handleTextChange} 
              value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

