import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
    console.log("is pending")
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            console.log("Fulfilled fetch, data should be in state")
            console.log("Fulfilled fetch", state.items)
            console.log("Fulfilled fetch", action.payload)
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,

        [addContact.fulfilled](state, action) {
            console.log("Fulfilled add", action.payload);
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,

        [deleteContact.fulfilled](state, action) {
            console.log("Fulfilled delete", action.payload);
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1)
        },
    }
})

export const contactsReducer = contactsSlice.reducer;