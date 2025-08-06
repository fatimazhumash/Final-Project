

import { Link } from "react-router-dom";
import "./Navbar.css"; // CSS файлын қосу

function Navbar() {
  return (
    <div className="navbar">
  
      <Link to="/home" className="active">
        <i className=" fa-home"></i> Home
      </Link>

     
      <Link to="/search">
        <i className=" fa-search"></i>  Search
      </Link>

     
      <Link to="/messenger">
        <i className="fa-messenger"></i> Messenger
      </Link>

    
      <Link to="/profile">
        <i className="fa-profile"></i> Profile
      </Link>


       
            
    </div>
  );
}

export default Navbar;