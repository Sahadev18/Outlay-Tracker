let bar=document.getElementById("bar")

bar.addEventListener('click', function ale(){
    const profile=document.getElementById("profile")
    const head=document.getElementById("head")
    const nav=document.getElementById("nav")
    const main=document.getElementById("main")
    if(profile.style.display==="none"){
        profile.style.display="block"
        nav.style.display="block"
        head.style.gridColumn="2/7"
        main.style.gridColumn="2/7"
    }
    else{
        profile.style.display="none"
        nav.style.display="none"
        head.style.gridColumn="1/7"
        main.style.gridColumn="1/7"
    }
})