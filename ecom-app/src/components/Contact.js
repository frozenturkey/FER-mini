import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Contact Us"
              height="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
