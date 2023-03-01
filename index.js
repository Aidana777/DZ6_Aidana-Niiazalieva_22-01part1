

document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products')
    async function fetchProducts(url) {
        let data = await fetch(url)
        let response = await data.json()
        for (let i = 0; i < response.length; i++) {
         products.innerHTML +=`
         <div class="product">
                    <img src="${response[i].image}" alt="${response[i].image}">
         
                    <div class="price">
                         <p class="current__price"> ${response[i].price}₽  </p>
                          <p class="old__price">${response[i].old}₽</p>
                         </div>
                   <div class="texts">
                        <p class="title">${response[i].title}<span  class="desribtion">${response[i].desribtion}</span></p>   
         
                        </div>
                </div>

         `
            
        }
    }
 
   fetchProducts('db.json')
        
                
    
})