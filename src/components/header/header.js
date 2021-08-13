import React from "react"
import './header.css'

const Header = ({ title }) => {
  return (
    <div className="header">
      <p className="title">{title}</p>
    </div>
  )
}

export default Header