import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Link
        to={destination}
        style={{
          backgroundColor: '#0369a1',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <BsArrowLeft style={{ fontSize: '24px' }} />
      </Link>
    </div>
  );
};

export default BackButton;
