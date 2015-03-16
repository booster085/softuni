function findCardFrequency(str) {
    var cardFaces = {},
        cards = str.split(/\s+/g),
        key,
        numberOfCards = cards.length,
        faceFrequency;

    cards.forEach(function(card){
        card = card.substring(0, card.length - 1);

        if (!cardFaces.hasOwnProperty(card)){
            cardFaces[card] = 1;
        } else {
            cardFaces[card] += 1;
        }
    });

    for (key in cardFaces) {
        faceFrequency = (cardFaces[key] / numberOfCards * 100).toFixed(2);
        console.log(key + ' -> ' + faceFrequency + '%')
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');
