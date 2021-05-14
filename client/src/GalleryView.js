import Carousel from 'react-bootstrap/Carousel'

const GalleryView = ({ children }) => {
  return (
    <>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://lh5.googleusercontent.com/p/AF1QipMTWHNkw8Sca9uptVz4XBwIpYHsBx4CkJpuIB9c=s965-k-no"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Piece of art</h3>
            <p>Made of stones from Rajasthan.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://lh5.googleusercontent.com/p/AF1QipMMaapmJQ8g2JGG9nrbSO88_S5otzdpffGAF1ar=w203-h114-k-no"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Night View</h3>
            <p>Gets even more beautiful in evening.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh5.googleusercontent.com/p/AF1QipOOndo7oNJKPg2EkfoeCFAktw-q15414C4MK5WT=w203-h135-k-no"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Stone art</h3>
            <p>Hundreds of beautiful stone sculptures.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default GalleryView;