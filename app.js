//Creates the players and stores the value inside of Gameboard
const factionPicker = document.querySelector('#titlearea').addEventListener('click', (e) => {
    let updateTitle = document.querySelector('#h2title')
    let target = e.target
    if(target.className == 'playerTeam' && Gameboard.count == 0){
        Gameboard.target = target.id;
        Gameboard.player1 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        Gameboard.count ++;
        Gameboard.turn = false;
        e.target.disabled = true;
        updateTitle.innerText = 'Player 2, Choose your side!'
    } else if(target.className == 'playerTeam' && Gameboard.count == 1){
        Gameboard.target = target.id;
        Gameboard.player2 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        e.target.disabled = true;
        Gameboard.gamestart = true;
        Gameboard.turn = true
        updateTitle.innerText = 'Player 1, Your move!'
    }   
});

const Gameboard = {
    player1: {},
    player2: {},
    target: '',
    turn: true,
    count: 0,
    gamestart: false,
    maxplays: 0,
    gamewon: false, 
    wins: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[3,4,6],[2,4,6]]
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
    let updateTitle = document.querySelector('#h2title')
    const markerPlacement = document.querySelector('#gameParent').addEventListener('click', (e) => {
        let target = e.target
        let condition = parseInt(target.dataset.id)
        let newMarker = document.createElement('i');
        let updateTitle = document.querySelector('#h2title')
    
        let reset = () => {
                updateTitle.innerText = 'Player 1, Choose your side!'
                let buttons = document.querySelectorAll('button')
                let gridSquares = document.querySelectorAll('.markplacement')
                buttons.forEach(button => button.disabled = false)
                gridSquares.forEach((square) => square.innerHTML = '')
                Gameboard.player1 = {}
                Gameboard.player2 = {}
                Gameboard.target = ''
                Gameboard.turn = true
                Gameboard.count = 0
                Gameboard.gamestart =false
                Gameboard.maxplays = 0
                Gameboard.gamewon = false
        };

        let placement = () => {
            if(Gameboard.turn == true){
                Gameboard.player1.markers.push(condition);
                Gameboard.turn = false
                updateTitle.innerText = 'Player 2, Your move!'
                if(Gameboard.player1.avatar == 'ninja'){
                    newMarker.classList.add('fas', 'fa-user-ninja', 'fa-3x') 
                } else if(Gameboard.player1.avatar == 'pirate'){
                    newMarker.classList.add('fas', 'fa-skull-crossbones', 'fa-3x')
                }
            } else if(Gameboard.turn == false){
                Gameboard.player2.markers.push(condition);
                Gameboard.turn = true
                updateTitle.innerText = 'Player 1, Your move!'
                if(Gameboard.player2.avatar == 'ninja'){
                    newMarker.classList.add('fas', 'fa-user-ninja', 'fa-3x')
                } else if(Gameboard.player2.avatar == 'pirate'){
                    newMarker.classList.add('fas', 'fa-skull-crossbones', 'fa-3x')
                }
            }
        };

        if(target.className == 'markplacement' && target.childNodes.length == 0 && Gameboard.gamestart == true && Gameboard.gamewon == false){
            let y = target.id
            let divToAppend = document.querySelector(`#${y}`);
            placement(); 
            evaluateScore(Gameboard.player1.markers) 
            evaluateScore(Gameboard.player2.markers)
            divToAppend.appendChild(newMarker)
            scoreUpdater()
        }
        if(target.id == 'reset'){
            reset()
        }
    });
       
    const evaluateScore = (playerArr) => {
        
        let gameWinVals = Gameboard.wins.map(miniArr => miniArr) //to keep wins permanant through each iteration
        let winConditions = gameWinVals
        let evaledArr = [];
        let testArray = [];
        //determins if the win exists in the players array
        let myFilter = (pArr, tester) => {  
                evaledArr = pArr.filter(num => tester.includes(num) === true)
            if (evaledArr.length === 3){
                Gameboard.gamewon = true;
            }
        }
        let findWin = () => {
            for(let i = 0; i <= 8; i++){
                myFilter(playerArr, winConditions[i])
            }
        }
        let determineTie = () => {
            if (playerArr.length === 5 && Gameboard.gamewon == false){
                updateTitle.innerText = 'Tie Game! Try Again!'
            }
        }
        findWin()
        determineTie()
    };

    const scoreUpdater = () => {
        document.querySelector('#gamearea')
        if(Gameboard.turn == false && Gameboard.gamewon == true){
            updateTitle.innerText = 'Player 1 Wins!';
        } else if(Gameboard.turn == true && Gameboard.gamewon == true){
            updateTitle.innerText = 'Player 2 Wins!';
        }
    }
})()
