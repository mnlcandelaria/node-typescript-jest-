import { studentChecker, getAverageCourseGrade } from "./studentChecker"

describe("studentChecker", () => {
  it("should send out an email if the student failed", async () => {
    const mailer = jest.fn();
    await studentChecker(
      [ 
        {
          id: 1,
          name: 'Manly',
          age: 31,
          email: 'mnl.candelaria@gmail.com',
          testScores: [
            {
              subject: "math",
              topic: "adding numbers",
              grade: 0,
            },
            {
              subject: "science",
              topic: "cooking chemicals 101",
              grade: 30,
            },
            {
              subject: "english",
              topic: "spelling",
              grade: 60,
            }
          ],
        }
      ],
      mailer
    )
  })
});

describe("studentChecker", () => {
  it("should NOT send out an email if the student passed", async () => {
    const mailer = jest.fn();
    await studentChecker(
      [ 
        {
          id: 1,
          name: 'Manly',
          age: 31,
          email: 'mnl.candelaria@gmail.com',
          testScores: [
            {
              subject: "math",
              topic: "adding numbers",
              grade: 80,
            },
            {
              subject: "science",
              topic: "cooking chemicals 101",
              grade: 90,
            },
            {
              subject: "english",
              topic: "spelling",
              grade: 80,
            }
          ],
        }
      ],
      mailer
    )
  })
})

describe("getAverageCourseGrade", () => {
  it ("should compute the average test scores", () => {
    const average = getAverageCourseGrade([
      {
        grade: 80,
        topic: 'math',
        subject: 'adding numbers'
      },
      {
        grade: 90,
        topic: 'math',
        subject: 'adding numbers'
      }
    ]);

    expect(average).toEqual(85);
  })
})