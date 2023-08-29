import React from "react";

import { Link } from "react-router-dom";
function Home() {
  return(
  <div>
  <Link to="/about">

  <button>ABOUT</button>
  </Link>
  <Link to="/contact">

  <button>Contact</button>
  </Link>
  </div>
  );
}

export default Home;
