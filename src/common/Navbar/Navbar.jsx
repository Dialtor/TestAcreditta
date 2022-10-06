import React, { useState } from 'react';
import { Link, NavLink, Router } from 'react-router-dom';
import styled from 'styled-components'
import { BurguerButton } from '../BurguerButton';

const Navbar = () => {

	const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }


  return (
    <>
      <NavContainer>
        <h2>Test <span>Acreditta</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>

          <Link onClick={()=> {clicked ? handleClick() : null}} to="/" >Inicio</Link>
          <Link onClick={()=> {clicked ? handleClick() : null}} to="/marsrover" >Mars Rover</Link>
          <Link onClick={()=> {clicked ? handleClick() : null}} to="/wer" >Orbiting Elements </Link>
          <Link onClick={()=> {clicked ? handleClick() : null}} to="/asteroids" >Asteroids NeoWs</Link>
        </div>
        <div className='burguer'>
				<BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar;


const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
	width: 100%;
	height: 80px;
  backdrop-filter: blur(15px);
  /* padding: .2rem; */
  position: fixed;
  top: 0;
  background-color: #201e1e2d;
  box-shadow: 0px 4px 8px rgba(41, 40, 39, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
		font-size: 3rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 860px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.4rem;
        color: white;
        display: inline;
        transition: 0.2s all ease;
      }
      a:hover {
        color: #11998e;
      }
      display: block;
    }
  }
  .links.active{
    width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: red; */
    display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;


    top: 80px;
    left: 0;
    right: 0;
    text-align: center;
		z-index: 2;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 860px){
      display: none;

    }
  }
`

const BgDiv = styled.div`
  background-color: #221a1ac6;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;
  &.active{

    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
  }
`