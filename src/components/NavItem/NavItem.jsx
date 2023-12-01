import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className='nav__listItem'>
      <NavLink className='nav__listLink' to={props.path} onClick={() => {
        props.setNavOpened(props.navOpened);
      }}>{props.innerText}</NavLink>
    </li>
  );
}

export default NavItem;