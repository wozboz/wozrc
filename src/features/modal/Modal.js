import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";


export function PostModal(props) {
    return (
        <>
         <Modal isOpen={props.isOpen} onClose={props.onClose}>
           <ModalOverlay />
           <ModalContent>
                <ModalHeader width="95%">{props.title}</ModalHeader>
                <ModalCloseButton  />         
            <ModalBody>
               Test
            </ModalBody>
            <ModalFooter>
              Footer
             </ModalFooter>
           </ModalContent>
        </Modal>
       </>
    )
}
