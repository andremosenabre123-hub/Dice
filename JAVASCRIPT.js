function rolldice(){
    const numOfDice = document.getElementById("numofdice").value;
    const value = [];
    const image = [];

    if(numOfDice > 6){
        alert("1 to 6 number only")
    }else{
        for(let i = 0; i < numOfDice; i++){
            const values = Math.floor( Math.random() * 6) + 1;
            value.push(values);
            image.push(`<img src = "Dice_Image/${values}.png" alt="Dice ${values}">`);
        }
        diceResult.textContent = `Dice: ${value.join(', ')}`;
        diceImage.innerHTML = image.join('');
    }
}