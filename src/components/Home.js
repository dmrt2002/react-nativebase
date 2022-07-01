import React from 'react';
import { NativeBaseProvider, AspectRatio, Box, ZStack, VStack, Text, Pressable, Image, Center, Button } from 'native-base';
import { extendTheme } from 'native-base';
import { useColorMode } from "native-base";
const newColorTheme = {
  light: {
    bg: '#FCFCFC',
    text: '#0000',
    400: '#EBEEF5',
  },
  dark: {
    bg: '#0000',
    text: '#FCFCFC',
    400:'#454647'
  }
};
const theme = extendTheme({ colors: newColorTheme });
function UseColorMode() {
    const {
      colorMode,
      toggleColorMode
    } = useColorMode();
    return <Center>
        <Box p="4" flex="1" maxW="300" w="100%" bg={colorMode === "dark" ? "dark.bg" : "light.text"}>
          <Text fontSize="lg" color={colorMode == "dark" ? "dark.text" : "light.text"} display="flex" mb="20">
            The active color mode is{" "}
            <Text bold fontSize="lg">
              {colorMode}
            </Text>
          </Text>
          <Button onPress={toggleColorMode}>Toggle</Button>
        </Box>
      </Center>;
  }
  
  const Home = () => {
    return <NativeBaseProvider>
        <UseColorMode />
      </NativeBaseProvider>;
  };

export default Home;