function solve(input){
    var carModel, fuelType,
        road, luggageWeight, i,
        currentLine,
        fuelConsumption,
        totalFuel,
        roadOneLength = 110,
        roadOneSnowySection = 10,
        roadTwoLength = 95,
        roadTwoSnowySection = 30; //avg fuel consumption 10l/100km

    for (i in input) {
        currentLine = input[i].split(/\s+/g);
        carModel = currentLine[0].trim();
        fuelType = currentLine[1].trim();
        road = currentLine[2].trim();
        luggageWeight = parseFloat(currentLine[3].trim());
        fuelConsumption = 10;

        switch (fuelType) {
            case 'diesel': fuelConsumption *= 0.8;
                break;
            case 'gas': fuelConsumption *= 1.2;
                break;
            case 'petrol':
            default:
                break;
        }

        fuelConsumption += luggageWeight * 0.01;
        if (road === '1') {
            totalFuel = calcFuelConsumptionOnRoad(roadOneLength, roadOneSnowySection, fuelConsumption);
        } else if (road === '2') {
            totalFuel = calcFuelConsumptionOnRoad(roadTwoLength, roadTwoSnowySection, fuelConsumption);
        }
        console.log(carModel + ' ' + fuelType + ' ' + road + ' ' + totalFuel);
    }
    function calcFuelConsumptionOnRoad(totalRoadLength, snowy, consumption){
        var result;
        result = (consumption/100 * (totalRoadLength - snowy)) + (consumption/100 + (consumption/100 * 30/100)) * snowy;
        return Math.round(result);

    }

}


solve(['BMW petrol 1 320.5',
       'Golf petrol 2 150.75',
       'Lada gas 1 202',
       'Mercedes diesel 2 312.54']
);
