import React from 'react'

import './card.css';

const Card = ({ name, position, index }) => {
  return (
    <div class="fut-player-card">
      <div class="player-card-top">
        <div class="player-master-info">
          <div class="player-rating">
            <span>{index}</span>
          </div>
          <div class="player-position">
            <span>{position}</span>
          </div>
          <div class="player-nation">
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-dk" viewBox="0 0 512 512">
              <path fill="#c8102e" d="M0 0h512.1v512H0z" />
              <path fill="#fff" d="M144 0h73.1v512H144z" />
              <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
            </svg>

          </div>
          <div class="player-club">
            <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false" />
          </div>
        </div>
        <div class="player-picture">
          <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false" />

        </div>
      </div>
      <div class="player-card-bottom">
        <div class="player-info">
       
          <div class="player-name">
            <span>{name}</span>
          </div>
          
          <div class="player-features">
            <div class="player-features-col">
              <span>
                <div class="player-feature-value">97</div>
                <div class="player-feature-title">PAC</div>
              </span>
              <span>
                <div class="player-feature-value">95</div>
                <div class="player-feature-title">SHO</div>
              </span>
              <span>
                <div class="player-feature-value">94</div>
                <div class="player-feature-title">PAS</div>
              </span>
            </div>
            <div class="player-features-col">
              <span>
                <div class="player-feature-value">99</div>
                <div class="player-feature-title">DRI</div>
              </span>
              <span>
                <div class="player-feature-value">35</div>
                <div class="player-feature-title">DEF</div>
              </span>
              <span>
                <div class="player-feature-value">68</div>
                <div class="player-feature-title">PHY</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card