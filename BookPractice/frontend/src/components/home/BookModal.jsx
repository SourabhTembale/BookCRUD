import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: '600px',
          maxWidth: '100%',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <AiOutlineClose
          style={{
            position: 'absolute',
            right: '24px',
            top: '24px',
            fontSize: '24px',
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClose}
        />
        <h2 style={{
          width: 'fit-content',
          padding: '4px 8px',
          backgroundColor: 'rgba(255, 99, 71, 0.5)', // Adjust opacity if needed
          borderRadius: '8px',
        }}>
          {book.publishYear}
        </h2>
        <h4 style={{ margin: '8px 0', color: 'gray' }}>{book._id}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PiBookOpenTextLight style={{ color: 'red', fontSize: '24px' }} />
          <h2 style={{ margin: '8px 0' }}>{book.title}</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BiUserCircle style={{ color: 'red', fontSize: '24px' }} />
          <h2 style={{ margin: '8px 0' }}>{book.author}</h2>
        </div>
        <p style={{ marginTop: '16px' }}>Anything You want to show</p>
        <p style={{ margin: '8px 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
