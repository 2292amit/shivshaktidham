import { SocialIcon } from 'react-social-icons';
import Nav from "react-bootstrap/Nav"
const FooterView = ({ children }) => {
    return (
      <>
        <div class="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container">
            <Nav className="mr-auto">
                <p className="navbar-text font-italic">Connect with us:  </p>
                <SocialIcon url="https://twitter.com/shivshakti" />
                <SocialIcon url="https://www.facebook.com/shivshaktidhamofficial/" />
            </Nav>
            <Nav className="ml-auto">
                <p className="navbar-text">© Shivshakti Dham Trust</p>
            </Nav>
            </div>
        </div>
      </>
    );
  };
  
  export default FooterView;