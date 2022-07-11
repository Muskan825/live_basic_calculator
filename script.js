function sub(){
    num1 = parseInt(document.getElementById("number1").value);
    num2=parseInt(document.getElementById("number2").value);
    let r = num1-num2;
    document.getElementById("res").innerText=r;
    console.log(r);
    alert("Result is : "+r);
}
function mul(){
    num1 = parseInt(document.getElementById("number1").value);
    num2=parseInt(document.getElementById("number2").value);
    let r = num1*num2;
    document.getElementById("res").innerText=r;
    console.log(r);
    alert("Result is : "+r);
}
function div(){
    num1 = parseInt(document.getElementById("number1").value);
    num2=parseInt(document.getElementById("number2").value);
    let r = num1/num2;
    document.getElementById("res").innerText=r;
    console.log(r);
    alert("Result is : "+r);
}
function add(){
    num1 = parseInt(document.getElementById("number1").value);
    num2=parseInt(document.getElementById("number2").value);
    let r = num1+num2;
    document.getElementById("res").innerText=r;
    console.log(r);
    alert("Result is : "+r);
}