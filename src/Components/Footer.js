import React from 'react'

const Footer = () => {
  //include css by creating objects
  let footerStyle = {
    position:"relative",
    top : "100vh",
    width :"100%"
  }
  return (



  <footer className="footer-copyright text-center py-3"style={footerStyle}>
    © 2020 Copyright:
    <a href="https://github.com/Manndar"  target="_blank"> Manndar Lokhande</a>
  </footer>

  )
}

export default Footer
