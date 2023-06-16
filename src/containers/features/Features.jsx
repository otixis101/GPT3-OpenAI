import { Feature } from '../../components';
import './features.css';

const FeaturesData = [
  {
    title : 'Improving end distrusts Instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia accusantium, impedit reiciendis ad inventore cumque qui! Aperiam, molestiae atque.'
  },
  {
    title : 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia accusantium, impedit reiciendis ad inventore cumque qui! Aperiam, molestiae atque.'
  },
  {
    title : 'Message or am Nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia accusantium, impedit reiciendis ad inventore cumque qui! Aperiam, molestiae atque.'
  },
  {
    title : 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia accusantium, impedit reiciendis ad inventore cumque qui! Aperiam, molestiae atque.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and you just Need to Realize It. Step into the Future Today and Make It Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__feautures-container">
        {FeaturesData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        )
        )}
      </div>
    </div>
  )
}

export default Features