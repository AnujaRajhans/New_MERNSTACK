
import React from 'react'

const Button = (props) => {
  const btn= {
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    textAlign: 'right',
    justifycontent: 'center',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'primary',
    }
  }
  return (
    <div>
     <button style= {btn}>{props.data}</button>
    </div>

  )
}

export default Button


