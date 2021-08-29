import { Card } from '../card/Card';
import { SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export function Postoverview(props) {

    const [redditPosts, setRedditPosts] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    console.log(props.searchValue);
    //fetch new posts every time drodpownValue changes
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${props.dropdownValue}.json`)
        .then(response => {
            return response.json();
        })
        .then( response => {
            if (props.searchValue === "") {
                setRedditPosts(response.data.children);
                setLoadingData(false);
            } else {
                setRedditPosts(response.data.children.filter(post => post.data.title.indexOf(props.searchValue)!==-1));
                setLoadingData(false);
            }
            
        })
        .catch(err => { console.log(err); 
        });
        return function cleanup(){
            setLoadingData(true);
        }
            }, 
    [props.dropdownValue, props.searchValue])

    return(
    <SimpleGrid columns={[1, 2, 3]} gridColumnStart="auto">           
        <>
            {redditPosts.length === 0 ? [...Array(25)].map((number) => (<Card key={number} loading={loadingData} />)) : redditPosts.map(post => (
                <Card key={post.data.id} title={post.data.title} author={post.data.author} numcomments={post.data.num_comments} score={post.data.score} subreddit={post.data.subreddit} 
                thumbnail={post.data.preview === undefined ? "" : post.data} imageurl={post.data.url} permalink={post.data.permalink} selftext={post.data.selftext} loading={loadingData} />
            ))} 
        </>
    </SimpleGrid>
    )
}