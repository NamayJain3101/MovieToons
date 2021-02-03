var city_names = [
    "delhi",
    "mumbai",
    "jaipur",
    "agra",
    "kolkata",
    "lucknow"
]

function randomWord() {
    return city_names[Math.floor(Math.random() * city_names.length)]
}

export { randomWord };