function harmlessRandomNote(note,magazine) {
    var noteWords=note.split(' ');
    var magazineWords=magazine.split(' ');
    var magazineWordRepetition={};
    magazineWords.forEach(function (word) {
        if(!magazineWordRepetition[word]){
            magazineWordRepetition[word]=0;
        }
        magazineWordRepetition[word]++;
    });
    for(var i=0;i<noteWords.length;i++){
        if(magazineWordRepetition[noteWords[i]]){
            magazineWordRepetition[noteWords[i]]--;
            if(magazineWordRepetition[noteWords[i]]<0){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
}
console.log(harmlessRandomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

