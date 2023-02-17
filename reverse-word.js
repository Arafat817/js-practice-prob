function reverseWord (str){
    const words= str.split(' ');
    const result=[];
    for (let i=words.length-1 ; i>=0; i--){
        const elements= words[i];
       result.push(elements)
    }
    const reversed = result.join(' ');
    return reversed;

    //console.log(result);
}

const myString= 'I am a good boy';
const result= reverseWord(myString);
console.log(result);