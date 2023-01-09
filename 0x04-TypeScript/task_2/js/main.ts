export interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher {
  workFromHome(): string {
    return 'cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to director tasks';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
 if (typeof salary === 'string') { salary = Number(salary) }
 let employee: TeacherInterface | DirectorInterface;
 if (salary < 500) {
   employee = new Teacher(); 
 } else {
   employee = new Director();
 }
 return employee;
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string { return `${todayClass}`; }