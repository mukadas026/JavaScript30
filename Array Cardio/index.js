const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];


let inventoryear = inventors.filter((value) => {
    return (value.year >= 1500) && (value.year < 1600)
})

let names = inventors.map((value) => {
    return value.first && value.last
})

let dateSorted = inventors.sort((value1, value2) => (value2.year - value1.year))
let age = [];
let yearsLived = inventors.forEach((value) => {
    age.push(`${value.first} : ${value.passed - value.year}`)

});

let sortByAge = inventors.sort((value1, value2) => (value1.passed - value1.year) - (value2.passed - value2.year))

let peopleRev = people.map((value) => {
    return value.split(',').reverse()
})

let sortPeople = peopleRev.sort().map((value) => {
    return value.reverse()
});


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

let numOfInstances = [];
let count = 0;

let numberOfInstances = data.forEach((value) => {
    for(let i = 0; i < data.length; i++){
        if(data[i] === value){
            if(numOfInstances.includes(value)){
                count++
            }
            else{
                count++
                numOfInstances.push(value)
                // return numOfInstances.push(`${value} : ${count}`)
            }
            
        }
    }
    count = 0;
})
console.log(numOfInstances);