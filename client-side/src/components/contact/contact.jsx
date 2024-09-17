import "./contact.css";
import "../global.css";
import { ContactForm, SocialMediaContact } from "./contact-context";
const Contact = () => {
  return (
    <main className="main contact-page">
           <ContactForm />
      <SocialMediaContact />
    </main>
  );
};
export default Contact;
