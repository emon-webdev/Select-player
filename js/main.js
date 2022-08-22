const playersItems = [];



function selectedItem(element){
    const playerName = (element.parentNode.children[0].innerText)

    const playerObj = {
        playerName: playerName,
    };
    

    console.log(playerObj)
    return playerName;
    


}




const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', () => {
    const perPlayerInput = document.getElementById('per-player');
    const perPlayer = parseInt(perPlayerInput.value);

    const playerExpensesInput = document.getElementById('player-expenses');
    const playerExpenses = playerExpensesInput.innerText;
    console.log(playerExpenses, perPlayer)
    
    

    playerExpensesInput.innerText = perPlayer;



    perPlayerInput.value= '';
    playerExpensesInput.value= '';


})




// 1: 00 class


















