function crearConfeti(){
    const e = document.createElement("div");
    e.innerHTML = ["🎉","✨","⭐","💜"][Math.floor(Math.random()*4)];
    e.style.position = "fixed";
    e.style.left = Math.random()*100 + "vw";
    e.style.top = "-20px";
    e.style.fontSize = "20px";
    e.style.animation = "caer 3s linear";
    document.body.appendChild(e);

    setTimeout(()=>e.remove(),3000);
}

setInterval(crearConfeti,150);

/* animación caída */
const style = document.createElement("style");
style.innerHTML = `
@keyframes caer{
    to{
        transform: translateY(110vh) rotate(360deg);
        opacity:0;
    }
}`;
document.head.appendChild(style);