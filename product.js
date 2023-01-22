$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const pId = params.get("productId");
    const ap1 = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + pId;
  
  
    
    function onapisuccess(productData) {
      var container = document.getElementById("container");
  
      var img = document.createElement("img");
      img.src = productData.preview;
      img.classList.add("bigimg");
  
      var span = document.createElement("span");
      span.innerText = productData.name;
      span.classList.add("sname");
  
      var brand = document.createElement("h2");
      brand.innerText = productData.brand;
      brand.classList.add("sbrand");
  
      var price = document.createElement("h3");
      price.innerText = "Price: Rs ";
      price.classList.add("sbrand");
  
      var number = document.createElement("h3");
      number.innerText = productData.price;
      number.classList.add("sprice");
  
      var prinum = document.createElement("div");
      prinum.classList.add("prinum");
      prinum.append(price, number);
  
      var desc = document.createElement("h3");
      desc.innerText = "Description";
      desc.classList.add("sbrand");
  
      var description = document.createElement("h5");
      description.innerText = productData.description;
      description.classList.add("sdescription");
  
      var product = document.createElement("h3");
      product.innerText = "Product Preview";
      product.classList.add("sbrand");
  
      var leftimg = document.createElement("img");
      leftimg.classList.add("bigimg");
  
      var btn = document.createElement("button");
      btn.innerText = "Add to Cart";
  
      btn.classList.add("btnn");
  
      function onImgClick(e) {
        var src = e.target.src;
        img.src = src;
  
        var imgtag = document.getElementsByClassName("active");
        imgtag[0].classList.remove("active");
        e.target.classList.add("active");
      }
  
      var imgdiv = document.createElement("div");
      imgdiv.classList.add("imgdiv");
  
      for (var i = 0; i < productData.photos.length; i++) {
        var smallimg = productData.photos[i];
  
        var img1 = document.createElement("img");
        img1.src = smallimg;
        img1.classList.add("previewimg");
  
        if (i === 0) {
          img1.classList.add("active");
        }
        img1.addEventListener("click", onImgClick);
        imgdiv.append(img1);
      }
  
      var leftcontainer = document.createElement("div");
      leftcontainer.classList.add("leftcontainer");
      leftcontainer.append(img, leftimg);
  
      var rightcontainer = document.createElement("div");
      rightcontainer.classList.add("rightcontainer");
      rightcontainer.append(
        span,
        brand,
        prinum,
        desc,
        description,
        product,
        imgdiv,
        imgdiv,
        btn
      );
  
  
  
      
      btn.addEventListener("click", function () {
  
      var cartcount = $("#cartcount").text()
     
      cartcount = parseInt(cartcount)
      cartcount++
      $('#cartcount').text(cartcount)
     
  //localStorage.setItem("cartcount",JSON.stringify(productList))
  //
     
      if(localStorage.getItem("Product List")){
        var productList = JSON.parse(localStorage.getItem("Product List"))
        var state = false
        for(var i=0; i<productList.length; i++){
            if(productList[i].id === pId){
                productList[i].count++
                localStorage.setItem("Product List",JSON.stringify(productList))
                state = true
        }
       }
  
  
       if(!state){
        var obj = productData
        obj.count = 0
        obj.count++
        productList.push(obj)
        localStorage.setItem("Product List" , JSON.stringify(productList))
       }
      }
    else{
      var productList=[]
      var obj = productData
      obj.count=0
      obj.count++
      productList.push(obj)
      localStorage.setItem("Product List" , JSON.stringify(productList))
    }
  
   
  
      });
      
      $(".rightmenu I").on("click",function(e)
      {
  
        const cartid = e.currentTarget.id;
        location.href = "\checkout.html?productData=" +cartid;
      })
  
  
      
      container.append(leftcontainer, rightcontainer);
    }
  
    function onapicallerror(error) {
      console.log("error");
    }
    $.ajax({
      method: "GET",
      url: ap1,
      success: onapisuccess,
      error: onapicallerror,
    });
  });