import './style.css';

import { classroomInformation, plusOne } from './myModule';
console.log(classroomInformation);
console.log(plusOne(5));

import * as myModule from './myModule';
console.log(myModule.classroomInformation);
console.log(myModule.plusOne(5));

import { classroomInformation as myClassroomInformation } from './myModule';
console.log(myClassroomInformation);

import plusTwo from './myModuleDefaultExports';
console.log(plusTwo(7));

import _ from 'lodash';
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

function search(value) {
  console.log(value);
}

const debouncedSearch = _.debounce(search, 200);

const searchBar = document.getElementById('search');
let timeoutId;
searchBar.addEventListener('input', () => {
  // search(searchBar.value);
  debouncedSearch(searchBar.value);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    search(searchBar.value);
    timeoutId = undefined;
  }, 200);
});
