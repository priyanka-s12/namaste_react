import Comment from './Comment';

function CommentList({ comments }) {
  //recursion
  return (
    <div className="">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {/* inner container */}
          <div className="pl-5 border-l border-l-black ml-5">
            {/* <Comment data={comment} key={index} />
            <Comment data={comment} key={index} /> */}
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
