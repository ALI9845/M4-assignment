let conFlip 
let numberOfFlip = parseInt(prompt('how many times would like to filp the coins?'))
if (isNaN(numberOfFlip) || numberOfFlip <= 0){
    console.log('please Enter the valid positive number.')
}else {
    for (let i = 0; i<=numberOfFlip; i++){
        conFlip =Math.round(Math.random())                                  
        if (conFlip === 0) {
           console.log('Heads')
        }else {
            console.log('Talis')
        }
    }
}