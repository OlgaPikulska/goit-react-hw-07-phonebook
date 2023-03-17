import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
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
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
        },

    }
})

export const contactsReducer = contactsSlice.reducer;