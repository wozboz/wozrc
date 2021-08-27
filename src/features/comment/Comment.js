import {
    Text,
    Divider,
    Badge
  } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";


  export function Comment(props) {
      return (
        <>
        <ReactMarkdown>{props.comment}</ReactMarkdown>
        <Text fontWeight={600}>{props.author}</Text>
        <Badge variant="outline">Upvotes: {props.upvotes}</Badge>
        <Divider mt={1} mb={1}/>
        </>
      )
      
  }