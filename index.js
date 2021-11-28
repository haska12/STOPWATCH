var sac = document.getElementById("sec")
var mint = document.getElementById("min")
let start = document.getElementById("start")
let rest = document.getElementById("rest")
let stop = document.getElementById("stop")
var sut = false 

start.addEventListener("click" , function start(){
sut = true

  setInterval(function starttimtre(){
      if( sut === true ){
    sac.innerText++;
    if(sac.innerText>=60  ){
        sac.innerText = 00
        mint.innerText++;
    }
}
  },1000)



})
stop.addEventListener("click",function stoptimre(){
    sut = false
})
rest.addEventListener("click", function restf(){
    sac.innerText = 000
    mint.innerText = 000
    sut = false

    console.log(sac.innerText)
})