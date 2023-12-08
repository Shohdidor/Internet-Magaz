let iconCart = document . querySelector (".icon-cart");
let closeCart = document . querySelector (".close");
let body = document . querySelector ("body");
let listProductHTML = document . querySelector (".listProduct")
let listCartHTML = document . querySelector (".listCart")
let iconCartSpan = document . querySelector (".icon-cart span");
let box = document . querySelector ( ".listProduct" )
let btnAdd = document . querySelector (".btnAdd")
let summa = document . querySelector (".summa")
let Settings = document . querySelector ( ".Settings" )
let Light = document . querySelector ( ".Light" )
let Dark = document . querySelector ( ".Dark" )
let dialogSettings = document . querySelector ( ".dialogSettings" )
let bodyGl = document . querySelector ( ".bodyGl" )
let chekOut = document . querySelector ( ".chekOut" )
chekOut.onclick = () => {
    summa.innerHTML = 0
}

let check = 0
let check2 = 0

Dark.onclick = () => {
    check2 ++ 
    if ( check2 % 2 == 1){
        bodyGl.style.background = "#1f2838"
        bodyGl.style.transition = "0.2s"
    }
}
Light.onclick = () => {
    check2 ++ 
    if ( check2 % 2 == 0){
        bodyGl.style.background = "white"
    }
}


Settings.onclick = () => {
    check ++
    if ( check % 2 == 1 ){
        dialogSettings.classList.add("Animation")
        dialogSettings.style.marginLeft = "0%"
    }
    else { 
        dialogSettings.style.marginLeft = "-30%"   
    }
}


let cnt = 0

btnAdd.onclick = () =>{
    cnt ++ 
    if ( cnt > 10 ){
        alert ( "you can't buy more than 10 pieces" )
        cnt = 10
    }
    summa.innerHTML = cnt
}

let listProduct = []

iconCart.onclick = () =>{
    body.classList.toggle ("showCart")
}


closeCart.onclick = () =>{
    body.classList.toggle ("showCart")
}

let api = "http://localhost:3000/data"


async function getData () {
    try {
        let { data } = await axios.get ( api )
        get ( data )
    } catch (error) {
        console.log(error);
    }
}
getData ()



function get ( data ) {
    data.forEach (( elem ) => {

        let div = document . createElement ( "div" )
        let IMG = document.createElement ( "img" )
        IMG.src = elem.image
        IMG.style.width="100%"
        let Name = document.createElement ( "h2" )
        Name.innerHTML = elem.name
        let Price = document.createElement ( "h2" )
        Price.innerHTML = elem.price
        Price.style.letterSpacing="7px"
        Price.style.fontSize = "small"
    

        let btnAdd = document . createElement ( "button" )
        btnAdd.innerHTML = "Add to Cart"
        btnAdd.onclick = () => {
            addUser (elem)
            cnt ++ 
            if ( cnt > 10 ){
                alert ( "you can't buy more than 10 pieces" )
                cnt = 10
            }
            summa.innerHTML = cnt    
        }

        div.style.width="76%"
        div.style.background="rgba(0, 0, 0, 0.501)"
        div.style.color="white"
        div.style.padding= "20px"
        div.style.borderRadius="20px"
        div.style.overflow="hidden"
        div.append ( IMG , Name , Price , btnAdd)
        box . appendChild ( div )
    })
}

async function addUser (elem) {
    let div = document . createElement ("div")
    let div2 = document . createElement ("div")

    let cnt = 0 

    let IMG = document.createElement ("img")
    IMG.src = elem.image
    IMG.style.width="30%"
    let Name = document.createElement ("h2")
    Name.innerHTML = elem.name
    Name.style.fontFamily = "sans-serif"
    Name.style.fontWeight = "100"
    let Price = document.createElement ("h2")
    Price.innerHTML = elem.price
    Price.style.fontFamily = "sans-serif"
    Price.style.fontWeight = "100"
    div2.append ( Name , Price )

    let btnminus = document . createElement ( "button" )
    btnminus . innerHTML = "-"
    let sum = document . createElement ( "h2" )
    sum.innerHTML = 0
    let btnplus = document . createElement ( "button" )
    btnplus . innerHTML = "+"

    btnminus . style . background = 'white'
    btnminus . style . color = 'black'
    btnminus . style . fontWeight = "900"
    btnminus . style . fontFamily = "san-serif"
    btnminus . style . fontSize = "120%"
    btnminus . style . marginTop = "0%"

    btnminus.onclick = () => {
        cnt --
        if ( cnt < 0 ){
            cnt = 0
        }
        sum.innerHTML = cnt
    }
    
    btnplus . style . background = 'white'
    btnplus . style . color = 'black'
    btnplus . style . fontWeight = "900"
    btnplus . style . fontFamily = "san-serif"
    btnplus . style . fontSize = "120%"
    btnplus . style . marginTop = "0%"
    
    btnplus.onclick = () => {
        cnt ++
        if ( cnt < 0 ){
            cnt = 0
        }
        sum.innerHTML = cnt
    }
    let btnDel = document . createElement ( "button" )
    btnDel.innerHTML = "◄"
    btnDel.style.border="1px solid white"
    btnDel.onclick = () => {
        div.style.display="none"
    }



    div.style.display="flex"
    div.style.justifyContent="space-evenly"
    div.style.alignItems = "center"
    div.style.marginTop="5%"
    div . append ( IMG , div2 , btnminus , sum , btnplus , btnDel)
    listCartHTML.appendChild ( div )
}


