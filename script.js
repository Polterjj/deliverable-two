let legalName = '';
let holeCount = 0;
let par = 3;
let total = 0;

legalName = prompt('Welcome to GC mini-golf! What is your name?', );
holeCount = prompt(`Hi, ${legalName}! Would you like to play 3 or 6 holes?`, );
par = par * holeCount;

for (let index = 0; index < holeCount; index++) {
    let putts = 0;   
    putts = prompt(`How many putts for hole ${index + 1}? (par: 3)`,);
    total += Number(putts);3
}

if (total === par) {
    console.log(`Good game, ${legalName}. Your total par was: 0.`)
} else if (total < par) {
    console.log(`Great job, ${legalName}! Your total par was: -${par - total}`)
} else {
    console.log(`Nice try, ${legalName}! Your total par was: +${total - par}`)
}