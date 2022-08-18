import Logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <img
        src={Logo}
        alt='Huddle'
        className='nav__img' />
      <button
        type='button'
        className='nav__btn nav__btn-text dark-cyan open-sans w-700'>
          Try It Free
      </button>
    </nav>
  );
};

export default Nav;