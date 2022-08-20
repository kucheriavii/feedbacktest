import React from 'react'
import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function RaitingSelect({select}) {

    const [selected, setSelected] = useState(5)

    const {feedbackEdit} = useContext(FeedbackContext)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(() => {
      setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    return (
        <ul className='rating'>
          <li>
            <input
                type="radio"
                id="num1"
                name="raiting"
                value="1"
                onChange={handleChange}
                checked={selected === 1}
            />
            <label htmlFor='num1'>1</label>
          </li>
          <li>
            <input
                type="radio"
                id="num2"
                name="raiting"
                value="2"
                onChange={handleChange}
                checked={selected === 2}
            />
            <label htmlFor='num2'>2</label>
          </li>
          <li>
            <input
                type="radio"
                id="num3"
                name="raiting"
                value="3"
                onChange={handleChange}
                checked={selected === 3}
            />
            <label htmlFor='num3'>3</label>
          </li>
          <li>
            <input
                type="radio"
                id="num4"
                name="raiting"
                value="4"
                onChange={handleChange}
                checked={selected === 4}
            />
            <label htmlFor='num4'>4</label>
          </li>
          <li>
            <input
                type="radio"
                id="num5"
                name="raiting"
                value="5"
                onChange={handleChange}
                checked={selected === 5}
            />
            <label htmlFor='num5'>5</label>
          </li>
        </ul>
      )
}
