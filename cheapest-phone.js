const phones= [ 
   { name: 'samsung', camera: 12, Storage : '32gb', price: 35000, color:'black' },  
   { name: 'realme', camera: 10, Storage : '32gb', price: 30000, color:'silver' },  
   { name: 'oppo', camera: 10, Storage : '32gb', price: 32000, color:'black' },  
   { name: 'nokia', camera: 12, Storage : '32gb', price: 35000, color:'black' },  
   { name: 'iphone', camera: 12, Storage : '32gb', price: 55000, color:'black' },  
   { name: 'moto', camera: 8, Storage : '32gb', price: 34000, color:'silver' },  
 ];

 function cheapestPhone(phones){
    let cheapest =phones[0];
    for (let i=0; i<phones.length; i++){
        const phone=phones[i];
        if(phone.price< cheapest.price){
            cheapest=phone;

        }
    }
    return cheapest;
 }
  const mySelection = cheapestPhone(phones);
  console.log(mySelection);