const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const averages = students.map(student => {
    const studentKey = Object.keys(student)[0]; // Assuming each object in the array has only one key (student name)
    const marks = Object.values(student[studentKey]);
    const average = marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
    return { [studentKey]: { average } };
});

console.log(averages);
