import possiblityImage from '../../assets/possibility.png';
import './possibility.css';

const Possiblity = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possiblityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi quidem nostrum inventore tempore a et nisi, unde molestias,
           necessitatibus, assumenda amet? Facere distinctio nisi sequi rerum magnam consectetur illum.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possiblity