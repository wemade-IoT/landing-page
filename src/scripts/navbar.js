document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", () => {
        const header = document.querySelector("header");


        if (window.scrollY === 0) {
            header.classList.add("transparent");

             // Agrega transparencia cuando el scroll está en 0
        } else {
            header.classList.remove("transparent"); // Elimina transparencia al hacer scroll

        }
    });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("overlay").style.width = "100%"; 
        overlay.style.opacity = "0.8";
        document.getElementById("overlay").style.minHeight = "100%"; 
        overlay.style.opacity = "0.8"

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.opacity = "0";     
setTimeout(() => {
        overlay.style.width = "0%";
    }, 500);
}
