import './LogoStyle.scss';
import img from '../../../assets/images/img-m.svg';


const Logo = () => {

  return (
   <div className="logo-container">
    <img src={img} alt="LoGo" className="solid-logo" />
   </div>
  )
}

export default Logo