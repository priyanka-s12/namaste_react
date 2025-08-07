import Comment from './Comment';
import CommentList from './CommentList';
export const commentsData = [
  {
    name: 'Priyanka S',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
    replies: [
      {
        name: 'Priyanka S',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
        replies: [
          {
            name: 'Priyanka S',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
            replies: [
              {
                name: 'Priyanka S',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Priyanka S',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
        replies: [],
      },
    ],
  },
  {
    name: 'Priyanka S',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
    replies: [
      {
        name: 'Priyanka S',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, itaque.',
        replies: [],
      },
    ],
  },
];

function CommentsContainer() {
  return (
    <div className="mx-12 mb-20">
      <h1 className="font-bold text-xl">Comments: </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
