import { Card } from '../card/Card';
import { SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export function Postoverview(props) {

    const [redditPosts, setRedditPosts] = useState('');

    console.log(props.dropdownValue)

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${props.dropdownValue}.json`)
        .then(response => {
            return response.json();
        })
        .then( response => {
            setRedditPosts(response.data.children);
            console.log(response.data.children);
        })
        .catch(err => { console.log(err); 
        });
            }, 
    [])

    return(
        <SimpleGrid columns={[1, 2, 3]}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
    )
}