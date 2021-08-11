import React from 'react';
//import './App.css';
import { Postoverview } from './features/postoverview/Postoverview';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Spacer, IconButton, useColorMode, Divider, Input, Flex, Select } from '@chakra-ui/react';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Flex>
        <Box p="2">
          <Input placeholder="Search" size="md"/>
        </Box>
        <Box p="2">
          <Select>
            <option value="o1">O1</option>
            <option value="o2">O2</option>
          </Select>
        </Box>
        <Spacer />
        <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            onClick={ toggleColorMode }
          />
      </Flex>
      <Divider paddingTop="10px" />
        <Postoverview />
    </div>
  );
}

export default App;
