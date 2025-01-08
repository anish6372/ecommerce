//  *****
//   ****
//    ***
//     **
//      *
     let res="";

for(let i=1;i<=5;i++){for(let j=1;j<i;j++){
    res+=' ';
}

for(let j=5;j>=i;j--){
    res+='*';
}
res+='\n';

}

console.log(res);



// ----1
// ---12             
// --123
// -1234


let ress='';

for(let i=1;i<5;i++){
    for(let j=i;j<5;j++){
        res+=" ";
    }

    for(let j=1;j<=i;j++){
        res+=j;
    }
    res+='\n';
}



// 1234
//  123
//   12
//    1


let jj="";
for(let i=1;i<=4;i++){
    for(let j=1;j<i;j++){
         jj+=" ";
    }

    for(let j=1;j<(5-i);j++){
        jj+=j;
    }
    jj+='/n';
}



let rese="anish";
let j="";



for(let i=rese.length-1;i>=0;i--){
   let st= res.charAt[i];
   j+=st;




}

console.log(r);



1234
 234
  34
   4


   let r="";

   for(let i=1;i<=4;i++ ){
    for(let j=i;j<i;j++){
        r+=" ";
    }
    for(let j=i;j<=4;j++){
        r+=j;
    }
   }


//    ----5
//       45
//      345
//     2345
//    12345
   


for(let i=5;i>=1;i--){
    for(let j=i;j>1;j--){
        res+=" ";

    }
    for(let j=i;j<=5;j++){
        res+=j;

    }
    res+='\n';
}

console.log(res);


// bubble sort

let resss=[23,64,89,9,6,5];

for(let i=0;i<resss.length;i++){
    for(let j=0;j<resss.length-i;j++ ){
        if(resss[j]> resss[j+1]){
            let temp=resss[j];
            resss[j]=resss[j+1];
            resss[j+1]=temp;
            
        }
    }
}
console.log(resss);


//selection sort

let u=[89,7,3,23,5,7];

for(let i=0;i<u.length;i++){
    let index=i;
    for(let j=i+1;j<u.length;j++){
        if(u[index] > u[j]){
            index = j;
        }
    }
    if(i!=index){
        let temp=u[i];
        u[i]=u[index];
        u[index]=temp;
    }
}


//insertion sort
let uu=[89,7,3,23,5,7];

for(let i= 0;i<uu.length;i++){
    let key=uu[i];
    j=i-1;
    while(j>=0 && uu[j] > key){
        uu[j+1]= uu[j];
        j--
    }
    uu[j+1]=key;
}
console.log(uu);



//quick sort 

let uuu=[89,7,3,23,5,7];

let pivot=uuu[uuu.length-1];


let left=[];
let right=[];
for(let i=0;i<uuu.length;i++){
    if(uuu[i]< pivot){
        left.push(uuu[i]);
    }
    else{
        right.push(uuu[i]);
    }
}

return [...]







   

      
