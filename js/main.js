/* Arrow functions */

// função padrão javascript
var sumOld = function(a,b){
    return a + b;
};

// arrow function
var sum = (a,b) => a + b;

// exemplo complexo
var obj1 = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log("after 1000ms");
        },1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj1.showContext();

/* Default fuction arguments */

//Exemplo de valores padrão
function randomNumber(){
    return Math.random() * 10;
}
function multiply(a,b=randomNumber()){
    return a * b;
}
console.log(multiply(2))

/*Enhanced object literals */

// exemplo 1
function method1(){

}
var obj2 = {
    method1
};
console.log(obj2);

//exemplo 2
var propName = 'test';
var obj3 ={
    [propName + 'concat']: 'prop value'
}
console.log(obj3);

/*Rest e Spread Operator */


