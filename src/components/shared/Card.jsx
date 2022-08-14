import React from 'react'
import PropTypes from 'prop-types';

export default function Card({children, reverse }) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className={`card`} style={{
        backgroundColor: reverse? 'rgb(0,0,0,.4)':'#fff',
        color: reverse? '#fff' : '#000'
    }}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
