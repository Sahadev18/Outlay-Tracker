let bar=document.getElementById("bar")

bar.addEventListener('click', function ale(){
    const profile=document.getElementById("profile")
    const head=document.getElementById("head")
    const nav=document.getElementById("nav")
    const main=document.getElementById("main")
    if(profile.style.display==="none"){
        profile.style.display="flex"
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

function login(){
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value
    if(pass=="admin"){
        const win1=window.open('file:///home/sahadev/Desktop/coding/webdev/proj2/html/index.html')
        win1.document.getElementById("name").innerHTML="Admin"
    }
}