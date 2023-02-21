/*
Q: How will you display
    a) B
    b) D

*/ 
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
const B = studentData[0].details[1].gradingDetails[0].grade;
const D = studentData[1].details[1].gradingDetails[0].grade;
console.log(B);
console.log(D);