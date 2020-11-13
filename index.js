const form = document.getElementById("formulario")

form.onsubmit = (e) => {
    const tit = document.getElementById("título");
    const titval = tit.value();
    const desc = document.getElementById("descripción"):
    const decscval = desc.value();
    const name = document.getElementById("nombre");
    const nameval = name.value();
    
    document.alert(titval);
    e.preventdefault();
    
}
