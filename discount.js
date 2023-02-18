function ticketPrice (ticketQuantity){
    const first100Price= 100;
    const second100Price= 90;
    const bakiTicket = 70;

    if(ticketQuantity<=100){
        const price = ticketQuantity * first100Price;
        return price;
    }
    else if(ticketQuantity<=200){
        const first100Rate= 100 * first100Price;
        const bakiTicketQuantity = ticketQuantity-100;
        const bakiTicketRate = bakiTicketQuantity * second100Price;
        const totalPrice = first100Rate + bakiTicketRate;
        return totalPrice; 
    }
    else {
        const first100Rate= 100 * first100Price;
        const second100Rate = 100 * second100Price;
        const bakiTicketQuantity = ticketQuantity - 200;
        const bakiTicketRate = bakiTicketQuantity * bakiTicketPrice;
        const totalCost = first100Rate + second100Rate + bakiTicketRate;
        return totalCost; 
    }
}
const price = ticketPrice(120);
console.log(price);