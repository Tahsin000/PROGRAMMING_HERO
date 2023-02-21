// Q: How will you get the output [Advanced - uses 2D matrix concept
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];


/*
Q: How will you get the output
   a) level-2
    b) 72.8621
*/ 
let data = [{
    "pHeroCourses": {
        "course-x": "web development"
    }
},
{
    "pHeroCourses": {
        "course-y": "phitron"
    }
},
{
    "pHeroCourses": {
        "course-z": "acc"
    }
},
{
    "pHeroCourses": {
        "course-xyz": "level-2"
    },
    "locationField": {
        "en-US": {
            "lat": 19.28563,
            "lon": 72.8621
        }
    }
}
]
const result = MathScore[0][1];
const level = data[3].pHeroCourses['course-xyz'];
const locationField = data[3].locationField['en-US'].lon;
console.log(result);
console.log(level);
console.log(locationField);