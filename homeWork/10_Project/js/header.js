var header = document.getElementById('header');

header.innerHTML =`
<div class="container position-relative">
        <div class="row align-items-center  pt-lg-3 pt-3 pt-sm-3 pt-md-3 pt-xl-4" >
            <div class="logo col-5 justify-content-center d-flex col-sm-5 col-md-4 col-lg-3 col-xl-2" >
                <img src="images/logo-white.png"  alt="logo">
            </div>
            <nav class="col d-none col-lg-7 d-lg-block">
                <ul class="d-flex justify-content-center m-0">
                    <li class="list-unstyled mega-drop ">
                      <a class="text-decoration-none  mx-3 fw-semibold homeColor" style="color:#CA9C5E;"   onclick="return home()">
                        Home
                        <i class="bi bi-chevron-down"></i>
                      </a>
                      <div class="mega-dropdown position-absolute d-flex flex-wrap rounded">
                        <div class="d-flex flex-wrap col-12 justify-content-around px-5 pt-5 pb-3">
                            <div class="menu-1 col-2 ">
                                <img src="images/1.jpg" class="rounded img-fluid" alt="h1"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/2.jpg"   class="rounded img-fluid" alt="h2"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/3.jpg"  class="rounded img-fluid" alt="h3" />
                            </div>
                            <div class="menu-1 col-2" >
                                <img src="images/4.jpg" class="rounded img-fluid" alt="h4"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/5.jpg"  class="rounded img-fluid" alt="h5"/>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-3">
                            <div class="menu-1 col-2">
                                <img src="images/6.jpg"  class="rounded img-fluid" alt="h6"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/7.jpg" class="rounded img-fluid" alt="h1"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/8.jpg"  class="rounded img-fluid" alt="h2"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/9.jpg" class="rounded img-fluid" alt="h3" />
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/10.jpg"  class="rounded img-fluid" alt="h4"/>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-5">
                            <div class="menu-1 col-2">
                                <img src="images/11.jpg"   class="rounded img-fluid" alt="h6"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/12.jpg"  class="rounded img-fluid" alt="h1"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/13.jpg"  class="rounded img-fluid" alt="h2"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/14.jpg"  class="rounded img-fluid" alt="h3" />
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/15.jpg"  class="rounded img-fluid" alt="h4"/>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-5">
                            <div class="menu-1 col-2">
                                <img src="images/16.jpg"  class="rounded img-fluid" alt="h6"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/17.jpg" class="rounded img-fluid" alt="h1"/>
                            </div>
                            <div class="menu-1 col-2">
                                <img src="images/18.jpg" class="rounded img-fluid" alt="h2"/>
                            </div>
                            <div class="menu-1 col-2">
                               
                            </div>
                            <div class="menu-1 col-2">
                               
                            </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-unstyled ">
                      <a class="text-decoration-none mx-3 fw-semibold abColor" style="color:white;"  onclick="return about()" >
                        About
                      </a>
                    </li>
                    <li class="list-unstyled ">
                      <a class="text-decoration-none mx-3 fw-semibold ourColor" style="color:white;"  onclick="return ourMenus()">
                        Our Menus
                      </a>
                    </li>
                    <li class="list-unstyled ">
                      <a class="text-decoration-none  mx-3 fw-semibold resColor" style="color:white;"  onclick="return reservation()">
                        Reservation
                      </a>
                    </li>
                    <li class="list-unstyled ">
                      <a class="text-decoration-none mx-3 fw-semibold conColor" style="color:white;"  onclick="return contact()">
                        Contact
                      </a>
                    </li>
                </ul>
            </nav>
            <div class="social-icon col-7 align-items-center justify-content-end d-flex col-sm-7 col-md-8 col-lg-2 col-xl-2">
              <a href="https://www.facebook.com/" target="blank"><i class="bi bi-facebook px-3 text-white f-s-18"></i></a>
              <a href="https://www.instagram.com/" target="blank"><i class="bi bi-instagram px-3 text-white f-s-18"></i></a>
              <a href="https://www.tripadvisor.com/" target="blank"><i class="bi bi-sunglasses px-3 text-white f-s-18"></i></a>
			  <div class="btn  d-lg-none" type="button " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
				     <a href="#" class=" fs-5 text-white ">
					   <i class="fa-solid fa-bars"></i>
					 </a>
				   </div>
              </div>
        </div>
      </div>
`
