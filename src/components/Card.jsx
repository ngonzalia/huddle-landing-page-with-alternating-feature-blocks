const Card = (props) => {
  return (
    <div className={`card card--${props.type}`}>
      <div className='card__img-container'>
        <img
          src={props.img}
          alt={props.alt}
          className={`card__img  card__img--${props.type}`} />
      </div>
      <div className={`card__content card__content--${props.type}`}>
        <h2 className='card-title poppins w-600 center start-t dark-cyan'>
          {props.title}
        </h2>
        <p className='card-text open-sans w-400 center start-t grayish-blue'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;