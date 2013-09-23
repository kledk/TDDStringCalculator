var Add = function(numbers) {
    'use strct';
    if (!numbers) {return '';}

    var matches, splitted, delimeter;
    if ((matches = numbers.match(/^\/\/(.*)\n/))) {
        delimeter = matches[1];
        splitted = numbers.split('\n')[1].split(delimeter);
    }
    else {
        splitted = numbers.split(/\n|,/g);
    }

    var sum = 0;
    var negativeNums = [];
    for (var i = 0; i < splitted.length; i++) {
        var parsed = parseInt(splitted[i], 10);
        if (parsed < 0) {
            negativeNums.push(parsed);
            continue;
        }
        if (parsed > 1000) {continue;}

        sum += parsed;
    }
    if (negativeNums.length) {
        throw new Error('negatives not allowed ' + negativeNums.toString());
    }
    return sum;
};

exports.Add = Add;