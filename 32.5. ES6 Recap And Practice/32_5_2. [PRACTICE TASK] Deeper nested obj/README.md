## Problem-1

How will you access Sophia’s secondary school location?

```json
let data = {
    Sophia: {
        id: 33,
        study: [{
                primary: [{
                        school_name: "ABC primary school"
                    },
                    {
                        location: "Peters burg"
                    }
                ]
            },
            {
                secondary: [{
                        school_name: "ABC secondary school"

                    },

                    {
                        location: "St Lorence"
                    }
                ]
            },
        ]
    }
}
```

## Solve

```jsx
const result = data.Sophia.study[1].secondary[1].location;
console.log(result);
```

## Problem-2

Q: How will you get the output
a) level-2
b) 72.8621

```json
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
```

## Solve

```jsx
const result = MathScore[0][1];
const level = data[3].pHeroCourses["course-xyz"];
const locationField = data[3].locationField["en-US"].lon;
console.log(result);
console.log(level);
console.log(locationField);
```

## Problem-3

Q: How will you get the output
a) abc
b) xyz

```json
let activities = {
    activity1: [{
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}
```

## Solve

```jsx
const abc = activities.activity1[0].song_list.song_1;
const xyz = activities.activity1[1].song_list.song_2;
console.log(abc);
console.log(xyz);
```

## Problem-4

1. How will you display
   a) Petersburg
   b) Herry

```json
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
```

## Solve

```jsx
const city = students[2222].address.city;
const name = students[3333].name;
console.log(city);
console.log(name);
```

## Problem-5

1. How will you display
   a) programming er coddogosti
   b) VW
   c) Bangladesh

```json
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
```

## Solve

```jsx
const books = instructor.additionalData.books[1];
const VW = instructor.additionalData.moreDetails.hometown.state;
const Bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(books);
console.log(VW);
console.log(Bangladesh);
```

## Problem-6

1. How will you display
   a) B
   b) D

```json
const studentData = [{
        class: 10,
        details: [{
                studentId: '1',
                gradingDetails: [{
                    grade: 'A'
                }]
            },
            {
                studentId: '2',
                gradingDetails: [{
                    grade: 'B'
                }]
            }
        ]
    },
    {
        class: 11,
        details: [{
                studentId: 3,
                gradingDetails: [{
                    grade: 'B'
                }]
            },
            {
                studentId: 4,
                gradingDetails: [{
                    grade: 'D'
                }]
            }
        ]
    },
]
```

## Solve

```jsx
const B = studentData[0].details[1].gradingDetails[0].grade;
const D = studentData[1].details[1].gradingDetails[0].grade;
console.log(B);
console.log(D);
```

## Problem-7

1. How will you display
   a) habluder adda
   b) Beginner

```json
let data = {
    data: [{
        bookId: 1,
        bookDetails: {
            name: "habluder adda",
            category: "XYZ",
            price: "20$",
        },
        bookCategory: "Basic",
    },
    {
        bookId: 2,
        bookDetails: {
            name: "gobluder adda",
            category: "ABC",
            price: "40$",
        },
        bookCategory: "Beginner",
    }
]
}
```

## Solve

```jsx
const adda = data.data[0].bookDetails.name;
const Beginner = data.data[1].bookCategory;
console.log(adda);
console.log(Beginner);
```
