import ContactComponent from "../components/ContactComponent";
import { contactContent } from "../data/siteContent";

const Contact = () => {
  return <ContactComponent title={contactContent.title} description={contactContent.description} />;
};

export default Contact;