
import '../style/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          {/* You can put your logo here */}
        </div>
        <div className="menu-bar">
          <a className="menu-link" href="#dashboard">Dashboard</a>
          <a className="menu-link" href="#projects">Projects</a>
          <a className="menu-link" href="#services">Services</a>
          <a className="menu-link" href="#settings">Settings</a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="login">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

