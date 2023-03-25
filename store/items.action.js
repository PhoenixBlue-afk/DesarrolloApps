import * as FileSystem from "expo-file-system";

import { fetchAddress, insertAddress } from "../db";

import Map from "../constants/Map";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const LOAD_PRODUCT = "LOAD_PRODUCT"


export const addPlace = (title, image, location) => {
    return async (dispatch) => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${Map.API_KEY}`
      );

      if (!response.ok)
      throw new Error("No se ha podido comunicar con Google Mas API");

    const resData = await response.json();

    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas"
      );
      
      const address = resData.results[0].formatted_address;

      const fileName = image.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;

      try {
        FileSystem.moveAsync({
          from: image,
          to: Path,
        });
        const result = await insertAddress(title, Path, address, location.lat, location.lng)
        console.log(result)
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({
            type: ADD_PRODUCT,
            payload: {
              title,
              image: Path,
              address,
              lat: location.lat,
              lng: location.lng,
            },
          });
    }
}

export const loadAddress = () => {
  return async (dispatch)=>{
    try{
      const result=await fetchAddress();
      dispatch({type:LOAD_PRODUCT, products: result.rows._array})
    }catch (error){
      throw error
    }
  }
}


