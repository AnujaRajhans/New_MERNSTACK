import React from 'react'

const Themeswitcher = ({theme, toggleTheme}) => {
  return (
    <div className="form-check-switch mt-5">
      <input className='form-check-input' 
      type="checkbox" 
      id= "themeSwitch"
      checked={theme === 'dark'}
      onChange={toggleTheme}>
      </input>
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === 'dark' ? 'light mode' : 'dark mode'}
      </label>
    </div>
  )
}

export default Themeswitcher
