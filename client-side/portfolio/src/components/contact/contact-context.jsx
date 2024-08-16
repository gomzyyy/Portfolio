import "./contact.css";
import "../global.css";
import "./contact-responsive.css"
import { useRef, useState } from "react";
import {
  NAME,
  ROLE,
  BREIF_TEXT,
  instagram,
  linkdin,
  twitter,
} from "../../assets/data";

export const ContactForm = () => {
  const contactFormRef = useRef();
  const [passwordError, setPasswordError] = useState(false);
  const defaultCountryCode = "+91";

  const checkPlus = (num) => {
    const numToString = num.toString().trim();
    if (numToString.length === 0) return;

    if (numToString.startsWith("+")) return;

    return `+${numToString}`;
  };

  const handleOnSubmitContact = (e) => {
    e.preventDefault();
    let contactData = [];

    const formData = new FormData(e.target);
    const name = formData.get("getName");
    const enteredcountryCode = formData.get("getCountryCode");
    const phoneNumber = formData.get("getContactNumber");
    const mailId = formData.get("getMail");
    const socialHandle = formData.get("getSocialHandle");
    const socialMediaType = formData.get("getSocialMediaType");
    const feedback = formData.get("feedback");
    if (phoneNumber.length > 0)
      if (phoneNumber.length !== 10)
        return alert("Please enter a valid phone number");

    const countryCode = enteredcountryCode
      ? checkPlus(enteredcountryCode)
      : defaultCountryCode;

    contactData = [
      name,
      countryCode,
      phoneNumber,
      mailId,
      socialHandle,
      socialMediaType,
      feedback,
    ];

    const jsonDataContact = JSON.stringify(contactData);
    contactFormRef && contactFormRef.current.reset();

    alert(`Dear ${name}, your request has beesn recorded.`);
    console.log(jsonDataContact);

    return jsonDataContact;
  };

  const handlePasswordError = (e) => {
    if (e.target.value.length === 10) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="form-container">
      <div className="contact-overview">
        <div className="contact-profile-image">
          <span className="contact-hover-box myname">{NAME}</span>
          <img src="./me.png" alt="" />
        </div>
        <div className="contact-info">
          <span className="contact-info-name">{NAME},</span>
          <span className="contact-info-text"> I'm a </span>
          <span className="contact-info-role">{`<${ROLE}/>`}</span>
          <span className="contact-info-small">{BREIF_TEXT}</span>
        </div>
      </div>
      <div className="contact-lable connect">Request a connection.</div>
      <form
        action="#"
        onSubmit={(e) => handleOnSubmitContact(e)}
        ref={contactFormRef}
      >
        <input
          type="text"
          className="get-name"
          name="getName"
          placeholder="full name (required)"
          required
        />
        {passwordError && (
          <span className="error-msg error-password">
            Please enter a valid phone number.
          </span>
        )}
        <div className="input-phone-number-details">
          <input
            type="number"
            className="get-country-code"
            name="getCountryCode"
            placeholder="(+91)"
          />
          <input
            type="number"
            className="get-phone-number"
            name="getContactNumber"
            onChange={(e) => handlePasswordError(e)}
            placeholder="enter your number (optional)"
          />
        </div>
        <input
          type="email"
          className="get-mail"
          name="getMail"
          placeholder="enter e-mail (required)"
          required
        />
        <div className="getMedia">
          <input
            type="text"
            className="get-social-handle"
            name="getSocialHandle"
            placeholder="social handle (i.e: @christian)"
          />
          <select
            name="getSocialMediaType"
            className="get-socalmedia-name"
            id="get-socalmedia-name"
          >
            <option value="">type</option>
            <option value="linkdin">Linkdin</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
          </select>
        </div>
        <textarea
          name="feedback"
          placeholder="feedback (optional)"
          className="get-feedback"
          cols="5"
        ></textarea>
        <button className="contact-form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export const SocialMediaContact = () => {
  const igLink = `https://www.instagram.com/urzyatin/`
  const linkedinLink = `https://www.linkedin.com/in/gomzy-dhingra-4140202b5/`
  const twitterLink = `https://x.com/urzyatin`
  return (
    <div className="social-media-side">

      <div className="link-container">
      <div className="contact-lable media-links">Lets connect via</div>
      <div className="link-icons">
        <a href={igLink} target="_blank" style={{color:"rgb(255, 2, 105)"}}>
          <div dangerouslySetInnerHTML={{ __html: instagram }} />
        </a>
        <a href={linkedinLink} target="_blank" style={{color:"blue"}}>
          <div dangerouslySetInnerHTML={{ __html: linkdin }} />
        </a>
        <a href={twitterLink} target="_blank" style={{color:"black"}}>
          <div dangerouslySetInnerHTML={{ __html: twitter }} />
        </a>
      </div>
      </div>
    </div>
  );
};
