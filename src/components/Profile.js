import React from "react";
import Image2 from "../components/img/img2.jpg";

function Profile() {
  return (
    <div className="row">
      <about-container>
        <img src={Image2} alt="Blair Taylor" height="350" />
        <h3> Blair Taylor</h3>
        <h4>
          <a href="mailto:blairntaylor@gmail.com&subject=Website Inquiry">
            blairntaylor@gmail.com
          </a>{" "}
          | 646-584-1033
        </h4>
        <p>
          I am a graphic designer and web developer. My work includes product
          and packaging development for multinational media companies,
          communications management including media and text campaigns for
          grassroots politics, and brand development for several nonprofits.
          Recently, I have been working towards full stack development
          certification for front and back end coding from the University of
          Denver. Prior to that, I completed a prep course in Remote Software
          Engineering at Hackbright Academy.
        </p>
        <p>
          I have earned an MBA in Strategic Development from the University of
          Denver, as well as an MFA and BFA in Graphic Design from the Savannah
          College of Art and Design.
        </p>

        <a id="link" href="https://github.com/blairntaylor">
          <h5>GitHub profile</h5>
        </a>
        <a id="link" href="https://www.linkedin.com/in/blairtaylordenver/">
          <h5>LinkedIn profile</h5>
        </a>
      </about-container>
    </div>
  );
}

export default Profile;
