import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the Future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-links'>
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem, ipsum dolor sit amet consectetur Address,<br /> All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <ul>
            <li>Overrun</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <ul>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <ul>
            <li>aisdsn dfife address</li>
            <li>234 705 2323</li>
            <li>info@otixis101@mail.com</li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@2023 GPT-3. All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer