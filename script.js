
const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


const selector = document.getElementById("tipo");
const formEst = document.getElementById("form-estudiante");
const formPyme = document.getElementById("form-pyme");

selector.addEventListener("change", function () {
    if (this.value === "estudiante") {
        formEst.classList.remove("hidden");
        formPyme.classList.add("hidden");
    } else {
        formEst.classList.add("hidden");
        formPyme.classList.remove("hidden");
    }
});