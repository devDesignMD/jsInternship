const music = [ 'Jazz','Bluz'];

music.push('RocknRoll');
music[Math.floor((music.length - 1) / 2)] = "Classic";
const shift = music.shift()
music.unshift('Rap','Reggy')
console.log(music)
console.log(shift)