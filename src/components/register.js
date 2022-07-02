import React, { useEffect, useState } from "react";
import { useColorMode } from "native-base";
import { MoonIcon, SunIcon, } from "native-base";
import { NavLink } from "react-router-dom";
import {
  NativeBaseProvider,
  AspectRatio,
  Box,
  ZStack,
  VStack,
  Text,
  Heading,
  Image,
  Center,
  Button,
  FormControl, Input, Link, HStack
} from "native-base";
import { View } from "react-native-web";
import useStore from "../store";

function UseColorMode() {
    const toggleDarkMode =  useStore((state) => state.toggleMode)
    const dark = useStore((state) => state.darkMode)
    let {
      colorMode,
      toggleColorMode
    } = useColorMode();

    useEffect(() => {
        console.log(dark)
        if(dark === true) {
            colorMode = "dark"
        }
    }, [])

    return (
        <View _text={{ textAlign: "center"}} style={{ padding: '12px',  backgroundColor: dark === true ? "#000000" : "#FCFCFC"}}>
              {dark == true ? 
              (<MoonIcon size={"40.0"} onClick={() => {toggleColorMode(); toggleDarkMode();}} color="#FCFCFC" />) :
              (<SunIcon size={"40.0"} onClick={() => {toggleColorMode(); toggleDarkMode();}}  />)
            }
        </View>
      );
  }

const Register = () => {
  const toggleDarkMode = useStore((state) => state.toggleMode);
  const dark = useStore((state) => state.darkMode);
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    console.log(dark)
    if (dark) {
      console.log("dark from home");
      setColorMode("dark");
    } else {
      console.log("light from home");
      setColorMode("light");
    }
  },[dark]);

  return (
    <NativeBaseProvider>
      <UseColorMode />
      <View
        style={{
          width: "100vw",
          height: "92vh",
          backgroundColor: dark === true ? "#000000" : "#FCFCFC",
        }}
      >
        <Center height={"2xl"}>
        <Heading size="lg" color={dark === true ? "white" : "black"} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color={dark === true ? "white" : "black"} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input color={dark === true ? 'white' : 'black'} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input color={dark === true ? 'white' : 'black'}  type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input color={dark === true ? 'white' : 'black'}  type="password" />
          </FormControl>
          <NavLink to="/login">
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
          </NavLink>
        </VStack>
        </Center>
        ;
      </View>
    </NativeBaseProvider>
  );
};

export default Register;