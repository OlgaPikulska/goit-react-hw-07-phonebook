import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64140e9eebce1f9d8c5df603.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        console.log(response);
        return response
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", { contact });
        console.log(response)
        return response
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})