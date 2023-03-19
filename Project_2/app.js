let productInput = document.querySelector('.productInput');
let addButton = document.querySelector('.addButton');


let priceInput = document.querySelector('.priceInput');
let quantityInput = document.querySelector('.quantityInput');


let cart = [];

//change locaStorage.cart from string to array
if(localStorage.cart){
    cart = JSON.parse(localStorage.cart)
};


addButton.addEventListener('click',()=>{
    for(let i in cart){
        if(productInput.value === cart[i].Product && productInput.value === cart[i].Quantity){
            cart[i].Quantity = parseInt(cart[i].Quantity)+ parseInt(quantityInput.value);
            localStorage.cart = JSON.stringify(cart);
            console.log(localStorage);
            location.reload();
            return;
        }
    }
    let item = {
            Product: productInput.value,
            Price: priceInput.value,
            Quantity: quantityInput.value    
    };

    cart.push(item);

    //change locaStorage.cart from array to string
    localStorage.cart = JSON.stringify(cart);
    console.log(localStorage);
    location.reload();
})

function displayCart(){
    let productList = document.querySelector('.productList');
    for(let i in cart){
        let item = cart[i];
        let listItem = document.createElement('li');
        listItem.innerHTML = "Product name : " + item.Product +" Price: " +item.Price+ " Quantity: " + item.Quantity;
        productList.appendChild(listItem);
    }
}
displayCart();
