import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, loadPhotos } from "../redux/photoReducer";
import { AppDispatch } from "../store";
import { Photo } from "../types";

interface Returns {
  photos: Photo[];
}

export const usePhotos = (): Returns => {
  const dispatch = useDispatch<AppDispatch>();
  const photoList = useSelector(getPhotos);

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return { photos: photoList };
};
