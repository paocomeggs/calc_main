function insert(num){
    if (op == 0){
        if (num == '-' || num == '+' || num == '/' || num == '*'){
            op = 1;
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;    
        }
        else{}
    }
    else{
        if (num == '-' || num == '+' || num == '/' || num == '*'){}
        else{
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num; 
        }
    }

}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    op = 0; 
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }

    var plays = document.getElementById('plays').innerHTML;   
    if (plays > 1){
        document.getElementById('plays').innerHTML = plays - 1;
    }
    else{
        if(document.getElementById('resultado').innerHTML == 0){
            var win = document.getElementById('calc_win');
            win.classList.toggle("show");

            document.getElementById("zero").disabled = true;
            document.getElementById("clean").disabled = true;

            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
        else{
            var lose = document.getElementById('calc_lose');
            lose.classList.toggle("show");

            document.getElementById('plays').innerHTML = 0;

            document.getElementById("zero").disabled = true;
            document.getElementById("clean").disabled = true;

            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
    }

    if(document.getElementById('resultado').innerHTML == 0){
        var win = document.getElementById('calc_win');
        win.classList.toggle("show");

        document.getElementById("zero").disabled = true;
        document.getElementById("clean").disabled = true;

        var elements = document.getElementsByClassName("botao");
        for (var i = 0; i < elements.length; i++) {
            elements[i].disabled = true;
        }
    }
}

function iniciar(){
    document.getElementById("zero").disabled = false;
    document.getElementById("clean").disabled = false;

    var elements = document.getElementsByClassName("botao");
        for (var i = 0; i < elements.length; i++) {
            elements[i].disabled = false;
        }

    var showbt = document.getElementById('bt');
    showbt.classList.remove("show");

    document.getElementById("bd1").disabled = true;
    document.getElementById("bd2").disabled = true;
}

var cont_tutorial = 0;
var contv_tutorial = 0;

function prox_tutorial(){
    if (cont_tutorial == 0){
        var hideb1 = document.getElementById('b1');
        hideb1.classList.add("hide");

        var showb2 = document.getElementById('b2');
        showb2.classList.add("show");

        var showbv = document.getElementById('bv');
        showbv.classList.add("show");

        cont_tutorial = cont_tutorial + 1;
    }
    else if(cont_tutorial == 1){
        var hideb2 = document.getElementById('b2');
        hideb2.classList.remove("show");

        var showb3 = document.getElementById('b3');
        showb3.classList.add("show");

        cont_tutorial = cont_tutorial + 1;
    }
    else if(cont_tutorial == 2){
        var hideb3 = document.getElementById('b3');
        hideb3.classList.remove("show");

        var showb4 = document.getElementById('b4');
        showb4.classList.add("show");

        cont_tutorial = cont_tutorial + 1;
    }
    else if(cont_tutorial == 3){
        var hideb4 = document.getElementById('b4');
        hideb4.classList.remove("show");

        var showb5 = document.getElementById('b5');
        showb5.classList.add("show");

        cont_tutorial = cont_tutorial + 1;
    }

    else if(cont_tutorial == 4){
        var hideb5 = document.getElementById('b5');
        hideb5.classList.remove("show");

        var hidebp = document.getElementById('bp');
        hidebp.classList.add("hide");

        var showbt = document.getElementById('bt');
        showbt.classList.add("show");

        var showbv = document.getElementById('bv');
        showbv.classList.remove("show");

        cont_tutorial = cont_tutorial + 1;
    }
}

function volt_tutorial(){
    if(cont_tutorial == 1){
        var hideb2 = document.getElementById('b2');
        hideb2.classList.remove("show");
    
        var showb1 = document.getElementById('b1');
        showb1.classList.remove("hide");

        var hidebv = document.getElementById('bv');
        hidebv.classList.remove("show");

        cont_tutorial = 0;
    }
    else if(cont_tutorial == 2){
        var hideb3 = document.getElementById('b3');
        hideb3.classList.remove("show");
    
        var showb2 = document.getElementById('b2');
        showb2.classList.add("show");
    
        cont_tutorial = cont_tutorial - 1;
    }
    else if(cont_tutorial == 3){
        var hideb4 = document.getElementById('b4');
        hideb4.classList.remove("show");
    
        var showb3 = document.getElementById('b3');
        showb3.classList.add("show");

        cont_tutorial = cont_tutorial - 1;
    }    
    else if(cont_tutorial == 4){
        var hideb5 = document.getElementById('b5');
        hideb5.classList.remove("show");
    
        var showb4 = document.getElementById('b4');
        showb4.classList.add("show");

        cont_tutorial = cont_tutorial - 1;
    }  
    else if(cont_tutorial == 5){
        var showb5 = document.getElementById('b5');
        showb5.classList.add("show");

        var showbp = document.getElementById('bp');
        showbp.classList.remove("hide");

        cont_tutorial = cont_tutorial - 1;
    }  
}

