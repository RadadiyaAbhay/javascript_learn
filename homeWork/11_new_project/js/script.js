var login = () => {
    document.querySelector('main').innerHTML = `
        <section>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center align-items-center" style="height: 90vh;" >
                    <div class="border rounded-3 py-4 px-5 " style="box-shadow: 10px 10px 60px #000000 ;">
                        <h4 class="text-center">Login</h4>
                        <form>
                            <div class="mb-3">
                              <label class="form-label m-0">Username :</label>
                              <input type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                              <label class="form-label m-0">Password :</label>
                              <input type="password" class="form-control">
                              <a href="#" class="text-decoration-none">Forget Password</a>
                            </div>
                            <button type="submit" class="btn btn-dark">Login</button>
                            <button type="submit" class="btn btn-dark" onclick="return signUp()">Sign up</button>
                          </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        `
}

var signUp = () => {
    document.querySelector('main').innerHTML = `
        <section>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center align-items-center" style="height: 90vh;" >
                    <div class="border rounded-3 py-4 px-5 " style="box-shadow: 10px 10px 60px #000000 ;">
                        <h4 class="text-center">Login</h4>

                        <form class="row g-3">
                        <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">Email</label>
                          <input type="email" class="form-control" id="inputEmail4">
                        </div>
                        <div class="col-md-6">
                          <label for="inputPassword4" class="form-label">Password</label>
                          <input type="password" class="form-control" id="inputPassword4">
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>
                        <div class="col-12">
                          <label for="inputAddress2" class="form-label">Address 2</label>
                          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="col-md-6">
                          <label for="inputCity" class="form-label">City</label>
                          <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="col-md-4">
                          <label for="inputState" class="form-label">State</label>
                          <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-md-2">
                          <label for="inputZip" class="form-label">Zip</label>
                          <input type="text" class="form-control" id="inputZip">
                        </div>
                      
                        <div class="col-12">
                        <button type="submit" class="btn btn-dark">Sign up</button>
                      <button type="submit" class="btn btn-dark" onclick="return login()">Login</button>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        `
}


