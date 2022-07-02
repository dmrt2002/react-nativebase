import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, AspectRatio, Box, ZStack, VStack, Text, Pressable, Image, Center, Button } from 'native-base';
import Home from "./components/Home";
import Register from './components/register'
import { extendTheme } from 'native-base';
const newColorTheme = {
  light: {
    bg: '#FCFCFC',
    text: '#0000',
    400: '#EBEEF5',
  },
  dark: {
    bg: '#000000',
    text: '#FCFCFC',
    400:'#454647'
  }
};
const theme = extendTheme({ colors: newColorTheme });
function App() {
  return (
    <Router>
      <NativeBaseProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/login" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </div>
      </NativeBaseProvider>
    </Router>
  );
}

export default App;