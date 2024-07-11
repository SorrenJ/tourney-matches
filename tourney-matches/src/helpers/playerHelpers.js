  // input: playerData
  export const preparePlayerData = (playerData) => {
    return Object.values(playerData); 
  }
  // output: [{player}, {player}]

 // input: playerDataArray, matchData
 export const addWinsToPlayers = (playerDataArray, matchData) => {
    return playerDataArray.map(player => { // loops through an array
      // Calculating the number of wins in the matchData
     // looking at one player and many matches
      const currentWins = matchData.reduce((accumulator, match) => {
        // Adds a win if the gamerTag matches
        if (match.winner === player.gamerTag) { //gamer tag is an array for players, match is another array looking for winner property
          return accumulator += 1; // the mumber of wins per player
        } else {
          return accumulator;
        }
      }, 0);

      // Assigns the value to the wins key
      player.wins = currentWins;

      return player // related to playerDataArray.map
    });
  }
  // output: [{player}, {player}] (each player having a win key and a numerical value)