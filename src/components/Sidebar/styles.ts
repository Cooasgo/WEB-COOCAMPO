import styled from 'styled-components';

export const Container = styled.div``;

export const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  max-height: 80vh;
  margin-top: 80px;
  transition: width 600ms ease;

  overflow: hidden;
  border-right: solid 1px red;
  border-radius: 0 27px 27px 0;
  background: blue;
  color: #333;

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 4rem;
    height: 100vh;

    /* :hover {
      width: 16rem;
    } */
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const OptionList = styled.li`
  z-index: 1;
  background: red;
  transition: var(--transition-speed);

  /* :last-child {
    margin-top: auto;
    border-top: solid 2px rgba(150, 156, 186, 0.2);
  } */

  /* :hover {
    transition: var(--transition-speed);
    background: rgb(255, 242, 1, 0.05);
  } */
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
  } */

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }

  /* @media only screen and (min-width: 600px) {
    :hover {
      display: inline;
    }
  } */
`;

export const Text = styled.div`
  font-size: 14px;
  /* display: none; */
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
  }
`;
