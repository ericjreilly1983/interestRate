createOptions();

function createOptions(){
  let select = document.getElementById('percentage');
  for(var i = 0; i <= 100; i++){ 
  var node = document.createElement("option");
  node.innerHTML = i;
  node.setAttribute('value', i);
  node.setAttribute('class', 'percent');
  select.appendChild(node); 
  }
}


function calculateInterest(amount, payments, interest){
  var total = amount;
  for(var i = 1; i <= payments; i++){
    var percent = total * interest;
    total = total += percent;
  }
  return '$' + total.toFixed(2); 
}

function onClick(){
 
  var para = document.getElementById('show');
  var result = document.getElementsByTagName('div')
  
  var select = document.getElementById('percentage');
  var percentValue = select.options[select.selectedIndex].value / 100;
  var amounts = document.getElementById('amount');
  var amountValue = parseFloat(amounts.value);
  var time = document.getElementById('time');
  var timeValue = parseInt(time.value);

  if(para.className === "show test"){
    para.remove()
    var para = document.createElement('p');
    para.id = "show"
    var result = document.getElementById('result')
    result.appendChild(para);
  }
  
  para.innerHTML = calculateInterest(amountValue, timeValue, percentValue);
  para.className = "show";
  para.className += " test"

}








