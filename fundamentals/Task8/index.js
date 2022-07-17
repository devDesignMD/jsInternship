const weekDays = {
    Mo: 'Понедельник',
    Tu: 'Вторник',
    We: 'Среда',
    Th: 'Четверг',
    Fr: 'Пятница',
    Sa: 'Суббота',
    Su: 'Воскресенье'
}

const weekDaysRo = {
    Mo: 'Luni',
    Tu: 'Marti',
    We: 'Miercuri',
    Th: 'Joi',
    Fr: 'Vineri',
    Sa: 'Sambata',
    Su: 'Duminica'
}

function translate(days){
    for (const key in weekDays){
        weekDays[key] = days[key]
    }
}

translate(weekDaysRo)
console.log(weekDays)

