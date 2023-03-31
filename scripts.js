function calcularLitros(){
    let elementoKm = document.getElementById("textoKm");
    let textoKm = elementoKm.value;
    let cantKm = Number(textoKm);

    let cantLitros = parseFloat(cantKm / 8.8).toFixed(2);

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " litros de combustible";
}