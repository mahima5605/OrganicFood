document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',()=>{
        document.querySelector('.navbar-collapse')
        .classList.remove('show');
    });
});

document.getElementById("searchForm")
.addEventListener("submit",function(e){
    e.preventDefault();
    let value=document
    .getElementById("searchInput")
    .value.toLowerCase().trim();
    if(value===""){
        return;
    }
    const sections={
        home:"#home",
        trending:"#trending",
        organic:"#organic",
        store:"#store",
        contact:"#contact",
        tips:"#tips"
    };
    if(sections[value]){
        location.href=sections[value];
    }
    else{
        alert("Section not found");
    }
});

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});