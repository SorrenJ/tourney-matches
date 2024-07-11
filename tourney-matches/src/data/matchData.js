  // matchData.js
  // import matchData from '../data/matchData';
  import playerData from '../data/playerData';
  import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
  
  // props object passed to Match
  const matchData = [
    {
      matchNumber: 1,
      players: ["Disguised Lizard", "DrSpiteful"],
      winner: "DrSpiteful",
      scoreDifference: 1
    },
    // more matches below...

    {
      matchNumber: 2,
      players: ["Henrikarex", "Gamerhorse"],
      winner: "Henrikarex",
      scoreDifference: 2
    },
    {
      matchNumber: 3,
      players: ["IHasEyes", "Captain Slimy"],
      winner: "Captain Slimy",
      scoreDifference: 1
    },
    {
      matchNumber: 4,
      players: ["H3nr1k4", "DrSpiteful"],
      winner: "H3nr1k4",
      scoreDifference: 3
    },
    {
      matchNumber: 5,
      players: ["Henrikarex", "Captain Slimy"],
      winner: "Henrikarex",
      scoreDifference: 1
    },
    {
      matchNumber:6,
      players: ["Henrikarex", "H3nr1k4"],
      winner: undefined,
      scoreDifference: undefined
    }
  ];

  export default matchData;
