import './mainLogo.css';
import Logo from './img/atom.svg'


function MainLogo() {
  return(
    <div className="header__logo logo">
      <img className="logo__img" src={Logo} />
    </div>
  );
}

export default MainLogo;