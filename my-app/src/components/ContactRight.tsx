

function ContactRight() {
  return (
    <>
      <div className="contact-right">
        <form action="/" method="POST">
          <div className="input-groups">
            <div className="input-group">
              <label htmlFor="name">
                Your full name <i className="fa-solid fa-asterisk"></i>
              </label>
              <input type="text" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">
                Your email address <i className="fa-solid fa-asterisk"></i>
              </label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="subject">
              Your subject <i className="fa-solid fa-asterisk"></i>
            </label>
            <input type="text" name="subject" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">
              Your message <i className="fa-solid fa-asterisk"></i>
            </label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactRight;
