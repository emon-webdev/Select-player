const playersItems = [];
function display(selectPlayers) {
    if (selectPlayers.length <= 5) {
        document.getElementById('total-selected').innerText = selectPlayers.length
        const playerList = document.getElementById('player-list');
        playerList.innerText = '';
        for (player of selectPlayers) {
            const playerName = player.playerName;
            const li = document.createElement('li');
            
            li.innerText = playerName;
            playerList.appendChild(li)
        }
    
    }
    else {
        alert('You have five player selected')
        return;
    }

}

function selectedItem(element) {
    const playerName = (element.parentNode.children[0].innerText)
    const playerObj = {
        playerName: playerName,
    };
    playersItems.push(playerObj)
    display(playersItems)
}




const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', () => {
    const perPlayerInput = document.getElementById('per-player');
    const perPlayer = parseInt(perPlayerInput.value);

    const playerExpensesInput = document.getElementById('player-expenses');
    const playerExpenses = playerExpensesInput.innerText;
    console.log(playerExpenses, perPlayer)
    playerExpensesInput.innerText = perPlayer;

    perPlayerInput.value = '';
    playerExpensesInput.value = '';


})




// 1: 40 class


















