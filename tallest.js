function maxInArray (height){
    let largest = height[0];
    for(let i=0; i<height.length; i++){
        const index =i;
        const elements =height[index];
        if(elements>largest){
            largest= elements;
        }
    }
    return largest;

}
const height=[167, 390,120,165,137,245];
const tallest=maxInArray(height);
console.log('tallest person is: ', tallest)