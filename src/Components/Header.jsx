import React from 'react'

export const Header = ({header_text}) => {
  return (
    <header>
        <div className='container'>
            <h1>{header_text}</h1>
        </div>
    </header>
  )
}
