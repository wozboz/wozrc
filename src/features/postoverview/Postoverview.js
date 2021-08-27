import { Card } from '../card/Card';
import { SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export function Postoverview(props) {

    const [redditPosts, setRedditPosts] = useState([]);

    //fetch new posts every time drodpownValue changes
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${props.dropdownValue}.json`)
        .then(response => {
            return response.json();
        })
        .then( response => {
            setRedditPosts(response.data.children);
        })
        .catch(err => { console.log(err); 
        });
            }, 
    [props.dropdownValue])

    if (redditPosts.length !== 0) {
        console.log(redditPosts)
    }

    return(
        <SimpleGrid columns={[1, 2, 3]} gridColumnStart="auto">
            <>
                {redditPosts.length === 0 ? <Card/> : redditPosts.map(post => (
                    <Card key={post.data.id} title={post.data.title} author={post.data.author} numcomments={post.data.num_comments} score={post.data.score} subreddit={post.data.subreddit} 
                    thumbnail={post.data.preview === undefined ? "" : post.data} imageurl={post.data.url} permalink={post.data.permalink} selftext={post.data.selftext}/>
                ))}
            </>
        </SimpleGrid>
    )
}