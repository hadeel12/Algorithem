function harmlessRandomNote(note,magazine) {
    var noteWords=note.replace(/\s+/g,' ').trim().split(' ');
    var magazineWords=magazine.replace(/\s+/g,' ').trim().split(' ');
    var noteWordIncluded=[];
    for(var i=0;i<noteWords.length;i++){
        if(magazineWords.includes(noteWords[i])) {
            delete magazineWords[magazineWords.indexOf(noteWords[i])];
            noteWordIncluded.push(true);
        }else{
            noteWordIncluded.push(false);
        }
    }
    return noteWordIncluded.includes(false)?false:true;
}
var note="this is a secret note for you from a secret admirer";
var magazine="puerto rico is a place of great wonder and  excitement it has many secret waterfall locatoins that i am an admirer of you must secret hike quite a distance to find the places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited";
console.log(harmlessRandomNote(note,magazine));

