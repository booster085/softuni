function solve(inputArr) {
    var bill,
        mood,
        tip,
        multiplier;
    bill = parseFloat(inputArr[0]);
    mood = inputArr[1];

    switch (mood) {
        case 'happy': tip = bill * 0.1;
            break;
        case 'married': tip = bill * 0.0005;
            break;
        case 'drunk':  multiplier = Number((bill * 0.15).toString()[0]);
            tip = Math.pow((bill * 0.15), multiplier);
            break;
        default:
            tip = bill * 0.05;
            break;
    }
    console.log(tip.toFixed(2));
}


solve(['716.00', 'bored']);