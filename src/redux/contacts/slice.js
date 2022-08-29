import { createSlice } from '@reduxjs/toolkit/';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.items = [action.payload, ...state.items];
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contactList',
  storage,
  whitelist: ['items'],
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContactsValue = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
