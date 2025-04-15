import React from 'react'
const year: number = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
    <div className="icons">
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-twitter"></i>
    </div>
    <div className="copyright">
      <p className="year">{year}</p>
    </div>
    <div className="author">
      <p>
        Made with <span>Love & Passion</span>
      </p>
    </div>
  </footer>
  )
}
