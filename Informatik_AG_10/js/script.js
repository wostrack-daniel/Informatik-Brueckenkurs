const select = document.getElementById("auswahl");
const boxA = document.getElementById("boxA");
const boxB = document.getElementById("boxB");

select.addEventListener("change", () => {
  boxA.style.display = select.value === "a" ? "block" : "none";
  boxB.style.display = select.value === "b" ? "block" : "none";
});

function toggleMenu() { 
    const m = document.getElementById("menu"); 
    m.style.display = m.style.display === "block" ? "none" : "block"; 
}