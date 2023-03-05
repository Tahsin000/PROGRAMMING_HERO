function kitchen(){
    let rost = 0;
    return function(){
        rost++;
        return rost;
    }
}

const firstServer = kitchen ();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

