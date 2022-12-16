var box_preview = document.getElementById("box-preview");

var input_top_l = document.getElementById("input_top_l");
var input_top_r = document.getElementById("input_top_r");
var input_bottom_r = document.getElementById("input_bottom_r");
var input_bottom_l = document.getElementById("input_bottom_l");

input_top_l.onchange = atualizarPreview;
input_top_r.onchange = atualizarPreview;
input_bottom_r.onchange = atualizarPreview;
input_bottom_l.onchange = atualizarPreview;

function atualizarPreview(){
   validarCampos();

   var propriedade = "border-radius: " +
   input_top_l.value + "px " + input_top_r.value + "px " +
   input_bottom_r.value + "px " + input_bottom_l.value + "px;";

  //console.log("Propriedade: " + propriedade);

   document.getElementById("input-prop").value = propriedade;

    box_preview.style = propriedade;

}

function validarCampos(){
    var inputs = [
        input_top_l,
        input_top_r,
        input_bottom_r,
        input_bottom_l
    ];
    for(valor of inputs){
        if(valor.value.lenght === 0 || valor.value < 0)
            valor.value = 0;
        else if(valor.value > 300)
            valor.value = 300;
    }
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("input-prop");
    if(copyText.value.length === 0) return;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }