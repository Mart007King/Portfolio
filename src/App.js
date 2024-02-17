import logo from './bio_images/logo.png';
import me from './bio_images/me.jpg';
import brand from './bio_images/brand.png';
import code from './bio_images/code.jpg';
import soft from './bio_images/soft.jpg';
import cv from './sites/CV.pdf';
import { Reveal } from './component/Reveal';

import './App.css';

function App() {

  return (
   
    <>
    <div className="container-fluid navigation">
      <div className="row">
        <div className="col-md">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand logo " href="#">
                <img src={logo} alt="Logo Picture" width="30%" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse navi"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end"
                  }}
                >
                  
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Me
                    </a>
                  </li>
                  <button className="btn btn-info btn-sm btn-outline-info">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Browse Skills
                      </a>
                      <ul className="dropdown-menu bg-black">
                        <li>
                          <a className="dropdown-item" href="#">
                            Branding Skills
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Web development Skills
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Back-end dev Skills
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Front-end dev Skills
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            See More
                          </a>
                        </li>
                      </ul>
                    </li>
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="container-fluid ban">
      <div className="container banner">
        <div className="row">

          <Reveal>
            <div className="col-md">
              <img
                src={me}
                alt="picture of martins king"
                width="100%"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md top">
          <Reveal>
            <h1 className="head p-4">
              {" "}
              HAVE A TASTE OF MY <span className="extra">CREATIVE JUICE</span>
            </h1>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="row">

            <div className="col-md text2">

                <p className="text m-3">
              
                  Hello there! Welcome to my world. A place where 
                  businesses and humans align with my juice which allows
                their vision fly. A place where all tech related issues has a solution.
                </p>
            </div>

        </div>
      </Reveal>

      <Reveal>
        <div className="row m-5">
          <div className="col-md offer">
            
              <div
                className="badge juice text-wrap"
                style={{ width: "6rem", textAlign: "center" }}
              >
                <i className="fa-solid fa-martini-glass-citrus" />
                <span style={{ fontSize: 17 }}>What My Juice Offers</span>
              </div>
            
          </div>
        </div>
      </Reveal>
    </div>
    <div className="container-fluid">
      <div className="row">
        <Reveal>
          <div className="col-md-12 box1">
            <div className="card" style={{ width: "30rem" }}>
              <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  src={brand}
                  className="card-img-top img-fluid"
                  alt="pic for branding"
                />
                <div className="card-body">
                  <p className="card-text text-info">
                    I specialize in making a brand for a company which includes
                    creation of a unique logo, brand font and official color.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="row">
        <Reveal>
          <div className="col-md-12 box2">
            <div className="card" style={{ width: "30rem" }}>
              <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  src={code}
                  className="card-img-top img-fluid"
                  alt="pic for web dev"
                />
                <div className="card-body">
                  <p className="card-text text-info">
                    And then proceed to to design the website layout that
                    complements the brand name, logo and color.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="row">
        <Reveal>
          <div className="col-md-12 box3">
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card" style={{ width: "30rem" }}>
                <img
                  src={soft}
                  className="card-img-top img-fluid"
                  alt="pic for software dev"
                />
                <div className="card-body">
                  <p className="card-text text-info">
                    Website applications that involves both the back-end and
                    front-end of the development will all be taken care of by me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="row m-5">
          <div className="col-md offer">
            
              <div
                className="badge juice text-wrap"
                style={{
                  width: "6rem",
                  textAlign: "center",
                  backgroundColor: "#D14081 !important"
                }}
              >
                <i className="fa-solid fa-martini-glass-citrus" />
                <span style={{ fontSize: 17 }}>Recent Sites My Juice Designed</span>
              </div>
            
          </div>
        </div>
      </Reveal>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <Reveal>
                  <div className="card">
                    <div className="card-body">
                      <div className="ratio ratio-16x9">
                        <iframe src='#' allowFullScreen="" />
                      </div>
                      <a
                        href="index.html"
                        className="btn m-3"
                        style={{ backgroundColor: "#D14081 !important" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <Reveal>
                  <div className="card">
                    <div className="card-body">
                      <div className="ratio ratio-16x9">
                        <iframe src='#' allowFullScreen="" />
                      </div>
                      <a
                        href="gas_up"
                        className="btn m-3"
                        style={{ backgroundColor: "#D14081 !important" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 background"></div>
      </div>
    </div>
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md my-5">
          <div className="card text-center">
            <div className="card-header"></div>
            <Reveal>
              <div className="card-body">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Me
                  </button>
                  <div
                    className="dropdown-menu p-4 text-body-info drop"
                    style={{ maxWidth: 200 }}
                  >
                    <a href={cv} target="_blank">
                      Download Cv
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="row">
          <div className="col-md my-5">
            <Reveal>
              <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                  <h5 className="card-title">FIND ME EVERYWHERE</h5>
                  <p className="card-text">
                    <a href="#" className="btn btn-primary">
                      <img src="icon/facebook.png" width="10%" />
                    </a>
                  </p>
                  <br />
                  <p className="card-text">
                    <a href="#" className="btn btn-primary">
                      <img src="icon/instagram.png" width="10%" />
                    </a>
                  </p>
                  <br />
                  <p className="card-text">
                    <a href="#" className="btn btn-primary">
                      <img src="icon/twitter.png" width="10%" />
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </>
  
      
  );
}



export default App;
