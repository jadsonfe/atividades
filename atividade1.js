/*Dividir dois números sem usar o operador da divisão ;*/
var n1=1
var n2=0

count=0
if(n1>=0&&n2!=0){
while(n1>=n2){
    n1=n1-n2
    count++
}
console.log(count)
}else if(n1<0){
    while(n1<=(-n2)){
        n1=n1+n2
        count--
    }
console.log(count)
}else if(n2==0&&n1!=0){
    console.log("impossivel")
}else if(n1==0&&n2==0){
    console.log("indeterminado")
}