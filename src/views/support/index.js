// ==============================|| DEFAULT DASHBOARD ||============================== //
import './index.css';
const Support = () => {
  return (
    <div>
      <h2 className="support-h">Support</h2>
      <p>
        To get in touch, fill out the form below or email us at
        <a className="support-a" href="mailto:info@bhr.fyi">
          info@hbr.fyi
        </a>
      </p>
      <div className="contact-form">
        <p className="contact-form-p">Contact Form</p>
        <div className="contact-form-part">
          <label className="contact-form-label" htmlFor="name">
            Your Name
          </label>
          <input placeholder="Name" className="contact-form-input" name="name" />
        </div>
        <div className="contact-form-part">
          <label className="contact-form-label" htmlFor="email">
            Email Address
          </label>
          <input placeholder="Email" className="contact-form-input" name="email" />
        </div>
        <div className="contact-form-part">
          <label className="contact-form-label" htmlFor="subject">
            Subject
          </label>
          <input placeholder="Subject" className="contact-form-input" name="subject" />
        </div>
        <div className="contact-form-part">
          <label className="contact-form-label" htmlFor="message">
            Message
          </label>
          <textarea rows="4" placeholder="Message" className="contact-form-input" name="message" />
        </div>
        <div className="contact-form-part">
          <button className="contact-form-submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
