import InputGroups from "./InputGroups";

function ContactRight() {
  return (
    <>
      <div className="contact-right">
        <form action="http://localhost:3000/" method="POST">
        <InputGroups/>
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
