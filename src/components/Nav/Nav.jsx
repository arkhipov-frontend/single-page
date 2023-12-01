import './nav.css';
import NavItem from '../NavItem/NavItem';


function Nav(props) {
  const navItems = [
    { 
      id: 1,
      innerText: "about Me",
      path: "lorem",
    },
    { 
      id: 2,
      innerText: "posts",
      path: "posts",
    }, {
      id: 3,
      innerText: "dialogs",
      path: "/dialogs",
    },{
      id: 4,
      innerText: "precedents",
      path: "/precedents",
    },{
      id: 5,
      innerText: "experiments",
      path: "/experiments",
    }
  ]

  return (
    <nav className={`nav header__nav ${props.navOpened ? 'header__navOpened' : ''}`} onClick={() => {
      props.setNavOpened(!props.navOpened);
    }}>
      <ul className="nav__list" onClick={e => e.stopPropagation()}>
        {navItems.map((element) => <NavItem innerText={element.innerText} path={element.path} setNavOpened={props.setNavOpened} key={element.id} />)}
      </ul>
    </nav>
  );
}

export default Nav;