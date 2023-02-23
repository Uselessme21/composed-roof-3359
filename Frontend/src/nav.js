let shopingbag= document.querySelector('.bxs-shopping-bag-alt');
let searchin= document.getElementById('search')
let search= document.getElementById('searchi')
let login= document.getElementById('login');
let shirt = document.getElementById('shirts');
let suit= document.getElementById('suits');



login.addEventListener('click', ()=>{
self.location="./register.html"
})

search.addEventListener('click', ()=>{
   let value= searchin.value
   console.log(value)
})



shopingbag.addEventListener('click', ()=>{
    console.log("clicked")
})



shirt.addEventListener('click', ()=>{
    self.location="/shirts.html"
    })

    suit.addEventListener('click', ()=>{
        self.location="/suits.html"
        })