import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { DEVELOPMENT_ENDPOINT } from "../constant";
import { RootState } from "../store";
import { Photo, PhotosState } from "../types";

const initialState: PhotosState = {
  photos: [],
  loading: false,
  error: "",
};

export const loadPhotos = createAsyncThunk("companies/load", async () => {
  const response = await fetch(`${DEVELOPMENT_ENDPOINT}/api/photos.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
});

const PhotosReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadPhotos.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(loadPhotos.fulfilled, (state, action) => {
    state.loading = false;
    state.photos = action.payload;
  });
  builder.addCase(loadPhotos.rejected, (state, action) => {
    state.loading = false;
    state.error =
      "Error, something went wrong. Contact support if problem persis";
  });
});

// Selectors
export const getPhotos = (state: RootState): Photo[] => state.photos.photos;
export const getLoading = (state: RootState): boolean => state.photos.loading;
export const getError = (state: RootState): string => state.photos.error;

export default PhotosReducer;
