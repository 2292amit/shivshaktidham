

const VideoView = ({ children }) => {
    return (
      <>
      <div class="container my-4">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sRKNkuUTlsY" allowfullscreen></iframe>
        </div>
      </div>
      <div class="container my-4">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ekHaG10xdf0" allowfullscreen></iframe>
        </div>
        </div>
        <div class="container my-4">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXuq20l2Hck" allowfullscreen></iframe>
        </div>
        </div>
      </>
    );
  };
  
  export default VideoView;
