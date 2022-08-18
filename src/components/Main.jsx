import HuddleImg from '../assets/illustration-mockups.svg'

const Main = () => {
  return (
    <div className='main'>
      <div className="main__content">
        <h1 className='main-title center start poppins w-600 dark-cyan'>
          Build The Community Your Fans Will Love
        </h1>
        <p className='main-text center start open-sans w-400 dark-cyan'>
          Huddle re-imagines the way we build
          communities. You have a voice, but so
          does your audience. Create connections
          with your users as you engage in
          genuine discussion.
        </p>
        <div className='main__btn-container'>
          <button
            type='button'
            className='main__btn main__btn-text open-sans w-700 center white'>
              Get Started For Free
          </button>
        </div>
      </div>

      <div className='main__img-container'>
        <img
          src={HuddleImg}
          alt='mockups'
          className='main__img' />
      </div>
    </div>
  );
};

export default Main;