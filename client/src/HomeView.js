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
              <Button class="btn-block" href="#">Call</Button>
              <Button class="btn-block" href="#">Direction</Button>
              <Button class="btn-block" href="/contactus">Contact</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;