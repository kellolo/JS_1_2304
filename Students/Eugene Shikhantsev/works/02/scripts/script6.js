// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

console.log('\n#6 Это простой калькулятор.')

function mathOperation(arg1, arg2, op){
    if ((typeof arg1 == "number") && (typeof arg2 == "number")){
        switch(op){
            case '+':   return arg1 + ' + ' + arg2 + ' ='  + Add(arg1, arg2);            
            case '-':   return arg1 + ' - ' + arg2 + ' ='  + Sub(arg1, arg2);            
            case '*':   return arg1 + ' * ' + arg2 + ' = ' + Mult(arg1, arg2);             
            case '/':   return arg1 + ' / ' + arg2 + ' = ' + Div(arg1, arg2);            
            default:    return 'PANIC! Bad operator';
        }
    } else return 'PANIC! Wrong data';
}

get_calc_res = mathOperation(1000, 0, '/');
console.log(get_calc_res);