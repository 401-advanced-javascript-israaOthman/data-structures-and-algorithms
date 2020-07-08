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
        let test=Object.keys(object)[0];

        smallArr[0]=test;
        smallArr[1]=object[test];
        // ***********************************
        
        let hash = hash2.hash(test);
        if(hash2.map[hash]){
          let arr = hash2.map[hash].values();
      
          arr.forEach(val =>{
      
            if(Object.keys(val)[0]==test){
              // console.log(val);
              smallArr[2]=val[test];
            }else{
              smallArr[2]='Null';
            }
          });
        }else{
          smallArr[2]='Null';
        }
        
        // ***********************************



      }
      result.push(smallArr);
    });
  });
  return result;
}


module.exports=leftJoin;