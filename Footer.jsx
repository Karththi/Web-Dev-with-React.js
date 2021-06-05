import React from "react";

function Footer(){
var currentYear=new Date().getFullYear();
return <footer>
  <p>Authored by Karthiga Sivapiragasam | copyright @ {currentYear}</p>
  </footer>;
}

export default Footer;