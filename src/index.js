module.exports = function toReadable(number) {
    number = number.toString();
    let result = [];
    let trash = 0;
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
   if(+number < 10){
         trash = result.unshift(units[+number%100]);
   }
   if (+number > 20 && +number %100 > 19){
       trash = result.unshift(units[+number%10]);
   }
    if (number[(number.length - 2)] != undefined) {
        if (+number < 20) {
            trash = result.unshift(units[+number]);
        }
        else if (number[(number.length - 3)] != undefined && number[(number.length-2)] < 2) {
            trash = result.unshift(units[+number%100])
        }
    }

    if(number[(number.length-2)] != undefined  && +number % 100 > 19){
        trash = result.unshift(dozens[number[(number.length - 2)]]) 
    }

    if(number[(number.length - 3)] != undefined){
        if(number[(number.length - 2)] == '0' && number[(number.length - 1)] == '0'){
            trash = result.unshift(units[number[0]]);
            return result[0] + " hundred";
        }
        else{trash = result. unshift('hundred');
            trash = result.unshift(units[number[0]]);}
    }
    if(result.length>1 && result[(result.length-1)] == 'zero'){
        trash = result.pop()
    }

    return result.join(' ');
}
