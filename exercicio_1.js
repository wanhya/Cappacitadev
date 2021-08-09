function retornapar(num) {
 if (num % 2 == 0) {
   return num
 } 
}

var numeroaleatorio = [12, 47, 66, 35, 142, 71, 14, 6]
var filtrado = numeroaleatorio.filter(retornapar)
console.log(filtrado)
