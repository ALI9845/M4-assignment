let conFlip
 let headsStreak = 0
 do {
conFlip = Math.round(Math.random())
if (conFlip === 0) {
    console.log ('Heads')
    headsStreak ++ 
} else {
    console.log ('Tails')
}
 } while (conFlip === 0) 
console.log('Heads streak ended After ' + headsStreak + 'flips')
 