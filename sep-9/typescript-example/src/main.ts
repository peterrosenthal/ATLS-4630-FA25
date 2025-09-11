import './style.css';
import { plusOne } from './myModule';

let meaningOfLife: number | string = 42;

console.log(meaningOfLife);

meaningOfLife = '42';

const meaningOfLifeNumber = meaningOfLife as any as number;

console.log(plusOne(meaningOfLifeNumber));

console.log(plusOne(5));

type ClassroomInfo = {
  building: string;
  room: string;
  capacity: number;
};

const classroomInfoFor104: ClassroomInfo = {
  building: 'ATLAS',
  room: '104',
  capacity: 30,
};

console.log(classroomInfoFor104.room);

type ServerResult = {
  success: true;
  output: string;
} | {
  success: false;
  errors: string[];
};

function doServerCall(input: boolean): ServerResult {
  if (input) {
    return {
      success: true,
      output: 'hello world!',
    };
  }
  return {
    success: false,
    errors: ['hello world', 'this is an error'],
  };
}

function doLog(input: string) {
  console.log(input);
}

const serverResult = doServerCall(true);

if (serverResult.success) {
  doLog(serverResult.output);
}

const app = document.getElementById('app');

if (!app) {
  throw new Error('app is null!');
}

const appDiv = app as HTMLDivElement;

const myInput = document.getElementById('myInput');

if (!myInput) {
  throw new Error('myInput is null!');
}

if (!(myInput instanceof HTMLInputElement)) {
  throw new Error('myInput is not an input element!');
}

console.log(myInput.value);
