# minesweeper-kata
Contains a basic setup for doing the minesweeper-kata.

### The minesweeper kata
The goal of this challenge is to implement the minesweeper game. If you haven't played it before, here is roughly how it works.

You're the mine sweeper and you want to find all the minds in the grid without making them explode. You first encounter a grid where everything is blank, when you click on a tile it either explodes or tell you how many mines are adjacent to this tile. This way you can figure out where the mines are an avoid them. When all non mine tiles have been clicked/uncovered, and no mine has exploded, you win.

Step 1: Make the mine map grid when, when a field does not have a mine it should contain a count of how many mines is adjacent to it. It should take dimensions as parameter, as well as a map of the mines (see the tests or resource).

Step 2: Render the grid, then add some interaction where the player can uncover tiles :)

Step 3: Create a random game generator.

## Resources
http://codingdojo.org/cgi-bin/index.pl?KataMinesweeper
https://en.wikipedia.org/wiki/Microsoft_Minesweeper
