const sentence = "hello there from lighthouse labs";
let timer = 60;
let startTime = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (startTime + timer));
  startTime += timer;
}
setTimeout(() => {
  console.log("\n");
}, (startTime + (startTime / 5)));