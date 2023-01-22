const api = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";


$(document).ready(function(){
  $('.slider').slick({
    dots:true,
    infinite:true,
    speed:300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
  
  function onapisuccess(product) {

    

    var ClothingSection = document.querySelector(".ClothingCard");
    var AccessoriesSection = document.querySelector(".AccessoriesCard");
    for(var id =0;id<product.length;id++){
      var productDetails = product[id]
  
    var img = document.createElement('img')
    img.src = productDetails.preview;
    img.classList.add("cardimg")
    
  
    var h1 = document.createElement('h1')
    h1.innerText = productDetails.name;
    h1.classList.add("text")
   
  
    var h4 = document.createElement('h4')
    h4.innerText = productDetails.brand;
    h4.classList.add("stext")
   
  
    var h5 = document.createElement('h5')
    h5.innerText = "Rs " + productDetails.price;
    h5.classList.add("number")
    
  
    var card = document.createElement("div")
   card.classList.add("card");
   card.id= productDetails.id;
   card.append(img, h1, h4, h5); 
  
  if(productDetails.isAccessory === false){
  
      ClothingSection.append(card)
    }
   else{
    AccessoriesSection.append(card)
   }
  }
   
  

  
  $(".card").on("click",function(e){
    //console.log(e.currentTarget)
    const id = e.currentTarget.id;
    //console.log( id)
    
      
   location.href = "\product.html?productId=" +id;
    console.log("clicked")
  });
   
  $(".rightmenu I").on("click",function(e)
{
  location.href = "\checkout.html?";
})
}

  function onapicallerror(error) {
    console.log("error");
  }
  $.ajax({
    method: "GET",
    url: api,
    success: onapisuccess,
    error: onapicallerror,
  });

 
})
