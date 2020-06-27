import React from "react";
import profileImage from "./img/haile-peace-meme.png";

const Header = () => {
  return (
    <div className="flex flex-col border-solid border-4">
      <div>
        <div className="flex">
          {/* <div className="border-solid border-4">
            <img className="min-w-0"src={profileImage} alt="Haile Profile" />
          </div> */}
          <div className="flex-col">
            <div className="flex">
              <div>Hi, I'm Haile Shavers</div>
              <div>Lets Chat</div>
            </div>
            <div className="flex justify-between">
              <div>11 countries</div>
              <div>4 companies</div>
              <div>1 Haile</div>
            </div>
            <div>Designer | Developer | Dreamer</div>
            <div>Currently looking for frontend opportunities</div>
            <div>Welcome to my site. I am a frontend engineer based in Oakland, CA. I
            am looking for a team full of open-minded engineers and designers
            who are willing to take a chance on an eager girl who will
            contribute not only code but smiles 😁to the team! I am passionate
            about human-centered design and how to leverage privilege when
            creating applications for users. Email me and let's talk more! 🥰</div>
          </div>
        </div>
      </div>

      <div className="flex border-solid border-4">
          <ul>
            <li>
              <a href="resources/haile-resume-2020.pdf">
                <i class="fa fa-book" aria-hidden="true"></i>
                Resume
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/hshavers">
                <i class="fa fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://github.com/allhaile">
                <i class="fa fa-github"></i>
                Github
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/hshavers">
                <i class="fa fa-linkedin"></i>
                Linkedin
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
