import styled from 'styled-components';

export const Container = styled.div``;

export const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  max-height: 60vh;
  margin-top: 170px;
  transition: width 600ms ease;

  display: flex;
  justify-content: center;

  align-items: center;

  overflow: hidden;

  background: black;
  /* background: red; */

  color: #333;

  @media only screen and (max-width: 1350px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    border-radius: 27px 27px 0 0;
  }
  @media only screen and (min-width: 1350px) {
    top: 0;
    width: 4rem;
    height: 100vh;
    border-radius: 0 27px 27px 0;
    flex-direction: column;
    /* 
    :hover {
      width: 16rem;
    } */
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1350px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 22px; */
    height: 100%;
    /* min-width: 100%; */
    width: 100%;
    padding: 50px;
  }
`;

export const OptionList = styled.li`
  cursor: pointer;
  align-items: center;
  display: flex;
  /* transition: var(--transition-speed);
  display: flex;
  align-items: center; */

  /* position: relative;
  max-height: 1rem;
  z-index: 1;
  background: red;

  :hover {
    transition: var(--transition-speed);
    background: rgb(255, 242, 1, 0.05);
  } */

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 22px; */
    height: 100%;
    /* min-width: 100%; */
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    padding: 22px;
    height: 100%;
    width: 100%;

    :hover {
      background: var(--blue-900);
    }
  }
`;

export const Link = styled.a`
  /* display: flex;
  align-items: center;
  height: 2rem;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);

  :hover {
    filter: grayscale(0%) opacity(1);
    bottom: calc(100% + 12px);
    left: 43%;
    transform: translateX(5%);
    color: #f2c811;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 600px) {
    :hover {
      display: inline;
    }
  } */
`;

export const Text = styled.div`
  /* display: none; */
  /* font-size: 14px;
  white-space: nowrap;
  margin-left: 1rem;

  span {
    color: #333;
  }

  @media only screen and (min-width: 600px) {
    top: 0;
    width: 4rem;
    height: 100vh;
    :hover {
      width: 16rem;
    }
  } */
`;
