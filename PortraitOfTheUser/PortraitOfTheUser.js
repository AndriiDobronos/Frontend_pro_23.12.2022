const birthdayData = prompt('Enter year birthday')
const locationData = prompt('Enter place of residence')
const favoriteSport = prompt( 'Enter your favorite sport')
const age = 2022 - Number(birthdayData)
let sentenceAboutBirthday = " "
let phraseAboutLocation = " "
let cityOrCapital = " "
if (birthdayData === null || Number.isNaN(Number(birthdayData)) ||
    birthdayData === "" || birthdayData === " " ||
    Number(birthdayData) > 2022 || Number(birthdayData) < 1900) {
    if (locationData === null || locationData === "" ||
        locationData === " " || (!Number.isNaN(Number(locationData))))
    {
        phraseAboutLocation = phraseAboutLocation + "To pity for your give me place of residence"
        sentenceAboutBirthday = sentenceAboutBirthday + "To pity for your give me year birthday"
        const firstPartPortrait = ('1' + sentenceAboutBirthday + phraseAboutLocation)
        alert(firstPartPortrait)
    }
    else{
        phraseAboutLocation = locationData
        sentenceAboutBirthday = sentenceAboutBirthday + "To pity for your give me year birthday"
        if (locationData === "Kyiv" || locationData === "Washington" ||
            locationData === "London") {
            cityOrCapital = cityOrCapital + "capital"
            const firstPartPortrait = ('2' + sentenceAboutBirthday + "Place your location :" +
                phraseAboutLocation + cityOrCapital)
            alert(firstPartPortrait)
        }
        else {
            cityOrCapital = cityOrCapital + "city"
            const firstPartPortrait = ('3' + sentenceAboutBirthday + "Place your location :" +
                phraseAboutLocation + cityOrCapital)
            alert(firstPartPortrait)
        }
    }
}
else if (locationData === null || locationData === "" ||
locationData === " " || (!Number.isNaN(Number(locationData)))) {
    phraseAboutLocation = phraseAboutLocation + "To pity for your give me place of residence"
    const firstPartPortrait = ('4' + phraseAboutLocation + 'Your age is :' + age)
    alert(firstPartPortrait)
}
else if (locationData === "Kyiv" || locationData === "Washington" ||
    locationData === "London") {
    phraseAboutLocation = locationData
    cityOrCapital = cityOrCapital + "capital"
    const firstPartPortrait = ('5' + 'Your age is :' + age + sentenceAboutBirthday +
        "Place your location :" + " " + phraseAboutLocation + cityOrCapital)
    var firstPartPortraits = firstPartPortrait
}
else {
    phraseAboutLocation = locationData
    cityOrCapital = cityOrCapital + "city"
    const firstPartPortrait = ('6' + 'Your age is :' + age + sentenceAboutBirthday +
        "Place your location :" + phraseAboutLocation + cityOrCapital)
    var firstPartPortraits = firstPartPortrait
}
switch (true) {
    case favoriteSport === null || "" ||
        " " || (!Number.isNaN(Number(favoriteSport))) :
    const thirdMassege = "To pity for you give me your favorite sport"
    case locationData === null || "" ||
        " " || (!Number.isNaN(Number(favoriteSport))) :
        const seconddMassege = "To pity for you give me your favorite sport"
}
let countryLocation
switch (true) {
    case locationData === "Kyiv" :
        countryLocation = "of Ukraine"
        break;
    case locationData === "London" :
        countryLocation = "of Great Britain"
        break;
    case locationData === "Washington" :
        countryLocation = "of USA"
        break;
    default :
        countryLocation = " "
}
const secondPartPortrait = countryLocation

switch (true) {
    case favoriteSport === "football" :
        phraseAboutSport = "Awesome! do you want to be Ronaldo"
        break;
    case favoriteSport === "swimming" :
        phraseAboutSport = "Awesome! do you want to be Mark Spitz"
        break;
    case favoriteSport === "tennis" :
        phraseAboutSport = "Awesome! do you want to be Ivanishevich"
        break;
    default :
        phraseAboutSport = "Awesome !"
}
const thirdPartPortrait = "Your favorite sport : " + favoriteSport + phraseAboutSport
const wholePortrait = firstPartPortraits + secondPartPortrait + thirdPartPortrait
alert(wholePortrait)
