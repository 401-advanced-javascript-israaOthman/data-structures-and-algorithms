'use strict';


function leftJoin (hash1,hash2){
  let map1 = hash1.map;
  let result=[];
  map1.forEach(lL=>{
    //   console.log(lL);
    let values = lL.values();
    // console.log(values);
    values.forEach(object=>{
      let smallArr = [];
      if(Object.keys(object)[0]){
        // console.log(object);
        // console.log()
        let test=Object.keys(object)[0]

        smallArr[0]=test;
        smallArr[1]=object[test];
        // console.log(smallArr);
        let antonyms= hash2.get(test);
        console.log(antonyms);
        if(antonyms){
          smallArr[2]=antonyms[test];
        }
      }
      result.push(smallArr);
    });
  });
  return result;
}


module.exports=leftJoin;