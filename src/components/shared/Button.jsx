import React from 'react'
import { PropTypes } from 'prop-types';

export default function Button({children, version, type, isDisabled}) {
    console.log(isDisabled)
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}


Button.propTpes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.boolean,
}