/*
Q: 5) How will you display 
    a) programming er coddogosti 
    b) VW 
    c) Bangladesh 

*/ 
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
const books = instructor.additionalData.books[1]
const VW = instructor.additionalData.moreDetails.hometown.state
const Bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0]
console.log(books);
console.log(VW);
console.log(Bangladesh);