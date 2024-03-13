import logo from './bio_images/logo.png';
import me from './bio_images/me.jpg';
import brand from './bio_images/php.png';
import frame from './bio_images/frame.png';
import soft from './bio_images/sql.png';
import code from './bio_images/lib.png';
import gith from './bio_images/git.png';
import sec from './bio_images/sec.jpg';
import brain from './bio_images/brain.jpg';
import cv from './sites/Resume.pdf';
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
                <span style={{ fontSize: 17 }}> <b> Proficiency </b> </span>
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
                    <h4> <u className='text-info'> PHP Proficiency </u> </h4>
                    <p className="card-text text-dark">
                      As a PHP developer, I possess comprehensive expertise in the PHP programming language, allowing me to craft robust and scalable web applications efficiently. With a deep understanding of PHP syntax, features, and best practices, I am adept at leveraging its power to deliver high-quality solutions tailored to client needs.
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
                    src={frame}
                    className="card-img-top img-fluid"
                    alt="pic for web dev"
                  />
                  <div className="card-body">
                    <h4> <u className='text-info'> Frameworks Mastery </u> </h4>
                    <p className="card-text text-dark">
                      I excel in utilizing advanced PHP frameworks such as Laravel and codeIgniter to streamline development processes and enhance application performance. By harnessing the capabilities of these frameworks, I can expedite project delivery while ensuring code maintainability, extensibility, and adherence to industry standards.
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
                    <h4> <u className='text-info'> Database Expertise </u> </h4>
                    <p className="card-text text-dark">
                      With expertise in database management systems like MySQL and MongoDB, I proficiently design, implement, and optimize database schemas to support complex data requirements. My skills in SQL query optimization and database administration enable me to ensure data integrity, scalability, and performance in PHP-driven applications.
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
                    <h4> <u className='text-info'> Frontend Integration </u> </h4>
                    <p className="card-text text-dark">
                      I specialize in seamlessly integrating frontend technologies such as HTML, CSS, AJAX and JavaScript with PHP backend systems to deliver dynamic and responsive web experiences. By leveraging frontend frameworks and libraries, I create intuitive user interfaces that enhance user engagement and satisfaction while maintaining code modularity and reusability.
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
                    src={gith}
                    className="card-img-top img-fluid"
                    alt="pic for software dev"
                  />
                  <div className="card-body">
                    <h4> <u className='text-info'> Version Control Skills </u> </h4>
                    <p className="card-text text-dark">
                      My proficiency in version control systems, particularly Git, enables me to manage code repositories efficiently, facilitate collaboration among team members, and track changes across projects seamlessly. With expertise in branching, merging, and resolving conflicts, I ensure codebase integrity and project continuity throughout the development lifecycle.
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
                    src={sec}
                    className="card-img-top img-fluid"
                    alt="pic for web dev"
                  />
                  <div className="card-body">
                    <h4> <u className='text-info'> Security Practices </u> </h4>
                    <p className="card-text text-dark">
                      I prioritize security in PHP development by implementing robust coding practices and adopting industry-standard security measures to safeguard applications against potential threats and vulnerabilities. From data validation and input sanitization to encryption and access control, I employ a proactive approach to mitigate security risks and uphold user trust.
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
                    src={brain}
                    className="card-img-top img-fluid"
                    alt="pic for software dev"
                  />
                  <div className="card-body">
                    <h4> <u className='text-info'> Continuous Learning </u> </h4>
                    <p className="card-text text-dark">
                      Committed to continuous learning and professional growth, I stay abreast of emerging technologies, industry trends, and best practices in PHP development. By actively participating in online communities, attending workshops, and exploring new tools and frameworks, I continually enhance my skills and expertise to deliver innovative and future-proof solutions for clients.
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
  <div className="row skills-content ">
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

                            <p className="text-dark"> <b>About Project:</b> This is a freelance marketplace where users(freelancers) can advertise their skills and get paid jobs by clients who want them to complete any particular job.</p>

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
            <div className="row d-flex justify-content-center m-2">
          
                <div className='col-md-12 col-sm-12'>

                  <div className="card section-title ">

                    <div className='card-body col-sm-12'>
                    <h2>Contact</h2>
                    <p>
                    Get in touch with me using any of the methods below. I'm always open to new opportunities, collaborations, and discussions about all things PHP development. Feel free to drop me a message, and I'll get back to you as soon as possible. Let's connect and bring your ideas to life!
                    </p>

                    <div className=" d-md-flex justify-content-center">
                      <div className="address m-2">

                        <button
                          className="btn btn-sm btn-secondary"
                          type="button"
                        >
                          <span className="badge rounded text-bg-warning">
                            <i className="fas fa-location-dot" />
                          </span>
                          &nbsp;
                          Ikeja, Lagos Nigeria{' '}
                          
                        </button>

                      </div>

                      <div className="email m-2 ">
                        <button
                          className="btn btn-sm btn-secondary"
                          type="button"
                        >
                          <span className="badge rounded text-bg-primary">
                          <i className="fas fa-envelope-circle-check" />
                          </span>
                          &nbsp;
                          <span className=''> <a className='text-decoration-primary text-light'  href='mailto:martinssam17@gmail.com'> Reach me via email </a> </span>
                          
                        </button>
                        
                      </div>

                      <div className="phone m-2">

                        <button
                          className="btn btn-sm btn-secondary"
                          type="button"
                        >
                          <span className="badge rounded text-bg-success">
                            <i className="fas fa-phone" />
                          </span>
                          &nbsp;
                          <span className=''> <a className='text-decoration-primary text-light' href="tel:+2347057194041"> Reach me via tel. </a>  </span>
                          
                        </button>

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
