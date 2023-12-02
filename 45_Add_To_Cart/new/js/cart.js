let cartPro = document.getElementById('cartPro');
let count = document.getElementById('count');
let price = document.getElementById('price');

var showCart = () =>{
    let cart = JSON.parse(localStorage.getItem('Cart'));
    var total = 0 ;
    if(cart != null){
        count.innerHTML = cart.length;
    


    
    cart.forEach(product => {
        total += product.price;
        cartPro.innerHTML += `
        <div class="col-12 py-2">
        <div class="border border-5  rounded-2 d-flex" style="height: 175px;">
            <div class="d-flex justify-content-center col-2 align-items-center border " style="overflow: hidden;">
                <img src="${product.thumbnail}" class="w-100" alt="">
            </div>
            <div class="p-4 d-flex flex-column col-10 d-flex"  >
            <div>
                <h5>${product.title}</h5>
                <p>${product.description}</p>
            </div>
                <div class="mt-auto">
                <button type="button" class="btn btn-primary" onclick="removeToCart(${product.id})">Remove</button>
                <span class="fw-bold p-2 ">Rs. ${product.price}</span>    
                </div>
            </div>
        </div>
    </div>
        `
    });
    price.innerHTML = total;
}
}

showCart();



var removeToCart = (id) => {

    cartPro.innerHTML = ``;
    var cartProduct = JSON.parse(localStorage.getItem('Cart'));
    let myCart = [];

    
    cartProduct.filter((product) =>{
        if(product.id != id){
            myCart.push(product);
        }
    })
    count.innerHTML = myCart.length ;

    localStorage.setItem('Cart',JSON.stringify(myCart));

    showCart();
}

var removeAll = () =>{
    localStorage.removeItem('Cart');

    price.innerHTML = 0;
    cartPro.innerHTML = ``;
    count.innerHTML = 0;



}