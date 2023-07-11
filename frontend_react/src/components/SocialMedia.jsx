import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/waqar-hassan628/' target='blank' >
            <BsLinkedin />
          </a>
    </div>
    <div>
      <a href='https://github.com/waqar629' target='blank'>
            <BsGithub />
          </a>
    </div>
    <div>
      <a href='https://www.facebook.com/DareDevil0007/' target='blank'>
            <BsFacebook />
          </a>
    </div>

  </div>
);

export default SocialMedia;
