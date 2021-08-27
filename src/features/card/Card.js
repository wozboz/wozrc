import {
    Box,
    Image,
    useColorModeValue,
    useDisclosure,
    Badge,
    Heading,
    Stack,
    Center,
    Text
  } from "@chakra-ui/react";
  import { PostModal } from '../modal/Modal';

export function Card(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center py={6}
    alignSelf="start">
      <Box
        maxW={'445px'}
        h={'full'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        onClick={onOpen}
        >
        <Box
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}>
          <Image
            boxSize="100%"
            src={props.imageurl}
            fit="contain"
          />
        </Box>
        <PostModal isOpen={isOpen} onClose={onClose} title={props.title} link={props.permalink} imageurl={props.imageurl} selftext={props.selftext}/>
        <Stack
        justify-content="space-between">
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {props.subreddit}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.title}
          </Heading>
        </Stack>
          <Stack mt="1" direction={'column'} spacing={1} fontSize={'sm'}>
            <Text fontWeight={600}>{props.author}</Text>
            <Stack direction={'row'} fontSize={'sm'} >
              <Badge variant="outline">Score: {props.score}</Badge>
              <Badge variant="outline">Comments: {props.numcomments}</Badge>
            </Stack>
          </Stack>
      </Box>
    </Center>
  );
}