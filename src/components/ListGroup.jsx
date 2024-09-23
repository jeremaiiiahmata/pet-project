import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client' 

const GET_POSTS = gql`
query Query {
  posts {
    postId
    title
    content
    postVotes {
      postId
      postVoteId
      upVote
      downVote
    }
  }
}
`;


// destructuring the props and putting those values in the interface.
const ListGroup = ({heading, onSelectItem }) => {


    // Hook 
    const [click, setClick] = useState(-1);
    const [posts, setPosts] = useState([]);
    const {error, loading, data} = useQuery(GET_POSTS);

    useEffect(() => {
        if(data){
            setPosts(data.posts);
            console.log(data.posts);
        }
    }, [data])

    if(error) return <p> {error.message} </p>
    if(loading) return <p> Loading... </p>


  return ( // used in breaking the jsx into multiple lines.
    <>
          {data.posts.map((post) => 
              <li className={click === post.postId ? 'list-group-item active' : 'list-group-item'} key={post.postId} onClick={() => {
                  setClick(post.postId)
                  onSelectItem(post.title);
                  }
              }><PostItem id={post.postId} key={post.postId} title={post.title} content={post.content}/></li>
          )}
    </>
  );
}

export default ListGroup; //export
{/* <h1>{heading}</h1>
    {authors.length === 0 && <p>No item found</p>} 
      <ul className="list-group">
        {data.authors.map((author) => {
            <li className={click === author.id ? 'list-group-item active' : 'list-group-item'} key={author.id} onClick={() => {
                setClick(author.id)
                onSelectItem(author.name);
                }
            }>{author.name}</li>
        })}
      </ul>
    </> */}
    
    // <>
    // <h1>{heading}</h1>
    // {/* {authors.length === 0 && <p>No item found</p>}  */}
    //   <ul className="list-group">
    //     {authors.map(author => <AuthorItem id={author.id} key={author.id} name={author.name} verified={author.verified}/>)}
    //   </ul>
    // </>