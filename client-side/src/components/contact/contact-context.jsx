import "./contact.css";
import "../global.css";
import "./contact-responsive.css";
import { useRef, useState } from "react";
import {
  NAME,
  ROLE,
  BREIF_TEXT,
  instagram,
  linkdin,
  twitter,
} from "../../assets/data";

const BASE_URL = `http://localhost:8000/api/`;

export const ContactForm = () => {

  console.log(BASE_URL + "connect")
  const sendConnection = async (
    fullName,
    countryCode,
    phoneNumber,
    email,
    socialHandleId,
    socialHandleType,
    feedback
  ) => {
    try {
      const send = await fetch(BASE_URL + "connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          countryCode,
          phoneNumber,
          email,
          socialHandleId,
          socialHandleType,
          feedback,
        }),
      });

      if (!send.ok) {
        throw new Error();
        return;
      }
      const res = await send.json();
      return res;
    } catch (error) {
      return "Error occured while sending request" + error;
    }
  };

  const contactFormRef = useRef();
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const defaultCountryCode = "+91";

  const checkPlus = (num) => {
    const numToString = num.toString().trim();
    if (numToString.length === 0) return;

    if (numToString.startsWith("+")) return;

    return `+${numToString}`;
  };

  const handleOnSubmitContact = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get("getName");
    const enteredcountryCode = formData.get("getCountryCode");
    const phoneNumber = formData.get("getContactNumber");
    const email = formData.get("getMail");
    const socialHandleId = formData.get("getSocialHandle");
    const socialMediaType = formData.get("getSocialMediaType");
    const feedback = formData.get("feedback");
    if (phoneNumber.length > 0)
      if (phoneNumber.length !== 10)
        return alert("Please enter a valid phone number");

    const countryCode = enteredcountryCode
      ? checkPlus(enteredcountryCode)
      : defaultCountryCode;

    const res = await sendConnection(
      userName,
      countryCode,
      phoneNumber,
      email,
      socialHandleId,
      socialMediaType,
      feedback
    );

    contactFormRef && contactFormRef.current.reset();
    return res;
  };

  const handlePasswordError = (e) => {
    if (e.target.value.length === 10) {
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
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
        {phoneNumberError && (
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
  const igLink = `https://www.instagram.com/urzyatin/`;
  const linkedinLink = `https://www.linkedin.com/in/gomzy-dhingra-4140202b5/`;
  const twitterLink = `https://x.com/urzyatin`;
  return (
    <div className="social-media-side">
      <div className="link-container">
        <div className="contact-lable media-links">Lets connect via</div>
        <div className="link-icons">
          <a
            href={igLink}
            target="_blank"
            style={{ color: "rgb(255, 2, 105)" }}
          >
            <div dangerouslySetInnerHTML={{ __html: instagram }} />
          </a>
          <a href={linkedinLink} target="_blank" style={{ color: "blue" }}>
            <div dangerouslySetInnerHTML={{ __html: linkdin }} />
          </a>
          <a href={twitterLink} target="_blank" style={{ color: "black" }}>
            <div dangerouslySetInnerHTML={{ __html: twitter }} />
          </a>
        </div>
      </div>
    </div>
  );
};
