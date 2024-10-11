let countdownStart = parseInt(prompt(' Enter a number to start the countdown :'))
if (NaN(countdownStart) || countdownStart < 0 ){
    console.log ('please  enter a valid positive number.')
} else {
    for (let i = countdownStart; i >= 0; i--) {
        console.log (i)
    }
}