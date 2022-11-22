import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="important">


        <div className="aboutUs imp">
          <h2>AppleRealm</h2>
          <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ducimus blanditiis quam sequi animi in a voluptate enim quis adipisci.</p>
        </div>
        <div className="followUs imp">
          <h2>Follow Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis voluptates nostrum? Saepe, nobis provident.</p>
          <p className="social">
            <span style={{ marginRight: '15px' }}><img src={require('../Web/facebook.png')} alt="" /></span>
            <span><img src={require('../Web/twitter.png')} alt="" /></span>
          </p>
        </div>
        <div className="contact imp">
          <h2>Contact Us</h2>
          <p>AppleRealm: address @building124</p>
          <p>Call us now: 0123-456-789</p>
          <p>Email: support@whatever.com</p>
        </div>
      </div>

      <hr />

      <div className="extras">
        <div className="extra">
          <h2>Information</h2>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="extra">
          <h2>Service</h2>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="extra">
          <h2>Extras</h2>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="extra">
          <h2>My Account</h2>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="extra">
          <h2>Useful links</h2>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer