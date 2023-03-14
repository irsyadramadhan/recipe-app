import React from 'react';

class Footer extends React.Component {
  render() {
    return (
    <footer>
      <div className="container">
        <div className="row firstRow">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className="text-center my-text-blue">Eat, Cook, Repeat</h1>
            <p className="text-center">Share Your Best Recipe by Uploading Here!</p>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row secondRow">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <a className="link-secondary" href="#">Product</a>
            <a className="link-secondary" href="#">Company</a>
            <a className="link-secondary" href="#">Learn More</a>
            <a className="link-secondary" href="#">Get in Touch</a>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;