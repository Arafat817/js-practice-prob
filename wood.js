function woodQuantity (chair,table,bed){
    const perChairwood= 3;
    const perTableWood= 10;
    const perBedWood= 50;

    const chairWood= chair * perChairwood;
    const tableWood= table * perTableWood;
    const bedWood = bed * perBedWood;
    
    const totalWood= chairWood+ tableWood+ bedWood;
    return totalWood;
}

const totalWood = woodQuantity(1, 2, 3);
console.log('Total wood:',totalWood);