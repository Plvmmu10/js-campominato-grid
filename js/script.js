const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click',play);


// Drawing cell
function drawCell (i, numCell){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `calc(100% / ${numCell})`;
    cell.style.height = cell.style.width;
    
    cell.innerHTML = i;
    return cell;
}





// Game function
function play(){

    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    // bombs const
    const numBombs= 16;
    // take level difficulty
    const difficulty = document.getElementById('difficultySelect').value;
    console.log(difficulty);

    // change cell numbers for each difficulty
    let cellNumbers;

    switch (difficulty) {
        case 'easy':
            cellNumbers = 100;
            break;
        case 'medium':
            cellNumbers = 81;
            break;
        case 'hard':
            cellNumbers = 49;
            break;    
    };

    

    // choosing how many cell there should be for each row
    let cellPerRow = Math.sqrt(cellNumbers);

    let bombsCounter = genBombs(numBombs,cellNumbers);
    
    
    for (i = 0; i < cellNumbers; i++){
        const cell = drawCell(i, cellPerRow);
        cell.addEventListener('click', function(){
            // Stucked here, need to know how to select bombsCounter array element and cell i
            if (bombsCounter === cellNumbers){
                cell.classList.add('bomb')
            }else{
                cell.classList.add('safe')
            }
        });
        
        playground.appendChild(cell);
    }
    
    console.log(bombsCounter);
}


// Function to generate bombs
function genBombs(numBombs, cellNumbers){
    const bombs = [];
    while (bombs.length < numBombs) {
       const bomb = rndNumber (1, cellNumbers)
        if (bombs.indexOf(bomb) === -1){
            bombs.push(bomb);
        }
    }
    return bombs;
}
