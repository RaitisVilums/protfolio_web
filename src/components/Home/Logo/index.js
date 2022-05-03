import './index.scss';
import RaitisV from '../../../assets/images/raitisv.jpg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={RaitisV} alt="Raitis" />
    </div>
  );
};

export default Logo;
