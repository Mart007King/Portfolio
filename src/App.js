import logo from './bio_images/logo.png';
import me from './bio_images/me.jpg';
import brand from './bio_images/brand.png';
import code from './bio_images/code.jpg';
import soft from './bio_images/soft.jpg';
import cv from './sites/CV.pdf';
import fb from './icon/facebook.png';
import linked from './icon/linked.png';
import ig from './icon/instagram.png';
import x from './icon/x.png';
import git from './icon/github.png';
import zwork from './bio_images/zwork.jpg';
import last from './bio_images/last.jpeg';
import Progress_bar from './component/Progress_bar';
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
      {/* <div className="row">
        <div className="col-md top">
          <Reveal>
            <h1 className="head p-4">
              {" "}
              HAVE A TASTE OF MY <span className="extra">CREATIVE JUICE</span>
            </h1>
          </Reveal>
        </div>
      </div> */}

      <Reveal>
        <div className="row">

            <div className="col-md-12 col-sm-12 text2">

                <p className="text card card-body m-3">
              
                  <span className="text-center text-lg" > <b><span style={{ fontSize: "2em" }}>I'm Martins Samuel,</span>  A PHP DEVELOPER.</b></span>  <p> I am passionate and dedicated to crafting dynamic and robust web solutions. With a keen eye for detail and a commitment to excellence, I thrive in the ever-evolving realm of web development. My journey in PHP development has been a continuous exploration of the language's capabilities, from building scalable backend systems to creating intuitive user interfaces. I believe in the power of code to not only solve problems but also to inspire and innovate. Whether it's implementing complex algorithms or architecting seamless user experiences, I approach each project with a blend of precision and creativity, striving to exceed expectations and deliver results that truly make a difference.</p>
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
                <span style={{ fontSize: 17 }}>Services</span>
              </div>
            
          </div>
        </div>
      </Reveal>
    </div>
    <div className="container-fluid">
      <Reveal>
        <div className="row">
          
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
          
        </div>
      </Reveal>

      <Reveal>
        <div className="row mt-3">
          
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
                      And then I proceed to gathering necessary requirements for your web app and design the website layout that
                      complements the brand name, logo and color.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </Reveal>

      <Reveal>
        <div className="row mt-3">
          
            <div className="col-md-12 box3 ">
              <div className="card" style={{ width: "30rem" }}>
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img
                    src={soft}
                    className="card-img-top img-fluid"
                    alt="pic for software dev"
                  />
                  <div className="card-body">
                    <p className="card-text text-info">
                      Website applications that involves both the back-end and
                      front-end of the development will all be taken care by me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </Reveal>

      <Reveal>
      <div className="container mt-4 p-3 bg-secondary">
      <div className="row m-5">
          <div className="col-md offer">
            
              <div
                className="badge juice text-wrap"
                style={{ width: "6rem", textAlign: "center" }}
              >
                <i className="fa-solid fa-hand" />
                <span style={{ fontSize: 17 }}>Skills</span>
              </div>
            
          </div>
        </div>
  <div className="section-title">
    
    <p className='text-light'> 
    "Skills honed with precision and creativity" signifies my dynamic blend of technical proficiency and imaginative problem-solving. Every skill listed has been meticulously crafted through a combination of deliberate practice, attention to detail, and a flair for innovation. Each line of code, design element, or strategic decision reflects not just proficiency, but a touch of creativity that sets them apart. This fusion of precision and creativity isn't just about achieving goals; it's about surpassing them, pushing boundaries, and leaving a distinct mark in the digital landscape. It's this unique approach that allows for solutions that are not only functional but also captivating, resonating with audiences and making a lasting impression.
    </p>
  </div>
  <div className='card card-body'>
  <div className="row skills-content">
    <div className="col-lg-6">
      <div className="">
        
        <Progress_bar
          bgcolor="orange"
          progress="100"
          height={30}
          word="HTML"
        />
        
      </div>
      <div className="">
        
        <Progress_bar
          bgcolor="orange"
          progress="100"
          height={30}
          word="CSS,btsp/tailwind"
        />
        
      </div>
      <div className="">
        
        <Progress_bar
          bgcolor="orange"
          progress="100"
          height={30}
          word="Javascript/Ajax"
        />
        
      </div>
    </div>
    <div className="col-lg-6">
      <div className="">
        
        <Progress_bar
          bgcolor="green"
          progress="100"
          height={30}
          word="PHP & OOP"
        />
        
      </div>
      <div className="">
        
        <Progress_bar
          bgcolor="green"
          progress="100"
          height={30}
          word="React.Js"
        />
        
      </div>
      <div className="">
        
        <Progress_bar
          bgcolor="green"
          progress="70"
          height={30}
          word="Vue/Node.js"
        />
        
      </div>
    </div>
  </div>
  </div>
</div>
      </Reveal>


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
                <span style={{ fontSize: 17 }}>Recent Projects</span>
              </div>
            
          </div>
        </div>
      </Reveal>
    </div>
    <div className="container"> 
      <div className="row ">
        <div className="col-md ">
          
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6 mb-3 mb-sm-0 ">
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <Reveal>
                    
                      <div className="card">
                        <div className="card-body">
                          <div className="ratio ratio-16x9">
                            <img src={zwork} alt="sites done" />
                          </div>

                          <div className="card flex-column p-2 mt-2">

                            <p className="text-dark"> <b>About Project:</b> This is a freelance marketplace whee freelancers can advertise their skills and get paid jobs by clients who want them to complete any particular job.</p>

                            <p className="text-dark">
                              <b> Technology used: </b> 
                              <span className='badge text-bg-secondary'>Object-Oriented Programming (OOP)</span> &nbsp;
                              <span className='badge text-bg-secondary'>PHP</span> &nbsp;
                              <span className='badge text-bg-secondary'>AJAX</span> &nbsp;
                              <span className='badge text-bg-secondary'> J-query </span> &nbsp;
                              <span className='badge text-bg-secondary'> Javascript </span> &nbsp;

                            </p>

                            <p className="text-dark">

                              <b>Features:</b> 
                              <ul>
                                <li>Job creation</li>
                                <li>In-built Chat feature</li>
                                <li>Payment Integration (Paystack Api)</li>
                              </ul>


                            </p>

                          </div>

                          <div className="d-flex p-2 mt-2 gap-2 mx-2">

                            <a href="https://github.com/Mart007King/zwork.git" target="_blank" className="btn btn-sm btn-secondary">
                              
                              <img src={git} width="10%" /> &nbsp;
                              View on GitHub
                            </a>

                            <a href="https://www.linkedin.com/posts/martins-samuel-a07495187_freelancemarketplace-empoweringfreelancers-activity-7162480089442500608-luXz?utm_source=share&utm_medium=member_desktop" target="_blank" className="btn btn-sm btn-primary">
                              <img src={linked} width="10%" /> &nbsp;
                              View on LinkedIn
                            </a>

                          </div>
                          
                          
                        </div>
                      </div>
                    
                  </Reveal>
                </div>
              </div>
              
            </div>
      
        </div>
      </div>
    </div>
    
    <Reveal>
    <div className="container-fluid mb-5">
      <div className="row d-flex justify-content-center ">
        <div className="container" >
              <div className='card card-body'>
                <div className="section-title">
                  <h2>Contact</h2>
                  <p>
                  Get in touch with me using any of the methods below. I'm always open to new opportunities, collaborations, and discussions about all things PHP development. Feel free to drop me a message, and I'll get back to you as soon as possible. Let's connect and bring your ideas to life!
                  </p>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <div className="info flex-column justify-content-center">
                      <div className="address m-2">

                        <i className="fas fa-location-dot" />
                        
                        <p>Ikeja, Lagos Nigeria</p>
                      </div>
                      <div className="email m-2">
                        <i className="fas fa-envelope-circle-check" />
                        
                        <p className='mailing'> <a  href='mailto:martinssam17@gmail.com'> martinssam17@gmail.com </a> </p>
                      </div>
                      <div className="phone m-2">
                        <i className="fas fa-phone" />
                        
                        <p className='phony'> <a href="tel:+2347057194041"> +234 705 7194 041 </a> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

      </div>
    </div>
    </Reveal>

    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md my-5 d-flex justify-content-center">

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resume
              </button>
              <ul className="dropdown-menu text-body-info drop">
                <a href={cv} target="_blank">
                  Download Cv
                </a>
                
              </ul>
            </div>
      
        </div>
        <div className="row">
          <div className="col-md my-5">
            <Reveal>
              <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">

                  <h5 className="card-title mb-3">FIND ME EVERYWHERE</h5>
                    <div >

                      <a href="https://github.com/Mart007King" target="_blank" className="p-3">
                        <img src={git} width="3%"  />
                      </a>
                      <a href="https://www.linkedin.com/in/martins-samuel-a07495187/" target="_blank" className="p-3">
                        <img src={linked} width="3%"  />
                      </a>
                      <a href="https://twitter.com/King_mhartins" target="_blank" className="p-3">
                        <img src={x} width="3%" />
                      </a>
                      <a href="https://www.facebook.com/martins.samuel.52" target="_blank" className="p-3">
                        <img src={fb} width="3%" />
                      </a>
                      <a href="https://www.instagram.com/ma_rtins_/?hl=en" target="_blank" className="p-3">
                        <img src={ig} width="3%" />
                      </a>
                      
                    </div>
                    <img src={last} className="img-fluid" /> 
                  
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
