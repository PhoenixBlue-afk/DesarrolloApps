import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, {
  useState
} from "react";

import { COLORS } from "../constants";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import { addPlace } from "../store/items.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const NewItemScreen = ({ navigation
  , route 

}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(route, "Nueva Direccion");
  }, [route]);

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title, image
      , location
      ));
    navigation.navigate("Lista de productos");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre del Producto</Text>
        <View style={styles.input}>
        <TextInput
          value={title}
          onChangeText={handleTitleChange}
        />

        </View >
        <ImageSelector onImage={setImage} />
        <LocationSelector
          onLocation={setLocation}
          mapLocation={route?.params?.mapLocation}
        />
        <Button
          title="Guardar Producto en la lista"
          color={COLORS.SALMON}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
    backgroundColor:COLORS.BEIGE_CLARO ,
  },
});

export default NewItemScreen;