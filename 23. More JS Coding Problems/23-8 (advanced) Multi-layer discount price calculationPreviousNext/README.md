# **Multi-layer discount price calculationPreviousNext**

> **Problem**
> 
> 1. if ticket number is less than 100, per ticket price: 100
> 2. if ticket number is less than 100, but less than 200. frist 100 tickets will be 100 ticket
> 3. if you purchase more than 200 tickets
> first 100 ---> 100tk
> 101-200 ---> 90tk
> 200+ ---> 70tk

```jsx
function ticketPrice (ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    let price = 0;
    if (ticketQuantity > 200) price += (100 * first100Rate) + (100 * second100Rate) +((ticketQuantity-200) * restTicketRate);
    else if (ticketQuantity > 100) price += (100 * first100Rate) + ((ticketQuantity -100) * second100Rate);
    else if (ticketQuantity <= 100) price += (ticketQuantity * first100Rate);
    return price;
}
console.log(ticketPrice(120));
```