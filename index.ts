import { studentChecker } from './studentChecker';
import { mailer } from './mailer';

studentChecker([
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
], mailer);