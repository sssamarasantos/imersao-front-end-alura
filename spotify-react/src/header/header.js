import React from 'react';
import './header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Header = () => {
  return (
    <nav class="header__navigation">
      <div class="navigation">
        <button class="arrow-left">
          <img src={smallLeft} alt="seta esquerda" />
        </button>
        <button class="arrow-right">
          <img src={smallRight} alt="seta direita" />
        </button>
      </div>

      <div class="header__search">
        <img src={search} alt="" />
        <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
      </div>

      <div class="header__login">
        <button class="subscribe">Inscrever-se</button>
        <button class="login">Entrar</button>
      </div>
    </nav>
  );
}

export default Header;