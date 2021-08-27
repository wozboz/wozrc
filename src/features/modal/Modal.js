import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    Image,
    Text
  } from "@chakra-ui/react";
import { Comment } from "../comment/Comment";
import { useState, useEffect } from 'react';


export function PostModal(props) {

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com${props.link}.json`)
        .then(response => {
            return response.json();
        })
        .then( response => {
          setPostData(response[1].data.children);
      })
      .catch(err => { console.log(err); 
      });
  },
  [props.link])

    return (
        <>
         <Modal isOpen={props.isOpen} onClose={props.onClose}>
           <ModalOverlay />
           <ModalContent>
                <ModalHeader width="95%"><Heading as="h2" size="xl">{props.title}</Heading>
                  <Image
                  mt={3}
              boxSize="100%"
              src={props.imageurl}
              fit="contain"
            />
            
          </ModalHeader>
                <ModalCloseButton  />        
            <ModalBody>
            <Text size="sm">{props.selftext}</Text>
            <Heading as="h2" size="lg" mb={3} mt={3}>Comments</Heading>
            {postData.map(post => (
                <Comment key={post.data.id} comment={post.data.body} author={post.data.author} upvotes={post.data.ups}></Comment>
              ))}
            </ModalBody>
            <ModalFooter>
              Footer
             </ModalFooter>
           </ModalContent>
        </Modal>
       </>
    )
}
