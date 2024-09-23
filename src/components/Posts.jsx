import React from 'react'
import PostItem from './PostItem';
import ListGroup from './ListGroup';

const Posts = () => {
  return (
    <>
    <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <ListGroup/>
            </div>
        </div>
     </div>
    </>
  )
}

export default Posts;