import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css'

const Menu = () => (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt3">What is GPT3</a>
    </li>
    <li>
      <a href="#possibility">OpenAI</a>
    </li>
    <li>
      <a href="#features">Case Studies</a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
  </>
)

const Navbar = () => {

  const [getToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="gpt3__navbar-links_container">
          <Menu />
        </ul>

        <div className="gpt3__navbar-sign">

          <button className='btn__cta btn__unset' type='button'>Sign In</button>
          <button className='btn__cta btn__solid' type='button'>Sign Up</button>
          <div className="gpt3__navbar-menu">
            {
            getToggleMenu ? 
            <RiCloseLine color='#fff' size={27}  onClick={() => setToggleMenu(false)} />
            : 
            <RiMenu3Line color='#fff' size={27}  onClick={() => setToggleMenu(true)} />
            }
            {
              getToggleMenu && (
                <div className='gpt3__navbar-menu_container slide-up'>
                  <ul className="gpt3__navbar-menu_container-links">
                    <Menu />
                    <div className="gpt3__navbar-menu_container-links-sign">
                      <button className='btn__cta btn__unset' type='button'>Sign In</button>
                      <button className='btn__cta btn__solid' type='button'>Sign Up</button>
                    </div>
                  </ul>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar