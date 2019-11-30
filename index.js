function iterativeLog(array){
  array.forEach((element,index)=>{console.log(`${index}:${element}`)});
}

function iterate(callback){
  iterateArray=[1,2,3];
  iterateArray.forEach(callback);
}

function doToArray(array,callback){
array.forEach(callback)
}
