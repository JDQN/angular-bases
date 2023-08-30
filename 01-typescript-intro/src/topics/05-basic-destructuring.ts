interface AudioPlayer {
  audioVolumen: number;
  soungDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumen: 100,
  soungDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2017
  }
}

const { audioVolumen: volumen, soungDuration: duration, song: song, details } = audioPlayer;
const { author } = details;

console.log('Duration: ', duration);
console.log('Volumen: ', volumen);
console.log('Song: ', song);
console.log('Author: ', author);


export { };