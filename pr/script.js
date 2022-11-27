
let cartProducts = []

let shopProducts = (products) => {
    if(document.title == 'Document'){
        products.items.map((product)=>{
            document.write(`<div class="box">
                            <div class="top_block">
                                <p><a href="#">Настільні ігри</a></p>
                            </div>
                            <div class="midll_block">
                                <img src="./img/монополія.jpg">
                                <a href="https://f.ua/ua/shop/nastolnye-igry/15206-harakter-igry_strategicheskaya">
                                    <p>${product.name}</p>
                                </a>
                            </div>
                            <div class="bottom_block">
                                <span><span>${product.price}грн</span><p><sapan class="bold">${product.price}</sapan>грн</p></span>
                                <button class="product_to_cart">У КОРЗИНУ</button>
                            </div>
                        </div>`
                        )
                    }
                )

        let cart = document.getElementById("header-button")
        console.log(cart)

        cart.addEventListener("click", ()=>{
            if(cartProducts.length<=0){
                alert("cart is empty")    
            }
            else{

                window.location.href="./cart.html"
            }
        })

        let productButtons = document.getElementsByClassName("product_to_cart")

        for(let i = 0; i<productButtons.length; i++)
        {
            productButtons[i].addEventListener("click", ()=>{
                let amount = prompt("Enter amount of products:", 1)

                let product = {
                    "name":products[i].name, "price":products[i].price, "amount":amount,
                }
                console.log(product)
                cartProducts.push(product)
                window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
                alert("Product was added successfully")
                window.location.href="./cart.html"
            })
        }
    }
    else{
        let handleClick = () => {
            window.localStorage.removeItem('cartProducts')
        }


        let cart = JSON.parse(window.localStorage.getItem('cartProducts'))
        console.log("CARt")
        cart.forEach((product)=>{
            console.log("asdfasdf")
            document.write(`<br/><div>Name: ${product.name}</div>
            <br/>
            <div>Price: ${product.price}</div>
            <br/>
            <div>Amount of product: ${product.amount}</div>
            <br/>
            <div><button onclick="handleClick()">Delete</button></div>
            `
                )
            }
        ) 
    }
}


 let url = "https://makshutsynuk.github.io/items.json"


const request = () => {
    const Http = new XMLHttpRequest()
    Http.open("GET", url)
    Http.send()

    Http.onreadystatechange = (e) =>{
        console.log(Http.responseText)
        products = JSON.parse(Http.responseText)
        shopProducts(products)
    }
}

request()