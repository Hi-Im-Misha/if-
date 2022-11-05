function calculate(year){
    return 2020 - year
}

function logInfoAbout(name, year){
    const age = calculate(year)
    if (age >= 220) {
        console.log('Человек по имени' + name + 'сейчас имеет возраст' + age)
    } else {
        console.log('Нет')
    }
}

logInfoAbout('Саня', 1910)
logInfoAbout('Саня', 2020)
logInfoAbout('Саня', 1257)
