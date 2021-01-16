
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
    }
    
    
}

const score = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = score();

const playerName = 'echo';
const icon = 'echo.png';

const createPlayer = ({ playerName, icon }) => ({
    playerName,
    icon,
    setPlayerName (playerName) {
        this.playerName = playerName;
        return this;
    }
});

createPlayer({playerName: 'Jim', icon: 'ninja.jpg'})

const placeMarker = ({}) => ({
    
})
let turn = false;

const gameClick = document.querySelector('#gamearea').addEventListener('click', (e) => {
    let target = e.target;
    
    console.log(e)
    if(target.className == 'markplacement'){
        let y = target.id
        let divTarget = document.querySelector(`#${y}`);
        if(turn == false){
            let icon = document.createElement('i');
            icon.classList.add('fas', 'fa-skull-crossbones', 'fa-3x');
            icon.dataset.id = 'x';
            divTarget.appendChild(icon);
            turn = true;
        } 
        else if (turn == true){
            let icon = document.createElement('i')
            icon.classList.add('fas', 'fa-user-ninja', 'fa-3x')
            icon.dataset.id = 'o'
            divTarget.appendChild(icon);
            turn = false;
        }
    }
})
    