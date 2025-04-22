import React from 'react'

interface onClickType {
    onClick: () => void
}

function Icon(props: onClickType) {
  return (
    <div
    className='menu-icon'
    onClick={props.onClick}
    // onClick={() => MenuIcon()}
    // className={`menu-icon ${menuOpen === true ? "change" : ""}`}
  >
    <div className="line line-1"></div>
    <div className="line line-2"></div>
  </div>
  )
}

export default Icon