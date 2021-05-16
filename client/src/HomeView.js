import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import GalleryView from "./GalleryView";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaPhoneAlt, FaDirections, FaMailBulk } from 'react-icons/fa';

const HomeView = ({ children }) => {
  return (
    <>
      <GalleryView></GalleryView>
      <div class="container p-3 my-3 border rounded bg-light text-dark">
        <div class="text-center">
          <h4>About Shiv Shakti Dham</h4>
          <p>Shiv Shakti Dham is a hindu temple located in Gopalmath area of Durgapur.</p>
          <p>The temple was inaugrated on XXXX</p>
          <p>The temple is devoted to Hindu God Shiva.</p>
        </div>
      </div>
      <div class="container p-3 my-3 border rounded bg-light text-dark">
        <div class="text-center">
          <h4>Explore</h4>
          <div class="container p-3 my-3 border rounded bg-light text-dark">
            <Row>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/sF5Mr97/13.jpg" roundedCircle fluid /><div>Mandir</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/ZV0cNQN/12.jpg" roundedCircle fluid /><div>Interior</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/xXyk020/14.jpg" roundedCircle fluid /><div>Lake</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/jy1VghS/15.jpg" roundedCircle fluid /><div>Inaugration</div></Button></Col>
            </Row>
          </div>
        </div>
      </div>
      <div class="container p-3 my-3 border rounded bg-light text-dark">
        <div class="text-center">
          <h4>Contact</h4>
          <div class="container p-3 my-3 border rounded bg-light text-dark">
            <Row>
              <Col xs={4}><Button class="btn-block" href="tel:11111111"><FaPhoneAlt /></Button></Col>
              <Col xs={4}><Button class="btn-block" href="https://goo.gl/maps/h25Z7X2DFcwDEMV38"  target="_blank"><FaDirections/></Button></Col>
              <Col xs={4}><Button class="btn-block" href="/contactus"><FaMailBulk /></Button></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;

