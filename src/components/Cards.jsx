import Card from './Card';

// images
import GrowTogether from '../assets/illustration-grow-together.svg';
import FlowingConversation from '../assets/illustration-flowing-conversation.svg';
import YourUsers from '../assets/illustration-your-users.svg';

const Cards = () => {
  return (
    <section className='cards'>
      <Card
        type='grow-together'
        img={GrowTogether}
        alt='Grow Together illustration'
        title='Grow Together'
        text='Generate meaningful discussions with
              your audience and build a strong, loyal
              community. Think of the insightful
              conversations you miss out on with a
              feedback form.' />
      <Card
        type='flowing-conversations'
        img={FlowingConversation}
        alt='Flowing Conversations illustration'
        title='Flowing Conversations'
        text="You wouldn't paginate a conversation
              in real life, so why do it online? Our
              threads have just-in-time loading for a
              more natural flow." />
      <Card
        type='your-users'
        img={YourUsers}
        alt='Your Users illustration'
        title='Your Users'
        text="It takes no time at all to integrate
              Huddle with your app's
              authentication solution. This means,
              once signed in to your app, your
              users can start chatting immediately." />
    </section>
  );
};

export default Cards;