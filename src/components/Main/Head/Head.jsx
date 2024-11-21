
import { useContext} from 'react'
import { EmailContext } from '../../../context/EmailContext';

function UserEmail() {
  const email = useContext(EmailContext);

  return (
    <div className='head'>
      <h2>Mail User en Head</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserEmail;
