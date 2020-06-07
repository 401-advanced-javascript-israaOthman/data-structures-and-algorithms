'use strict';

const LinkedList = require('../../Data-Structures/ll-insertion/ll-insertion');


function mergeLists (list1, list2) {

  let  zippedList = new LinkedList();

  let l1 = list1.head;
  let l2 = list2.head;

  while (l1 || l2) {
    if (l1) {
      zippedList.append(l1.value);
      l1 = l1.next;
    }
    if (l2) {
      zippedList.append(l2.value);
      l2 = l2.next;
    }
  }
  return zippedList;
}

module.exports=mergeLists;