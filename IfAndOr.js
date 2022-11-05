function calculate(year){
    return 2020 - year
}

function logInfoAbout(name, year){
    const age = calculate(year)

    console.log('Человек по имени' + name + 'сейчас имеет возраст' + age)
}

logInfoAbout('Саня', 1910)
