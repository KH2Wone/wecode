'use strict';

const getEven50 = () => {
  let arr = [];
  
  for(let i=1; i<=50; i++) {
    if(i % 2 === 0) arr.push(i);
  }

  return arr;
}

getEven50();
