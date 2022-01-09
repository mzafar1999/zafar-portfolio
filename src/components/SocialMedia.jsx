import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub, faLinkedinIn,faTwitter,faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './social.css'
const SocialMedia = () => {
    return (
        <div id="social" className="container-fluid social">
      <h1 className='pt-3'>Connect</h1>
        <div>
        {/* <FontAwesomeIcon icon={faFacebook} size="3x" className="social-icon " /> */}
        <FontAwesomeIcon icon={faInstagram} size="3x" className="social-icon " />
        <a href="https://www.linkedin.com/in/muhammad-zafar-757758199/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn}  size="3x" className="social-icon " />
        </a>
        {/* <FontAwesomeIcon icon={faTwitter} size="3x" className="social-icon " /> */}
        <a href="https://github.com/mzafar1999" target="_blank">
        <FontAwesomeIcon icon={faGithub}  size="3x" className="social-icon " />
        </a>
      
        </div>
      
        <div>
        <h5 style={{margin:'0',padding:'10px'}}> This website is built with ReactJS, Express.js and Node.JS. <br/> Copyright &copy; reserved 2022</h5>

        </div>
      </div>);
}

export default SocialMedia
