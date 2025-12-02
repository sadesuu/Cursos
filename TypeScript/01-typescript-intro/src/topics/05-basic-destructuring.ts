
interface AudioPlayer {
    audioVolume:number;
    songDuration: number;
    song:string;
    details:Details
}

interface Details {
    author:string
    year:number
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "La conga",
    details: {
        author: "David Castellanos",
        year: 2020
    
}
}

const song = 'mohamend ali'



const {song:anotherSong,songDuration:Duration,details} = audioPlayer;
const {author} = details;


console.log("Song: " + anotherSong)
console.log("Author: " + author)
console.log("Duration: " + Duration)










export{}