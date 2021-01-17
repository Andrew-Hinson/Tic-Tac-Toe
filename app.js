//need counter not in global scope (cause instructions) to move if chain for button select
const Gameboard = () => {
    
    const gamecontents = [] //prefilled gameboard, render to page
    const winConditions = {
        win1: [0,1,2],
        win2: [3,4,5],
        win3: [6,7,8],
        win4: [0,3,6],
        win5: [1,4,7],
        win6: [2,5,8],
        win7: [0,4,8],
        win8: [3,4,6]
    };
    let count = 0;
    return {count}
};
const createPlayer = (player, avatar, value, turn, markers) => {
    this.player = player
    this.avatar = avatar
    this.value = value
    this.turn = turn
    this.markers = []
    return {player, avatar, value, turn, markers}
};

(function() {
document.querySelector('body').addEventListener('click', (e) => {
    let target = e.target;
    console.log(e)
    //selects the player faction, disables the button and assigns values via the factory func
    if(target.localName == 'button'){
        const player1 = createPlayer('player1', target.id, 0, true)
        const noPress1 = document.querySelector(`#${target.id}`)
        noPress1.disabled = true;
        console.log({player1})
    } else if (target == 'delete') {
            const player2 = createPlayer('player2', target.id, 1,false)
            const noPress2 = document.querySelector(`#${target.id}`)
            noPress2.disabled = true;
            console.log({player2})
    } 
}

    // if(target.className == 'markplacement' && target.childNodes.length == 0){
    //     let y = target.id
    //     console.log(y)
    //     let divTarget = document.querySelector(`#${y}`);
    //     if(turn == false){
    //         let icon = document.createElement('i');
    //         icon.classList.add('fas', 'fa-skull-crossbones', 'fa-3x');
    //         icon.dataset.id = 'x';
    //         divTarget.appendChild(icon);
    //         turn = true;
    //     } 
    //     else if (turn == true){
    //         let icon = document.createElement('i')
    //         icon.classList.add('fas', 'fa-user-ninja', 'fa-3x')
    //         icon.dataset.id = 'o'
    //         divTarget.appendChild(icon);
    //         turn = false;
    //     }
    // }
    // })
)})();