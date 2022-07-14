import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

const link = links.map((navb)=> {
  return(
    <a key= {navb} href={"#"+navb}>{navb}</a>
  )
} )

  return <nav>
    
    {link}

  </nav>;
}

export default NavBar;
 