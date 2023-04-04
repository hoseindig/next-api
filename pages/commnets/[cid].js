const CommentsInfo = ({ comments = {} }) => {
  console.log("comments", comments);
  return (
    <>
      <h1>CommentsInfo</h1>
      <h4>{comments.text}</h4>
    </>
  );
};

export default CommentsInfo;

export async function getServerSideProps(context) {
  const { params } = context;
  if (params.cid) {
    const res = await fetch("http://localhost:3000/api/comments/" + params.cid);
    const data = await res.json();
    console.log(data);
    return {
      props: {
        comments: data.data,
      },
    };
  }
  return {
    props: {
      comments: null,
    },
  };
}
