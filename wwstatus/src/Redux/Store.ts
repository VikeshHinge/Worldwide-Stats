import {legacy_createStore, compose} from 'redux';  

import { ContactReducer } from './Contact.Redux/Contactreducer';

declare global {
      interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      }
    }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const Store = legacy_createStore(ContactReducer,composeEnhancer())


