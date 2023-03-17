import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="py-5" style={{backgroundColor: "#EFC81A", position: "absolute", left: 0, bottom: 0, right: 0}}>
        <div className="container text-center" style={{color: "#2E266F"}}>
          <h1>Eat, Cook, Repeat</h1>
          <br />
          <small className="text-50">&copy; Copyright by Pijar Camp. All rights reserved.</small>
        </div>
      </footer>
    )
  }
}

export default Footer;