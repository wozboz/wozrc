import {
    Box,
    Flex,
    IconButton,
    Spacer,
    Input,
    Select,
    useColorMode,
    Divider
  } from "@chakra-ui/react";
  import { FaMoon, FaSun } from 'react-icons/fa';

export function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box>
        <Flex alignItems={'center'} paddingEnd="10px">
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
        <Divider />
        </Box>

    )
}
