import { createContext, useContext, useState } from 'react';

import { root__modals } from '../../data';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [modals, setModals] = useState({ showLoginModal: true });

  return (
    <Context.Provider
      value={{
        modals,
        setModals,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
