

const ContactView = ({ children }) => {
    return (
      <>
          <div class="container p-3 my-3 border rounded bg-light text-dark">
                <div class="text-center">
                    <h1>How to reach us?</h1>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    xxxx@xxx.com
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Direct Call</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    91xxxxxx89
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Whatsapp</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    91xxxxxx89
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Address</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    GT Rd, Gopalmath, Durgapur, West Bengal
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
  };
  
  export default ContactView;