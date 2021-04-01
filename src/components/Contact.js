import React from "react";

function Contact() {
  return (
    <>
      <form className="container">
        <div className="row">
          <div className="col-sm-7">
            <h1>Contact</h1>
            <hr />
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput2">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <br />
            <button type="button" className="btn btn-dark btn-lg bg-light">
              <a href="mailto:blairntaylor@gmail.com">Send</a>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
