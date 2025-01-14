let slide = document.querySelectorAll(".slideCard")
let card = document.querySelectorAll(".Card")
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`$(index* 100)`
})

function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform= `translatex(-${count * 100}%)`
    })
}


setInterval(function(){
    count++;
    if(count == slide.length){
        count = 0
    }
myfun();



},2000)


// card datail


card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".container").style.display="none"

        let div = document.createElement("div")
        div.classList.add("cardDetail");
        div.innerHTML=`
         <img src=${cards.firstElementChild.src} alt="">
    <div class="cardText">
        <h2>Top Trending Wear</h2>
        <h2> Upto 30% off Harry...</h2>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing  rem tempore.</p>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing  rem tempore.</p>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing  rem tempore.</p>
        <p>
  Lorem ipsum dolor sit amet consectetur adipisicing  rem tempore.</p>

        <button>Buy Now</button>
        <button>Add To Cart</button>
        <a href="">Back</a>
    </div>

    
`

document.querySelector("body").appendChild(div)
    })
})

