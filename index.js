const rideListElement = document.querySelector("#rideList")
const allRides = getAllRides()

allRides.forEach(async ([id, value]) => {
    const ride = JSON.parse(value)
    ride.id = id 

    const firstPosition = ride.data[0]
    const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)

    const itemElement = document.createElement("li")
    itemElement.id = ride.id
    
    const cityDiv = document.createElement("div")
    cityDiv.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`

    const maxSpeedDiv =document.createElement("div")
    maxSpeedDiv.innerText = getMaxSpeed(ride, data)

    itemElement.appendChild(cityDiv)
    rideListElement.appendChild(itemElement)
    
})

async function getLocationData(latitude, longitude){

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}$=localityLanguage=en`

    const response = await fetch(url)
    return await response.json()
}

function getMaxSpeed(positions){
    console.log(positions)

    return 0
}