import Carousel from 'react-bootstrap/Carousel'

const GalleryView = ({ children }) => {
  return (
    <>
        <Carousel className="border rounded" fade="true" indicators="false" controls="false">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pyJwC5w/1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Gvft1Gx/2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/30b6sHg/3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Jp6bYBx/4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Lhz7qF5/5.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/ynkK1FT/6.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/qD1dQXx/7.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/6yjr5PD/8.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/GTHC16J/9.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default GalleryView;
