import React from 'react'

function ContactLeft() {
  return (
    <>
      <div className="contact-left">
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <div className="contact-info">
                  <span>Address</span>
                  <span>London, UK</span>
                </div>
              </div>
              <div className="freelance">
                <i className="fa-regular fa-user"></i>
                <div className="contact-info">
                  <span>Developer</span>
                  <span>Available Right Now</span>
                </div>
              </div>
              <div className="email">
                <i className="fa-regular fa-envelope"></i>
                <div className="contact-info">
                  <span>Email</span>
                  <span>josue.jure@gmail.com</span>
                </div>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <div className="contact-info">
                  <span>Phone</span>
                  <span>+7887399922</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default ContactLeft