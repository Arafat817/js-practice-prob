//show num 1-50 which is devided by 3 and 5 show 'foobar', 
//is devided by 3 show 'foo', and is devided by 5 show 'bar'

for (let i=1; i<=50; i++){
    if (i%3==0 && i%5==0){
        console.log('foobar');
    }
     else if(i%3==0){
            console.log('foo');
        }
        else if(i%5==0){
            console.log('bar');
        }
     else{
        console.log(i);
     }   
    
}