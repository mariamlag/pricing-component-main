var slider = document.getElementById("input");
var output = document.getElementById("result");
var month = document.getElementById("month");
let buttom = document.getElementById("switch");
// output.innerHTML = slider.value;
let slider_value = 16;

slider.oninput = function() {
  let value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #A4F3EB ' + value + '%, #ECF0FB ' + value + '%, rgba(236, 240, 251, 1))'
  output.innerHTML = '$' + this.value + ",00";
  slider_value = this.value;
}

buttom.addEventListener('change', (event) => {
  if(event.target.checked){
    month.textContent = "/year";
    slider.max = "289";
    slider.value = slider_value*12*0.75;
    output.innerHTML = '$' + slider.value + ",00";
    slider.oninput();
  }
  else{
    month.textContent = "/month";
    slider.max = "32";
    slider.value = slider_value/12/0.75;
    output.innerHTML = '$' + slider.value + ",00";
    slider.oninput();
  }
})
