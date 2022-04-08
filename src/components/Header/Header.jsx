import './Header.css';
import logoo from '../../assets/img/logoo.png';
function Header(){
    return (
        <div>
            <header>
                <nav className="sticky-top">
                    <div className="nav-content">
                        <div className="nav-left-part">
                            <div className="nav-image">
                                <img src="https://raw.githubusercontent.com/bindhumadhavavarma/VIT-AP-ALUMNI/main/alumni-frontend-react/src/assets/img/logo.png?token=GHSAT0AAAAAABQ7BDXICAC6ZH4DIC3BN7TIYSQGV4Q" className="img-fluid" alt=""/>
                            </div>
                            <div className="nav-full">
                                VIT AP
                            </div>
                            <div className="nav-image-tab">
                                <p>Vellore Institute of Technology - AP</p>
                                <p>ALUMNI ASSOCIATION</p>
                            </div>
                        </div>
                        <div className="nav-right-part">
                            <div className="nav-login">
                                <a href="login.php" className="btn login">
                                Log in : : Register
                                </a>
                            </div>
                        </div>   
                    </div>
                </nav>
            </header>
            <menu className="sticky-top topnav" id="myTopnav">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="index.php">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="aboutus.php">ABOUT US</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ABOUT VITAA
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="coremembers.php">VITAA Core Committee Members</a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="gallery.php">GALLERY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.php">CONTACT US</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MORE
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="query.php">Send us a query</a>
                        <a className="dropdown-item" href="atf.php">Academic Transcripts Form</a>
                        <a className="dropdown-item" href="mc.php">Migration Certificate</a>
                        </div>
                    </li>
                </ul>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container-fluid nav-con">
                        <div className="nav-left-part">
                            <div className="nav-image">
                                <img src="https://raw.githubusercontent.com/bindhumadhavavarma/VIT-AP-ALUMNI/main/alumni-frontend-react/src/assets/img/logo.png?token=GHSAT0AAAAAABQ7BDXICAC6ZH4DIC3BN7TIYSQGV4Q" className="img-fluid" alt="VIT AP LOGO BLACK"/>
                            </div>
                            <div className="nav-image-tab">
                                <p>VIT AP</p>
                                <p>ALUMNI ASSOCIATION</p>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ALUMNI RECONNECT</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="aboutus.php">About Us</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle drop" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About VITAA
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a className="dropdown-item" href="coremembers.php">VITAA Core Committee members</a></li>
                                        <li><a className="dropdown-item" href="assDirector.php">Assistant Director, Alumni Affairs</a></li>
                                        <li><a className="dropdown-item" href="vitaaoffice.php">VITAA Office Bearers</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="gallery.php">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="contact.php">Contact Us</a>
                                    </li>              
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle drop" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                            <li><a className="dropdown-item" href="query.php">Send us a query</a></li>
                                            <li><a className="dropdown-item" href="act.php">Academic Transcripts Form</a></li>
                                            <li><a className="dropdown-item" href="mc.php">Migration Certificate</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item login">
                                        <a className="nav-link" aria-current="page" href="login.php">Login</a>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>  
            </menu>
        </div>
        
    );
}
export default Header;