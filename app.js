//Creates the players and stores the value inside of Gameboard
const factionPicker = document.querySelector('#titlearea').addEventListener('click', (e) => {
    let updateSpan = document.querySelector('#h2span')
    let updateTitle = document.querySelector('#h2title')
    let target = e.target
    console.log(e)
    console.log(target)
    if(target.className == 'playerTeam' && Gameboard.count == 0){
        Gameboard.target = target.id;
        Gameboard.player1 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        Gameboard.count ++;
        Gameboard.turn = false;
        e.target.disabled = true;
        updateSpan.innerText = 'Player 2,'
    } else if(target.className == 'playerTeam' && Gameboard.count == 1){
        Gameboard.target = target.id;
        Gameboard.player2 = createPlayer(`${target.id}`,`${target.id}`,`${target.value}`, Gameboard.turn, [])
        e.target.disabled = true;
        Gameboard.gamestart = true;
        updateTitle.innerText = 'Player 1, Your move!'
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
            let newMarker = document.createElement('i');

            placement(); //figures out whose turn it is
            
            if(useMarker == 'o'){
                newMarker.classList.add('fas', 'fa-user-ninja', 'fa-3x');
                if(Gameboard.player1.avatar == 'ninja'){
                    Gameboard.player1.markers.push(condition);
                } else if(Gameboard.player1.avatar == 'pirate'){
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
   
    let useMarker; //lets placement of markers in gameLogic know which one to place-assigned by placement()
    //placement() alternates turns for players, updates useMarker, checks Gameboard Object player objects for turn == true
    let placement = (player) => {
        let updateTitle = document.querySelector('#h2title')
        if(Gameboard.player1.turn == true){
            if(Gameboard.player1.avatar == 'ninja'){
                useMarker = 'o';
            } else {
                useMarker = 'x';
            }
            updateTitle.innerText = 'Player 2, Your move!'
            Gameboard.player1.turn = false;
            Gameboard.player2.turn = true;
        } else if(Gameboard.player2.turn == true){
            if(Gameboard.player2.avatar == 'ninja'){
                useMarker = 'o';
            } else {
                useMarker = 'x';
            }
            updateTitle.innerText = 'Player 1, Your move!'
            Gameboard.player2.turn = false;
            Gameboard.player1.turn = true;
        }
    };
    return {useMarker,}
})()



const winConditions = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,3,4,6]

const isThereAWinnerYet = () => {
    
    let player1Arr = [2,1,0,7,8]; //a winning condition to compare playerArr to
    let testingArr = [1,0,2];
    let evaledArr = []
    let myFilter = (pArr, tester) => {  
    evaledArr = pArr.filter(num => tester.includes(num) === true)
    return evaledArr;  //"it goes in here"
    }
    myFilter(player1Arr, testingArr)

    if(evaledArr.length === 3 && testingArr === 3){
        if(testingArr.sort().join(',') === evaledArr.sort().join(',')){
            console.log('player has won');
        } else {
            console.log('nothin yet')
        }
    }
    return {evaledArr, testingArr, player1Arr}
   
}

















//map over win condition, use includes to see if player array contains number - map inside of map
//put number in new array
//if number is not in win condition, do not put number in new array
//.sort().join(',') win condition array and new array
//compare arrays



//sort win condition individually
//sort player array individually, compare at each click
//if longer than 3, map over and compare to win conditions again


// if(array1.sort().join(',')=== array2.markers.sort().join(',')){
//     alert('same members');
// }
// else alert('not a match');
//function arrayEquals(a, b) {
//     return Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }

// let wholeArr = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,3,4,6]
// let mytest = (arr) => {
//      //take values from this -> squirt into testArr,compare with player arr
//     let testArr = []; //a winning condition to compare playerArr to
//     let playerArr = [1,0,2]; //the players current moves

//     //gets a winning condition from main array, pushes to testArr and erases whatever is in testArr
//     testArr.push(arr.splice(0,3))

//     //tests whether or not both arrays are equal
//     if(testArr.sort().join(',') === playerArr.sort().join(',')){
//             console.log('player has won');
//         }   
//             else {
//                 console.log('nothin yet')
//             }
//     return {testArr, playerArr}
// }
//                 //
let myFilter = (pArr, tester) => {          //"if I don't find it"
    let passesFiltertest = pArr.filter(num => tester.includes(num) === true);
    return passesFiltertest;  //"it goes in here"
}
let player1Arr = [2,1,0,7,8]; //a winning condition to compare playerArr to
let testingArr = [1,0,2];

// const checkit = (arr, checkArr) => {
//     const works = arr.map((i) => {
//         checkArr.includes(i)
//     })
//     return works
// }