const students  = [
    {
        name: "Maria",
        notes: [9, 9, 10, 9]
    },
    {
        name: 'Ion',
        notes: [7,5,10]
    },
    {
        name: 'Ivan',
        notes: [7,2,5,10]
    }
];

function getAverage(student) {
    let suma = 0;

    for (const note of student.notes) {
        suma += note
    }

    const media = suma / student.notes.length

    if (media < 5 ) {
        console.log(`${student.name} are media: ${media}`)
    }

    const index = students.findIndex(el => el.name === student.name)

    students[index] = {...student, media}
}

for (const student of students) {
    getAverage(student);
}

const max = Math.max.apply(null, students.map(item => item.media));
const min = Math.min.apply(null, students.map(item => item.media));

console.log(students.find(el => el.media === min), students.find(el => el.media === max))
const up = students.sort((a, b)=> a.media - b.media)
const down = students.sort((a, b)=> b.media - a.media)
