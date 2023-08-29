



function calculate()


{

const altura = document.querySelector('.altura').value
const peso = document.querySelector('.peso').value
const calculoIMC = (peso / (altura * altura)).toFixed(2)




  if(calculoIMC <=18.5)
  {
    alert(`IMC: ${calculoIMC}`)
    alert('Magreza')}
  
  else if(calculoIMC > 18.5 && calculoIMC  <= 24.9)
  {
    alert(`IMC: ${calculoIMC} Situação: Normal`)}
   

  else if(calculoIMC > 25 && calculoIMC <=29.5)
  {
    alert(`IMC: ${calculoIMC} Situação: Sobrepeso`)
    alert('Sobrepeso')}

  else if(calculoIMC > 30 && calculoIMC <= 34.5)
  {
    alert(`IMC: ${calculoIMC} Situação: Obesidade Grau I`)}
    


  else if(calculoIMC > 35 && calculoIMC <= 39.9)
  {
    alert(`IMC: ${calculoIMC} Situação: Obesidade Grau II`)}
 

  else
  {alert(`IMC: ${calculoIMC} Situação: Obesidade Grau III`)}
  






}


