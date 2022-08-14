import React, { useState } from 'react'
import Button from './shared/Button';
import Card from './shared/Card';


export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, steBtnDisabled] = useState(true);
  const [message, setMessage] = useState('')

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
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2> 
        {/*@todo - raiting select component*/}

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

