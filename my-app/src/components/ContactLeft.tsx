
import contactLeftData from "../utilities/ContactLeftData";

function ContactLeft() {
  return (
    <>
      <div className="contact-left">
      {contactLeftData.map((item, index) => (
      
          <div className={item.classNameDiv}>
            <i className={item.classNameIcon}></i>
            <div className="contact-info">
              <span>{item.span}</span>
           
            </div>
          </div>
      
      ))}
      </div>
    </>
  );
}

export default ContactLeft;

{/* <span>{item.skills}</span> */}

{
  /* <div className="freelance">
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
</div> */
}
