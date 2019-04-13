/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var str = document.getElementById('ln1').innerHTML;
    var strarr1 = [];
    var hexarr1 = [];


hexorstr(str);
wrapchar(str);
console.log('final strarr1 = ' + strarr1);
console.log('final hexarr1 = ' + hexarr1);


function wrapchar(str) {
    console.log(str);
    return str.replace(/\S/g, '<span>$&</span>');
}

function hexorstr(str)
{
    console.log(str);

    console.log("strarr1 created: " + strarr1);
    console.log("hexarr1 created: " + hexarr1);
    for (var n = 0, l = str.length; n < l; n++)
    {
        var ascii = String.fromCharCode((str.charCodeAt(n)));
        var hex = Number(str.charCodeAt(n)).toString(16);
        console.log(ascii + " = " + hex);
        strarr1.push(ascii);
        console.log('strarr1 = ' + strarr1);
        hexarr1.push(hex);
        console.log('hexarr1 = ' + hexarr1);
    }
    return hexarr1.join('');
}
   