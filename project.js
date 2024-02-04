
document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('#navlist').style.display="block";
    document.querySelector('#menu').style.display="none";
})
document.querySelector('#close').addEventListener('click',()=>{
    document.querySelector('#navlist').style.display="none";
    document.querySelector('#menu').style.display="block";
})

// let navlist=document.getElementById('navlist');

// function showMenu(){
//     navlist.style.display = "block";
// }

