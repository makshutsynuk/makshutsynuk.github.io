const header = document.querySelector('header')
const section = document.querySelector('section')
let heroes = {}
const requestURL = 'https://semegenkep.github.io/json/example.json'

const request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = 'json'
request.send()

// request.onload = function(){
//     const superHeroes = request.response
//     populateHeader(superHeroes)
//     showHeroes(superHeroes)
// }

request.onload = function(){
    const superHeroes = request.response
    heroes = {...superHeroes}
    //console.log({superHeroes})
    console.log(heroes)

    populateHeader()
    showHeroes()
}

let populateHeader = () =>{
    let header = document.querySelector('header')
    const h1 = document.createElement("h1")

    const content = document.createTextNode(heroes.squadName)

    h1.appendChild(content)

    header.appendChild(h1)

    let p = document.createElement("p")
    const pContent = document.createTextNode("Hometown: "+heroes.homeTown+" // "+"Formed: "+heroes.formed)

    p.appendChild(pContent)
    header.appendChild(p)
}

let showHeroes = () => {
    let members = heroes.members

    // members.forEach((item)=>{
    //     document.write(`<div>
    //         <h2>${item.name}</h2>
    //         <p>Secret identity: ${item.secretIdentity}</p>
    //         <p>Age: ${item.age}</p>
    //         <p>SuperPowers:</p>
    //         <br>
    //         <ul>
    //             ${()=>{
    //                 powers.forEach((item)=>{
    //                     `<li>${item}</li>`
    //                 })
    //             }}
    //             <li></li>
    //         </ul>
    //         </div>`)
    // })

    members.forEach((item)=>{
        const section = document.querySelector("section")

        const article = document.createElement("article")

        let h2 = document.createElement("h2")
        const h2Content = document.createTextNode(item.name)

        h2.appendChild(h2Content)

        article.appendChild(h2)
        
        let p = document.createElement("p")
        const pContent = document.createTextNode("Secret identity: "+item.secretIdentity)

        p.appendChild(pContent)

        article.appendChild(p)

        let age = document.createElement("p")
        const ageContent = document.createTextNode("Age: "+item.age)

        age.appendChild(ageContent)
        article.appendChild(age)

        let superPowers = document.createElement("p")
        const superPowersContent = document.createTextNode("Superpowers: ")

        superPowers.appendChild(superPowersContent)
        article.appendChild(superPowers)

        let powers = document.createElement("ul")


        item.powers.map((item)=>{
            let superPower = document.createElement("li")
            let superPowerContent = document.createTextNode(item)

            superPower.appendChild(superPowerContent)
            console.log(item)
            article.appendChild(superPower)
        })
        section.appendChild(article)
    })
}