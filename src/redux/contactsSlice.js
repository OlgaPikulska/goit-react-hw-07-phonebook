import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operations";

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
            console.log("Fulfilled, data should be in state")
            console.log(state.items)
            console.log(action.payload)
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,

        [addContact.fulfilled](state, action) {
            console.log(action.payload);
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

    }
})

export const contactsReducer = contactsSlice.reducer;