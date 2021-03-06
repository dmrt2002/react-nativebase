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
    const {
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

const Home = () => {
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
          backgroundColor: colorMode === "dark" ? "#000000" : "#FCFCFC",
        }}
      >
        <Center height={"2xl"}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <NavLink to="/register">
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
            </NavLink>
          </HStack>
        </VStack>
        </Center>
        ;
      </View>
    </NativeBaseProvider>
  );
};

export default Home;
