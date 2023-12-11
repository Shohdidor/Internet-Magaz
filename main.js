const email = document.querySelector(".email")
const pasword = document.querySelector(".pasword")
const Follow = document.querySelector(".Follow")
const follow = document.querySelector(".follow")

const a = document.createElement("a")
a.style.cursor="pointer"
a.style.color="black" 
a.style.fontFamily = "sans-serif" 
a.style.fontWeight= "700"
a.style.background = "white"
a.style.padding = "1.7%"
a.style.paddingInline = "15%"
a.style.borderRadius = "5px"
a.style.marginLeft="4.5%"


a.innerHTML = "Follow"


follow.appendChild(a)

a.onclick=()=>{
    if (email.value == "peter@gmail.com" && pasword.value == "10011108"){
        a.href = "http://127.0.0.1:5500/index2.html"
       }
       else alert("Please enter")
}
