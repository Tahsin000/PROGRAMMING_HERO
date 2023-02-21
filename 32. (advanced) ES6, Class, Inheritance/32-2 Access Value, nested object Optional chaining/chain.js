const users = [
    {
        id: 1, 
        name:'abul',
        job: 'doctor'
    },
]
console.log(users[0])
const data = {
    count : 500,
    data: [
        {
            id: 1, name: 'babul', job: 'leader',
            id: 2, name: 'dabul', job: 'leader',
        },
    ]
}
const firstJob = data.data[0].name;
const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address:{
        street:{
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side',
        },
        postOffice: 'cantonment',
        city: 'Dhaka',
    }
}

// const userFlood = user.address.street.second;

// optional change 
const userFlood = user.address.stret?.second;

console.log(userFlood);