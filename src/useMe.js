// "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";
let text = "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";
let target = 'media/';
let index = text.indexOf(target) + target.length;  // 22+6 = 28 (g)
//https://media.rawg.io/media/ + 'crop/600/400/' + games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";
let res = text.slice(0, index) + 'crop/600/400/' + text.slice(index); 
console.log(res);