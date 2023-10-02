let res=document.querySelector('.result');
let FirstTask = function () {
     var result = 0; 
     return function(x) { 
        result += x; 
        return result; 
    } 
}
let sum = FirstTask();
sum(10); 
sum(15); 
res.innerHTML=sum(20);
 bnt.onclick=FirstTask;
 




