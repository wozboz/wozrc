import {
    Box,
    Flex,
    IconButton,
    Spacer,
    Input,
    Select,
    useColorMode,
    Divider,
    InputGroup,
    Button
  } from "@chakra-ui/react";
  import { FaMoon, FaSun } from 'react-icons/fa';
  import { useState } from "react";

export function Navbar(props) {

    const [searchFieldValue, setSearchFieldValue] = useState("");

    //on click on select value, pass subreddit up to App component
    function handleSelect (e) {
        props.onClick(e.target.value)
    };

    function handleKeyPress (e) {
        //charcode 13 is the Enter Key
        if (e.charCode === 13) {
            props.onSearch(e.target.value);
        }
    };

    function handleInput (e) {
        setSearchFieldValue(e.target.value);
    };

    function handleClick (e) {
        props.onSearch(searchFieldValue);
    };

    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Box>
        <Flex alignItems={'center'} paddingEnd="10px">
            <Box p="2">
            <InputGroup size="md">
                <Input placeholder="Search" onKeyPress={ handleKeyPress } onChange={handleInput}/>
                <Button size="md" ml="10px" onClick={ handleClick }>
                    Search
                </Button> 
            </InputGroup>
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
                icon={ colorMode === 'light' ? <FaSun /> : <FaMoon /> }
                onClick={ toggleColorMode }
            />
        </Flex>
        <Divider />
        </Box>

    )
}
