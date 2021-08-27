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

export function Navbar(props) {

    //on click on select value, pass subreddit up to App component
    function handleSelect (e) {
        props.onClick(e.target.value)
    };

    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box>
        <Flex alignItems={'center'} paddingEnd="10px">
            <Box p="2">
            <Input placeholder="Search" size="md"/>
            </Box>
            <Box p="2">
            <Select onClick={ handleSelect }>
                <option value="popular">Popular</option>
                <option value="animals">Animals</option>
                <option value="pics">Pics</option>
                <option value="askreddit">AskReddit</option>
                <option value="tennis">Tennis</option>
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
