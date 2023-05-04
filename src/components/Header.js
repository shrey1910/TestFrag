import React from 'react'

function Header() {
  return (
    <div>

  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <title>Presento Bootstrap Template - Index</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />

  <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

  <link href="assets/css/style.css" rel="stylesheet"/>
  
    {/* <!-- ======= Header ======= --> */}
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="index.html">Fresh Fragrance Limited<span>.</span></a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}
    
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li className="dropdown"><a href="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="/">Drop Down 1</a></li>
                <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="/">Deep Drop Down 1</a></li>
                    <li><a href="/">Deep Drop Down 2</a></li>
                    <li><a href="/">Deep Drop Down 3</a></li>
                    <li><a href="/">Deep Drop Down 4</a></li>
                    <li><a href="/">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="/">Drop Down 2</a></li>
                <li><a href="/">Drop Down 3</a></li>
                <li><a href="/">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* <!-- .navbar --> */}
    
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
      </div>
    </header>{/* <!-- End Header --> */}
    
    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex align-items-center">
    
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <div className="row">
          <div className="col-xl-6">
            <h1>Bettter digital experience with Presento</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </div>
    
    </section>{/* <!-- End Hero --> */}
    
  
    </div>
  )
}

export default Header
