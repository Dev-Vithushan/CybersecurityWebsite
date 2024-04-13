import React from 'react';
import { useHistory } from 'react-router-dom';

const ButtonRedirect = () => {
  const history = useHistory();

  const handleClick = () => {
    // Replace '/target-page' with the desired URL to redirect to
    history.push('/target-page');
  };

  return (
    <button onClick={handleClick}>
      Click me to redirect
    </button>
  );
};

export default ButtonRedirect;
