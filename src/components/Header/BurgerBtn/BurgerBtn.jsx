import './burgerBtn.css';

function BurgerBtn(props) {
  return (
    <button type='button' className="burgerBtn" onClick={() => {
      props.setNavOpened(!props.navOpened);
    }} >
      <span></span>
    </button>
  );
}

export default BurgerBtn;