/* task 1:
  - Make notes of your mental model for the problem (implicit & explicit rule)
    - Inputs: number (which represents how many blocks you have to build a valid structure)
    - Outputs: number (which represents the number of blocks leftover once a valid structure is built)
    - Rules:
      - Implicit:
        - total blocks needed for a layer is Math.pow(layer #, 2)
      - Explicit: 
        - first layer is a single block
        - every block must be supported by 4 blocks in a layer below it
          - a block can support more than one block above it
        - no gaps between blocks
  - Write a list of questions that aren't clear about the problem
  
  Task 2:
  - Examples and test cases
   - use the minimum blocks necessary to create a valid layer
   - minimum blocks required is 1
 
 Task 3: 
  - Data Structures
    - based on my understanding of the problem right now, I don't think I need any...
    
 Task 4:
  - Algorithm
    - GET total number of blocks
    - While total number of blocks is >= blocks required for level
      - subtract required blocks from total blocks
    - Return total blocks
  
  */

function calculateLeftoverBlocks(totalBlocks) {
  let level = 1;
  while ( totalBlocks >= (Math.pow(level, 2)) ) {
    totalBlocks -= Math.pow(level, 2);
    level += 1;
  }
  return totalBlocks;
}  
  
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true