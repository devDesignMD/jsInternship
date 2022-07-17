const weekDays = {
    Mo: 'Понедельник',
    Tu: 'Вторник',
    We: 'Среда',
    Th: 'Четверг',
    Fr: 'Пятница',
    Sa: 'Суббота',
    Su: 'Воскресенье'
}

const weekDays2 = {
    Mo: 'Luni',
    Tu: 'Marti',
    We: 'Miercuri',
    Th: 'Joi',
    Fr: 'Vineri',
    Sa: 'Sambata',
    Su: 'Duminica'
}

function another(days){
    for (const key in weekDays){
        weekDays[key] = days[key]
    }
}

another(weekDays2)
console.log(weekDays)
