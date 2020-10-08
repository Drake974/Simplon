window.onload = function(){

/*var tab1 = [4, 8, 7, 9, 1, 5, 4, 6];
var tab2 = [7, 6, 5, 2, 1, 3, 7, 4];
var tab3 = [];

for (let i = 0; i < tab1.length; i++) {
   tab3.push(tab1[i] + tab2[i]);

}*/


//console.log(tab3)

var tableau_1 = []; 
var tableau_2 = []; 
var tableau_3 = []; 


var liste1 = document.getElementById("tableau1").getElementsByTagName('td');
for (let i = 0; i < liste1.length; i++) {
  var x = parseInt(liste1[i].innerHTML);
 
  tableau_1.push(x);  

}
console.log(tableau_1)




var liste2 = document.getElementById("tableau2").getElementsByTagName('td');
for (let i = 0; i < liste2.length; i++) {
  var y = parseInt(liste2[i].innerHTML);
 
  tableau_2.push(y);  

}
console.log(tableau_2)


for (let i = 0; i < tableau_1.length; i++) {
   tableau_3.push(tableau_1[i] + tableau_2[i]);

}
console.log(tableau_3)


for (let i = 0; i < tableau_3.length; i++) {
var ajoutertd = document.createElement('td');
ajoutertd.innerText = tableau_3[i];
document.getElementById('tableau3').appendChild(ajoutertd);


}


//var tableau_1 = [];

//console.log(liste1)

//liste1.foreach(function(valeur){
//console.log(valeur)
//})




}