import React from 'react';
//import './App.css';
import {Card} from './features/card/Card';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Wrap, WrapItem, Box, Spacer, IconButton, useColorMode, Divider, Input, Flex, Select } from '@chakra-ui/react';



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
        <Box>
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound="true"
            size="lg"
            onClick={ toggleColorMode }
          />
        </Box>
      </Flex>
      <Divider paddingTop="10px" />
      <Wrap>
        <WrapItem>
          <Card/>
        </WrapItem>
        <WrapItem>
          <Card/>
        </WrapItem>
        <WrapItem>
          <Card/>
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default App;
