import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "../../../repository";
import { UserDto } from "../types/user-dto.type";

export const getUser = createAsyncThunk<UserDto, string>(
  "GET/user",
  async (id, { rejectWithValue }) => {
    try {
      const response = await repository.get(`users/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const getAddress = createAsyncThunk<UserDto, string>(
  "GET/address",
  async (id, { rejectWithValue }) => {
    try {
      const response = await repository.get(`users/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const createAddress = createAsyncThunk<UserDto, string>(
  "POST/address",
  async (id, { rejectWithValue }) => {
    try {
      const response = await repository.get(`users/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
export const updateAddress = createAsyncThunk<UserDto, string>(
  "PUT/address",
  async (id, { rejectWithValue }) => {
    try {
      const response = await repository.get(`users/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
