const playersItems = [];
function display(selectPlayers, element) {
    if (selectPlayers.length <= 5) {
        document.getElementById('total-selected').innerText = selectPlayers.length
        const playerList = document.getElementById('player-list');
        playerList.innerText = '';
        let count = 1;
        for (player of selectPlayers) {

            const playerName = player.playerName;
            const li = document.createElement('li');

            li.innerHTML = `
            ${count}. ${playerName}
            `;
            playerList.appendChild(li)
            count++;
        }
        element.setAttribute('disabled', true)
    }
    else {
        alert('enough selected')
    }
}

function selectedItem(element) {
    const playerName = (element.parentNode.children[0].innerText)
    const playerObj = {
        playerName: playerName,
    };
    playersItems.push(playerObj)
    display(playersItems, element)
}

const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', () => {
    const totalSelectedPlayer = document.getElementById('total-selected').innerText;
    const totalSelectedPlayerValue = parseInt(totalSelectedPlayer);
    console.log(typeof totalSelectedPlayerValue)
    const perPlayerInput = document.getElementById('per-player');
    const perPlayer = parseInt(perPlayerInput.value);
    const playerExpensesInput = document.getElementById('player-expenses');
    const perPlayerCost = totalSelectedPlayerValue * perPlayer;
    if(isNaN(perPlayerCost)){
        alert('is not a number')
        return;
    }
    perPlayerInput.value= '';
    playerExpensesInput.innerText = perPlayerCost;
})


const totalCostBtn = document.getElementById('total-cost-btn');
totalCostBtn.addEventListener('click', function () {
    console.log('btn click')
    const managerField = document.getElementById('manager-field');
    const managerCost = parseInt(managerField.value);
    const coachField = document.getElementById('coach-field');
    const coachCost = parseInt(coachField.value);
    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpenses = parseInt(playerExpensesField.innerText);
    const totalCostCalculate = managerCost + coachCost + playerExpenses;
    if(isNaN(totalCostCalculate)){
        alert('is not a number')
        return;
    }
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = totalCostCalculate

    managerField.value = '';
    coachField.value = '';

})

















