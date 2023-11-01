const sudokuPuzzle = [
    [799529561,
         227287495,
          632743983,
           468258131,
            989847927,
             457075708,
              685163654,
               524553429,
                984792186]
];

const sudokuGrid = document.getElementById('sudoku-grid');
const resultText = document.getElementById('result');

for (let i = 0; i < 9; i++) {
    const row = document.createElement('td');
    for (let j = 0; j < 9; j++) {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        input.dataset.row = i;
        input.dataset.col = j;
        cell.appendChild(input);
        row.appendChild(cell);
    }

}

let td =  document.getElementById('sudoku-grid');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (typeof (td) != 'undefined' && sudokuPuzzle != sudokuPuzzle){
                console.log("wrong....")
            }
        }
    }







