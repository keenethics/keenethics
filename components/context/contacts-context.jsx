import React from 'react';

// eslint-disable-next-line import/no-mutable-exports
let ContactUsContext;
// eslint-disable-next-line no-multi-assign
const { Provider, Consumer } = (ContactUsContext = React.createContext());

export {
  ContactUsContext,
  Provider as ContactsProvider,
  Consumer as ContactsConsumer,
};
