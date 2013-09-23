var Add = function(numbers) {
    'use strct';
    if (!numbers) {return '';}

    var splitted = numbers.split(/\n|,/g);

    if (isNaN(splitted[0])) {
        var delimeter = splitted[0];
        splitted = splitted[1].split(delimeter);
    }
    var sum = 0;
    var negativeNums = [];
    for (var i = 0; i < splitted.length; i++) {
        var parsed = parseInt(splitted[i], 10);
        if (parsed < 0) {
            negativeNums.push(parsed);
            continue;
        }
        sum += parsed;
    }
    if (negativeNums.length) {
        throw new Error('negatives not allowed ' + negativeNums.toString());
    }
    return sum;
};

exports.Add = Add;