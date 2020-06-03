
function palindrome (list){
  let arr = [];
  let current = list.head;
  let result = false ;
  
  if(!list.head){
    return 'null linked list ';
  }
  
  while(current){
    arr.push(current.value);
    current = current.next;
  }
  console.log(arr);
  for(let i =0 , j=arr.length-1 ; i<Math.floor(arr.length/2) ;i++,j--){
  
    if(arr[i] === arr[j]){
      result = true;
    } else {
      return false ;
    }
  }
  return result;
}
