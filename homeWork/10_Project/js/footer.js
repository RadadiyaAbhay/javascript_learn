var footer = document.getElementById('footer');

footer.innerHTML = `
<div class="container ">
	    <div class="row">
	      <div class="col-lg-4 col-12 pb-md-5 d-flex justify-content-center align-items-center"><img src="images/58.png" alt="58" class="foot-logo"/></div>
	      <div class="col-lg-4 col-12 foot-tog">
		    <ul class="list-unstyled text-center foot-mid" style="letter-spacing:1.8px;">
					 <li class="py-1 px-3 pt-5">
					   <a class="text-white  text-decoration-none fw-semibold fs-6 text-uppercase" onclick="return ourMenus()">Our Menus</a>
					 </li>
					 <li class="py-2 px-3">
					   <a  class="text-white  text-decoration-none fw-semibold fs-6 text-uppercase" onclick="return reservation()"> Reservation</a>
					 </li>
					 <li class="py-2 px-3">
					   <a  class="text-white  text-decoration-none fw-semibold fs-6 text-uppercase" onclick="return about()">  About</a>
					 </li>
					  <li class="py-1 px-3 pb-5">
					   <a  class="text-white text-decoration-none fw-semibold fs-6 text-uppercase" onclick="return contact()"> Contact us</a>
					 </li>		  
			</ul>
		  </div>
	      <div class="col-lg-4 pt-5 ps-5 col-12 text-center text-lg-start">
		      <i class="bi bi-facebook px-2 text-primary fs-3 "></i>
              <i class="bi bi-instagram px-3 text-primary fs-3 "></i>
              <i class="bi bi-sunglasses px-2 text-primary fs-3 "></i>
			  
			  <p class="text-white d-block pt-4 prim mb-1">
			   	<span class="d-block pb-2">
				© Copyright ThemeGoods
				</span>
				<span class="d-block ">
				All Right Reserved.
				</span>
			  </p>
			  <span class="d-block pri mb-1">
			     <a href="#" class="text-white text-decoration-none">
			     Privacy Policy
				 </a>
			  </span>
			  <span class="d-block pri" >
			     <a href="#" class="text-white text-decoration-none">
			       Terms of use
				 </a>
			  </span>
		  </div>
		</div>
	</div>
`