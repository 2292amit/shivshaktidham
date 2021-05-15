import Button from "react-bootstrap/Button";
import GalleryView from "./GalleryView";

const HomeView = ({ children }) => {
  return (
    <>
      <GalleryView></GalleryView>
      <div class="container p-3 my-3 border rounded bg-light text-dark">
        <div class="text-center">
          <h4>Welcome to</h4>
          <h1>Shiv Shakti Dham Temple</h1>
          <p>Temple is currently closed for public.</p>
          <div class="mb-3">  
              <Button class="btn-block" href="tel:11111111">Call</Button>
              <Button class="btn-block" href="https://goo.gl/maps/h25Z7X2DFcwDEMV38"  target="_blank">Direction</Button>
              <Button class="btn-block" href="/contactus">Contact</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;