module.exports = function toReadable(number) {
    const tw = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const hund = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const x = number.toString();
    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return tw[number];
    } else if (x.length === 2 && x[1] === "0") {
        return `${hund[x[0]]}`;
    } else if (x.length === 2) {
        return `${hund[x[0]]} ${tw[x[1]]}`;
    } else if (x.length === 3 && x[1] === "0" && x[2] === "0") {
        return `${tw[x[0]]} hundred`;
    } else if (x.length === 3) {
        return `${tw[x[0]]} hundred ${toReadable(+(x[1] + x[2]))}`;
    }
};
