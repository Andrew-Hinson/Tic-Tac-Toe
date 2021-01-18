//Creates the players and stores the value inside of Gameboard
const factionPicker = document.querySelector('#titlearea').addEventListener('click', (e) => {
    let target = e.target
    console.log(e)
    console.log(target)
    if(target.className == 'playerTeam' && Gameboard.count == 0){
        Gameboard.target = target.id;
        Gameboard.player1 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        Gameboard.count ++;
        Gameboard.turn = false;
        e.target.disabled = true;
    } else if(target.className == 'playerTeam' && Gameboard.count == 1){
        Gameboard.target = target.id;
        Gameboard.player2 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        e.target.disabled = true;
        Gameboard.gamestart = true;
    }
})

const Gameboard = {
    player1: {},
    player2: {},
    target: '',
    turn: true,
    count: 0,
    gamestart: false,
    gamecontents: [],
    winConditions: {
        win1: [0,1,2],
        win2: [3,4,5],
        win3: [6,7,8],
        win4: [0,3,6],
        win5: [1,4,7],
        win6: [2,5,8],
        win7: [0,4,8],
        win8: [3,4,6]
    },   
}
//factory
const createPlayer = (player, avatar, value, turn, markers) => {
    this.player = player
    this.avatar = avatar
    this.value = value
    this.turn = turn
    this.markers = []
    return {player, avatar, value, turn, markers}
};



const gameLogic = (() => {
    //creates markers, doesnt fire till Gameboard.gamestart == true, pushes values to objects
    const markerPlacement = document.querySelector('.gridcontainer').addEventListener('click', (e) => {
        let target = e.target
        console.log(e)
        console.log(target)
        if(target.className == 'markplacement' && target.childNodes.length == 0 && Gameboard.gamestart == true){
            let y = target.id
            let divToAppend = document.querySelector(`#${y}`);
            let condition = parseInt(target.dataset.id)
            placement();
            let newMarker = document.createElement('i');
            if(useMarker == 'o'){
                newMarker.classList.add('fas', 'fa-user-ninja', 'fa-3x');
                if(Gameboard.player1.avatar == 'ninja'){
                    Gameboard.player1.markers.push(condition);
                } else {
                    Gameboard.player1.markers.push(condition);
                }
            }
            if(useMarker == 'x'){
                newMarker.classList.add('fas', 'fa-skull-crossbones', 'fa-3x')
                if(Gameboard.player2.avatar == 'ninja'){
                    Gameboard.player2.markers.push(condition);
                } else {
                    Gameboard.player2.markers.push(condition);
                }
            }
            divToAppend.appendChild(newMarker)
        }
    });
    
    let useMarker;
    //alternates turns for players, updates useMarker
    let placement = (player) => {
        if(Gameboard.player1.turn == true){
            if(Gameboard.player1.avatar == 'ninja'){
                useMarker = 'o';
            } else {
                useMarker = 'x';
            }
            Gameboard.player1.turn = false;
            Gameboard.player2.turn = true;
        } else if(Gameboard.player2.turn == true){
            if(Gameboard.player2.avatar == 'ninja'){
                useMarker = 'o';
            } else {
                useMarker = 'x';
            }
            Gameboard.player2.turn = false;
            Gameboard.player1.turn = true;
        }
    };
    return {useMarker,}
})()



//"fas fa-skull-crossbones fa-3x"
//"fas fa-user-ninja fa-3x"