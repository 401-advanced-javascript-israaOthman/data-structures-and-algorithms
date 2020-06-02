'use strict';

const LinkedList = require('../../Data-Structures/ll-insertion/ll-insertion');

const mergeLists = require('../../Data-Structures/llMerge/ll-merge');


describe('Linked List Merge',()=>{

  it('1- Can successfully merge two linked list with same length',()=>{
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    
    ll1.append('1');
    ll1.append('3');
    ll1.append('2');
    
    ll2.append('5');
    ll2.append('9');
    ll2.append('4');
    
    
    expect(mergeLists(ll1,ll2)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": {"next": null, "value": "4"}, "value": "2"}, "value": "9"}, "value": "3"}, "value": "5"}, "value": "1"}});
  });   
  
  it('2- Can successfully merge two linked list not same length',()=>{
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    
    ll1.append('1');
    ll1.append('3');
    
    ll2.append('5');
    ll2.append('9');
    ll2.append('4');
    
    
    expect(mergeLists(ll1,ll2)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": "4"}, "value": "9"}, "value": "3"}, "value": "5"}, "value": "1"}});
  });

  it('3- Can successfully handle if one of the lists null',()=>{
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    
    ll2.append('5');
    ll2.append('9');
    ll2.append('4');
    
    
    expect(mergeLists(ll1,ll2)).toEqual({"head": {"next": {"next": {"next": null, "value": "4"}, "value": "9"}, "value": "5"}});
  });
});
  