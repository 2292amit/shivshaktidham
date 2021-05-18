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
      <div class="container p-3 my-3 bg-light text-dark">
        <div class="text-center">
          <h4>About Shiv Shakti Dham</h4>
          <p>The Shivshakti Dham Temple is open to tourists for 24 hours. Hence, one can visit this mystical place at any time of the year and at any time of the day. On Mondays, special Shiv Aartis take place every 2 hours and the Somvaar ka Tyohar is celebrated.  </p>
          <p>In the first three months of 2021, the temple has already been visited by XXXXX people.</p>
          <p>It is a famous Shiva Temple dedicated to the Hindu deity Lord Shiva and a popular spiritual destination.</p>
        </div>
      </div>
      <div class="container p-3 my-3 bg-light text-dark">
        <div class="text-center">
          <h4>Timings</h4>
          <h5>Visiting hours</h5>
          <p>Monday to Sunday 8 am to  12 am, 4 pm to 7 pm</p>
          <h5>Aaarti</h5>
          <p>11 am and 6 pm</p>
          <p>Temperorily closed due to Covid-19 guidelines.</p>
        </div>
      </div>
      <div class="container p-3 my-3 bg-light text-dark">
        <div class="text-center">
          <h4>Explore</h4>
          <div class="container p-3 my-3 bg-light text-dark">
            <Row>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/sF5Mr97/13.jpg" roundedCircle fluid /><div>Mandir</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/ZV0cNQN/12.jpg" roundedCircle fluid /><div>Interior</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/xXyk020/14.jpg" roundedCircle fluid /><div>Lake</div></Button></Col>
              <Col xs={6} sm={3}><Button class="btn-block" variant="light" href="/about"><Image src="https://i.ibb.co/jy1VghS/15.jpg" roundedCircle fluid /><div>Inaugration</div></Button></Col>
            </Row>
          </div>
        </div>
      </div>
      <div class="container p-3 my-3 bg-light text-dark">
        <div class="text-center">
          <h4>Contact</h4>
          <div class="container p-3 my-3 bg-light text-dark">
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

