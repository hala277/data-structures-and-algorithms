'use strict';





function leftJoin(hashMap1,hashMap2){

    let hashArray =[];
    let arr = [];

    for(let i = 0 ; i< hashMap1.map.length ; i++){
        arr.length = 0;
        if(hashMap1.map[i]){
            arr.push(Object.keys(hashMap1.map[i].head.value)[0]);
            arr.push(Object.values(hashMap1.map[i].head.value)[0]);

            if(hashMap2.map[i]){
               arr.push(Object.values(hashMap2.map[i].head.value)[0])

            }
            else{
                arr.push(null);
            }
        }
        if(hashMap1.map[i]){
            hashArray.push(JSON.parse(JSON.stringify(arr)));
        }
    }
    return hashArray;
}

module.exports = leftJoin;

