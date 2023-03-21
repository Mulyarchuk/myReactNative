import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from "react";



const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const formSubmit = () => {
    console.log(state);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}> 
      <ImageBackground source={require("../assets/back.png")} style={styles.image}>
        <View style={styles.containerForm}>
          <View style={styles.form}>
            <Text style={styles.title}>Регистрация</Text>
               <View>
               <TextInput
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        name: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.name}
                    style={styles.input}
                    placeholder="Name"
                  />
                </View>
                <View>
                <TextInput
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    style={styles.input}
                    placeholder="Email"
                  />
                </View>
                <View>
                  <TextInput 
                  onChangeText={value =>
                    setState(prevState => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  />
                </View>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={formSubmit}
                  >
                    <Text style={{ color: "#fff" }}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#1B4371",
                    }}
                  >
                    Уже есть аккаунт?
                    <Text >
                      Войти
                    </Text>
                  </Text>
                </View>
          
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    borderColor: `#E8E8E8`,
    backgroundColor: `#F6F6F6`,
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
    // marginBottom: 207,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    marginBottom: 32,
  },
  button: {
    marginTop: 43,
    gap: 16,
    // marginBottom: 75,
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
  },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 549,

  }
});
