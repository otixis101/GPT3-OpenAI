import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature  title={'What is GPT-3'} 
        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur rerum officia praesentium ad asperiores id consequuntur qui, ratione tempora dolores sit dicta voluptatum mollitia reiciendis illo doloribus laboriosam accusamus.'}
         />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibiilties are beyond your Imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature  title={'ChatBots'} 
        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur rerum officia praesentium ad asperiores id consequuntur qui, ratione tempora dolores sit dicta voluptatum mollitia reiciendis illo doloribus laboriosam accusamus.'}
         />
        <Feature  title={'KnowledgeBase'} 
        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur rerum officia praesentium ad asperiores id consequuntur qui, ratione tempora dolores sit dicta voluptatum mollitia reiciendis illo doloribus laboriosam accusamus.'}
         />
        <Feature  title={'Education'} 
        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tenetur rerum officia praesentium ad asperiores id consequuntur qui, ratione tempora dolores sit dicta voluptatum mollitia reiciendis illo doloribus laboriosam accusamus.'}
         />
      </div>
    </div>
  )
}

export default WhatGPT3