function enter() {
    var row = firstNumber.value;
    var col = secondNumber.value;
    var sign = operator.value
    table ="<table>"
    if(firstNumber.value == '' && secondNumber.value == ''){
        result.innerHTML = ''
        result.innerHTML = `<p style="color: red;">Input two values😡</p>`
    }
    else if(firstNumber.value == '' || secondNumber.value == ''){
        result.innerHTML = ''
        result.innerHTML = `<p style="color: red;">Input two values 😡😒</p>`
    }
    else{
            for(i=1;i<= row;i++){
                i = Number(i)
                table +="<tr>"
                for(j=1;j<=col;j++){
                    j = Number(j)
                var value = eval(j + sign + i)
                if (sign=="/"){
                    var val = value.toFixed(2)
                    table+=`<td style="padding:5px;border:2px solid black;font-size: 10px" >${j} ${sign} ${i} = ${val} </td>`
                }
                else{
                    table+=`<td style="padding:5px;border:2px solid black;font-size: 10px" >${j} ${sign} ${i} = ${value} </td>`
                }
                }
                table +="</tr>"
                result.innerHTML = table
            }
        }
    }





