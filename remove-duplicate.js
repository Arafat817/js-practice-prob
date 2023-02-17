const names =['abul', 'robin', 'korim', 'sourav', 'shuvo','tareq', 'mamun', 'sajib','mamun','rifat','sourav','robin', 'riad', 'korim', 'roni', 'rukon', 'shuvo' ];

function removeDuplicate(names){
    const unique=[];
    for (let i=0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)== false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames= removeDuplicate(names);
console.log(uniqueNames);