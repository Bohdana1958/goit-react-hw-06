import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      if (!state.contacts) {
        state.contacts = { items: [] };
      }
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      if (state.contacts && state.contacts.items) {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      }
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = persistReducer(persistConfig, contactsSlice.reducer);
