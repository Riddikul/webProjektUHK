
const btnElem = document.getElementById("overeniButton");
const box1 = document.getElementById("textBox1");
const box2 = document.getElementById("textBox2");


function over() {
    let textBox1, textBox2, shoda;
    textBox1 = box1.value;
    textBox2 = box2.value;
    
    if (textBox1 === "") {
        shoda = "Zadejte e-mail!"
    } else if (textBox2 === "")  {
        shoda = "Zadejte heslo!";
    }
    else{
    	window.location = "presmerovano.html"
     shoda = "Přesměrovávání"; }
    alert(shoda);


} 
btnElem.addEventListener("click", over);