const songs ='Amar sonar Bangla ami tomay valoabshi ';

const searchWord ='bangla';
const lowerCase= songs.toLowerCase();
const searchWordLower= searchWord.toLowerCase();

const doesExist= lowerCase.includes(searchWordLower);
console.log(doesExist);