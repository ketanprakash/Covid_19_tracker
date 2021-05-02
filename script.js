today = new Date()
const serverUrl = `https://api.covid19api.com/live/country/india/status/confirmed/date/${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate() - 1}`
console.log(serverUrl)
fetch(serverUrl).then(data =>{
    return data.text()
}).then(result => {
    const arr = JSON.parse(result)
    arr.forEach(element => {
        let container = document.querySelector(".container")
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `<div class = "State">Province: ${element.Province}</div>
        <div class = "Confirmed">Confirmed: ${element.Confirmed}</div>
        <div class = "Active">Active: ${element.Active}</div>
        <div class = "Recovered">Recovered: ${element.Recovered}</div> 
        <div class = "Deaths">Deaths: ${element.Deaths}</div>`
        container.appendChild(card)
    });
})