var a =[24,34,34,2,5,4,524,24];
var m =0;
var mf =1;
var item;

for(i=0 ; i<a.length ; i++){
    for(j=i ; j<a.length; j++){
        if(a[i] == a[j]){
            m++;
            if (mf<m){
                  mf=m; 
                  item = a[i];
                }
        }        
    }
}

console.log(item);