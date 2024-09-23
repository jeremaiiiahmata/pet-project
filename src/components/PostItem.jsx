const PostItem = ({ id, title, content }) => {

    return(
    <>
          <div class="card shadow-sm mx-2 my-2">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{title}</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
            <div class="card-body">
            <h1 class="card-title">{title}</h1>
              <p class="card-text">{content.split(".").slice(0,1)}...</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-dark">View</button>
                  <button type="button" class="btn btn-sm btn-danger">Delete</button>
                </div>
                <small class="text-body-secondary">Votes</small>
              </div>
            </div>
          </div>
    </>
    )

}

export default PostItem;