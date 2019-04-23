import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const defaultMessages = {
  en: {
    'akarata.foo': 'Halo akarata!'
  }
}

function Main () {
  const locale = 'en';
  return (
    <IntlProvider locale={locale} key={locale} messages={defaultMessages[locale]}>
      {React.Children.only(<App />)}
    </IntlProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
