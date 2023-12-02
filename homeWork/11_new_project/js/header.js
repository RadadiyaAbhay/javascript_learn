document.querySelector('header').innerHTML = `
<div class="container">
            <div class="row align-items-center">
                <div class="toggle d-lg-none col-1">
                    <a href="#" class="text-decoration-none text-white fs-4">
                        <i class="bi bi-justify-left"></i>
                    </a>
                </div>
                <div class="logo col-6 col-lg-2 text-white justify-content-center d-flex py-3">
                        <img src="images/logo white.png" alt="" class="w-75">
                </div>
                <nav class="col-lg-8 d-none d-lg-block">
                    <ul class="d-flex list-unstyled m-0">
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Home
                            </a>
                        </li>
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Floor Tiles
                            </a>
                        </li>
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Wall Tiles
                            </a>
                        </li>
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Bathroom Tiles
                            </a>
                        </li>
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Kitchen Tiles
                            </a>
                        </li>
                        <li class="ps-2 pe-3">
                            <a href="#" class="text-decoration-none text-white">
                                Room Tiles
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="icon col-5 col-lg-2 fs-4 justify-content-end d-flex">
                    <ul class="d-flex list-unstyled m-0">
                        <li class="px-2">
                            <a href="#" class="text-decoration-none text-white">
                                <i class="bi bi-heart"></i>
                            </a>
                        </li>
                        <li class="px-2">
                            <a href="#" class="text-decoration-none text-white">
                                <i class="bi bi-cart3"></i>
                            </a>
                        </li>
                        <li class="px-2">
                            <a href="#" class="text-decoration-none text-white" onclick="return login()">
                                <i class="bi bi-person"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
`