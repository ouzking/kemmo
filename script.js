let ModeSombre = false;

function changeModeSombre() {
    if (ModeSombre) {
        //mode clair
        ModeSombre=false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#ccc");
        document.getElementById("Mode-Clair").innerHTML = "Mode Sombre";
    } else {
        //mode clair
        ModeSombre=true;
        document.documentElement.style.setProperty("--text-color","#ccc");
        document.documentElement.style.setProperty("--background-color","black");
        document.getElementById("Mode-Clair").innerHTML = "Mode Clair";
    }
}