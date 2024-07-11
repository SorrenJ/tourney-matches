// MatchList.js

import React from 'react';
import Match from './Match';

function MatchList(props) {

  //   const oneMatch = props.matchData[0];

  //   return (
  //     <section className="PlayerList MatchList">
  //       <h1>Match list</h1>
  //       <Match 
  //       players={oneMatch.players} 
  //       winner={oneMatch.winner} 
  //       scoreDifference={oneMatch.scoreDifference} />
  //     </section>
  //   );
  // }


  const matches = props.matchData.map((match) => {
    return (
      <Match
      key={match.matchNumber}
      players={match.players}
      winner={match.winner}
      scoreDifference={match.scoreDifference} 
      />
    );
  });
  
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );

}
export default MatchList;