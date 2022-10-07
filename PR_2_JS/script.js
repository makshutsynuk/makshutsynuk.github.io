document.write('<h2>Завдання 1:</h2>')
let arr = ['a','b','c']
let arr1 = [1, 2, 3]
const newArray = arr.concat (arr1);
document.write('Результат: ' + newArray)

document.write('<h2>Завдання 2:</h2>')
let arr2 = ['a','b','c']
arr2.push(1, 2, 3)
document.write('Результат: ' + arr2)

document.write('<h2>Завдання 3:</h2>')
let arr3 = [1, 2, 3]
arr3.reverse();
document.write('Результат: ' + arr3)

document.write('<h2>Завдання 4:</h2>')
let arr4 = ['js', 'css', 'jq']
document.write('Результат: ' + arr4.slice(-1))

document.write('<h2>Завдання 5:</h2>')
let arr5 = [1, 2, 3, 4, 5,]
let arr6 = arr5.slice (3,5)
document.write('Результат: ' + arr6)

document.write('<h2>Завдання 6:</h2>')
let arr7 = [1, 2, 3, 4, 5,]
arr7.splice(1,2)
document.write('Результат: ' + arr7)

document.write('<h2>Завдання 7:</h2>')
let arr8 = [1, 2, 3, 4, 5,]
let arr9 = arr8.slice (1,4)
document.write('Результат: ' + arr9)

document.write('<h2>Завдання 8:</h2>')
let arr10 = [1, 2, 3, 4, 5,]
arr10.splice (3, 0, "a", "b", "c")
document.write('Результат: ' + arr10)

document.write('<h2>Завдання 9:</h2>')
let arr11 = [1, 2, 3, 4, 5]
arr11.splice(1,0,'a','b')
arr11.splice(6,0,'c')
arr11.splice(8,0,'e')
document.write('Результат: ' + arr11)

document.write('<h2>Завдання 10:</h2>')
let arr12 = [3,4,1,2,7]
function compareNumeric (a, b) {
    return a - b;
    }
document.write('Результат: ' + arr12.sort(compareNumeric))

document.write('<h2>Завдання 11:</h2>')
let obj = {
    js: 'test',
    jq: 'hello', 
    css: 'world'
}
document.write('Результат: ' + Object.keys(obj))

document.write('<h2>Завдання 12:</h2>')
let str = 'aaa@bbb@ccc'
document.write('Результат: ' + str.replace(/@/g, '!'))

document.write('<h2>Завдання 13:</h2>')
let date = '2025-12-31'
let arr13 = date.split('-')
let newStr = arr11[2] + '/' + arr11[1] + '/'+ arr11[0]
document.write('Результат:' + newStr)

document.write('<h2>Завдання 14:</h2>')
let str2 = 'я вчу javascript'
let arrStr = str2.split(' ')
document.write('Результат: ' + arrStr)

document.write('<h2>Завдання 15:</h2>')
let arr14 = []
let x = 'x'
for(let i = 0; i < 10; i++) {

    arr14.push(x)
    x += 'x'
    
}
document.write('Результат: ' + arr14)

document.write('<h2>Завдання 16:</h2>')
function arrayFill(value, count) {
    let arr15 = []
    for(let i = 0; i < count; i++) {
        arr15.push(value)
    }
    document.write('Результат: ' + arr15)
}
arrayFill('x',5)

document.write('<h2>Завдання 17:</h2>')
//
//
//
//
document.write('<h2>Завдання 18:</h2>')
    let styles = ['Jazz', 'Blues']
    document.write(styles + '<br>')
    styles.push('Rock-n-Roll')
    document.write(styles + '<br>')
    styles[Math.floor((styles.length - 1) / 2)] = 'Classics'
    document.write(styles + '<br>')
    document.write(styles.shift() + '<br>');
    document.write(styles + '<br>')
    styles.unshift("Rap", "Reggae")
    document.write(styles + '<br>')

document.write('<h2>Завдання 19:</h2>')
    function camelize(str) {
        return str
        .split('-') 
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(''); 
    }
    document.write(camelize("background-color") + "<br>")
    document.write(camelize("list-style-image")  + "<br>")
    document.write(camelize("-webkit-transition")  + "<br>")


document.write('<h2>Завдання 20:</h2>')
    function filterRange(arr, a, b) {
        return arr15.filter(item => (a <= item && item <= b));
    }
    let arr15 = [5, 3, 8, 1]
    let filtered = filterRange(arr15, 1, 4)
    document.write(filtered + '<br>')
    document.write(arr15  + '<br>')


document.write('<h2>Завдання 21:</h2>')
    function copySorted(arr16) {
        return arr16.slice().sort()
    }
    let arr16 = ["HTML", "JavaScript", "CSS"]
    let sorted = copySorted(arr16)
    document.write(sorted + '<br>')
    document.write(arr16 + '<br>' )

document.write('<h2>Завдання 22:</h2>')
    function sortByAge(arr17) {
        arr17.sort((a, b) => a.age - b.age)
    }
    let ivan = { name: "Іван", age: 25 }
    let petro = { name: "Петро", age: 30 }
    let mariya = { name: "Марія", age: 28 }
    let arr17 = [ petro, ivan, mariya ];
    sortByAge(arr17);
    document.write(arr17[0].name + '<br>')
    document.write(arr17[1].name + '<br>')
    document.write(arr17[2].name + '<br>')

document.write('<h2>Завдання 23:</h2>')
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length
    }
    let ivan2 = { name: "Іван", age: 25 }
    let petro2 = { name: "Петро", age: 30 }
    let mariya2 = { name: "Марія", age: 29 }
    let arr18 = [ ivan, petro, mariya ]
    document.write(getAverageAge(arr18) + '<br>');

document.write('<h2>Завдання 24:</h2>')
    function groupById(arr19) {
        return arr19.reduce((obj, value2) => {
        obj[value2.id] = value2;
        return obj;
        }, {})
    }
    let users2 = [
        {id: 'іван', name: "Іван Іванко", age: 20},
        {id: 'ганна', name: "Ганна Іванко", age: 24},
        {id: 'петро', name: "Петро Петренко", age: 31},
    ];
    let usersById = groupById(users2);
    console.log(users2)
    for (var key in users2) {    
        document.write("Ключ:" + key + "значення:" + users2 [key]); 
        }

document.write('<h2>Завдання 25:</h2>')
    function sumSalaries(salaries) {
        let sum = 0;
        for (let salary of Object.values(salaries)) {
          sum += salary;
        }
        return sum; 
      }
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
      document.write(sumSalaries(salaries));






















