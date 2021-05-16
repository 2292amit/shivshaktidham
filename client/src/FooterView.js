import { SocialIcon } from 'react-social-icons';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FooterView = ({ children }) => {
    return (
      <>
            <div className="container" style={{padding:"10px",backgroundColor: "rgb(43, 46, 51)", color: "white"}}>
              <div className="container" style={{borderBottom: "1px solid white"}}>
                <Row >
                  <Col xs={12} sm={6} style={{textAlign: "center"}}>
                    <h5>Shiv Shakti Dham</h5>
                    <p>GopalMath, Durgapur, West Bengal</p>
                  </Col>
                  <Col xs={12} sm={6} style={{textAlign: "center"}}>
                    <h5>Founder</h5>
                    <p>Shri Sambhu Nath Singh</p>
                  </Col>
                </Row>
              </div>
            <div className="container" style={{marginTop: "10px"}}>
                <Row >
                  <Col xs={12} sm={4} style={{textAlign: "center"}}>
                    <p>© 2021 Shiv Shakti Dham, Durgapur</p>
                  </Col>
                  <Col xs={12} sm={4} style={{textAlign: "center"}}>
                    <p>shivshaktidhamdgr@gmail.com</p>
                  </Col>
                  <Col xs={12} sm={4} style={{textAlign: "center"}}>
                      <SocialIcon url="https://twitter.com/jaketrent" bgColor="transparent" fgColor="white"/>
                      <SocialIcon url="https://www.facebook.com/shivshaktidhamofficial" bgColor="transparent" fgColor="white"/>
                      <SocialIcon url="https://youtube.com" bgColor="transparent" fgColor="white"/>
                      <SocialIcon url="https://instagram.com" bgColor="transparent" fgColor="white"/>
                  </Col>
                </Row>
              </div>
            </div>
      </>
    );
  };
  
  export default FooterView;