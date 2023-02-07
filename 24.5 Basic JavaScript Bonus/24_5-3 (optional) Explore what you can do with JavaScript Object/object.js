const nayok = {
    name : 'Sakib khan',
    id : 121,
    address : 'movie cinema',
    isSingle : true,
    friend : ['Apu', 'Raaz', 'Salman', 'aamir'],
    act: function (){
        console.log('acting like sakib khan');
    },
    car : {
        brand : 'tesla',
        price : 50000000,
        made : 2025,
        manufactuer : {
            name : 'tesla',
            ceo: 'Elon mask',
            country : 'USA',
        }
    } 
}
nayok.act()