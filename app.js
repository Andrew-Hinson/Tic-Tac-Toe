
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


const createUser = ({playerName, icon}) => ({
    playerName,
    icon,

    setPlayerName (playerName) {
        this.playerName = playerName;
        return this;
    }
});

