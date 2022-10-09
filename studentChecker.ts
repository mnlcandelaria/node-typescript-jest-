interface TestScores {
  topic: string;
  subject: string;
  grade: number;
}

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  testScores: TestScores[]
}

export const getAverageCourseGrade = (testScores: TestScores[]): number => {
  return (
    testScores.reduce(
      (acc: number, testScores: TestScores) => acc + testScores.grade, 
      0
    ) / testScores.length
  )
}  

export const studentChecker = async (students: Student[], sendEmailFn: Function) => {
  const getFailedStudents = (student: Student) => 
    getAverageCourseGrade(student.testScores) < 60;

  await Promise.all(
    students
      .filter(getFailedStudents)
      .map((failedStudent) => 
        sendEmailFn(failedStudent.email, "You failed")
      )
  )
}