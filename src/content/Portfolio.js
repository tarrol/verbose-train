import React from 'react';

function Portfolio() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>J.A.T.E</h2>
          <a href='https://fictional-octo-memory.herokuapp.com/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/tarrol/fictional-octo-memory' target="_blank">Link to Github Repo</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>Connect-4</h2>
          <a href='https://shielded-beyond-66940.herokuapp.com/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/tarrol/potential-disco' target="_blank">Link to Github Repo</a>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>Weather App</h2>
          <a href='https://tarrol.github.io/fluffy-octo-engine/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/tarrol/fluffy-octo-engine' target="_blank">Link to Link to Github Repo</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>JS Quiz Game</h2>
          <a href='https://tarrol.github.io/super-octo-memory/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/tarrol/super-octo-memory' target="_blank">Link to Github Repo</a>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>Board and Booze</h2>
          <a href='https://sdanimc.github.io/shire-board-game/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/sdanimc/shire-board-game/tree/main' target="_blank">Link to Github Repo</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px', marginRight: '20px', textAlign: 'center' }}>
          <h2>HTML/CSS Portfolio</h2>
          <a href='https://tarrol.github.io/scaling-enigma/' target="_blank">Link to Deployed App</a>
          <a href='https://github.com/tarrol/scaling-enigma' target="_blank">Link to Github Repo</a>
        </div>
      </div>
    </>
  )
}

export default Portfolio