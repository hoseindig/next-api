import { useState } from "react";
const Comments = () => {
  //{ commentsList = [] }
  const [commentsList, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [formData, setData] = useState({ comment: "" });

  const inputHander = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setData({ [name]: value });
    console.log(formData);
  };
  const getComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    console.log(data);
    setComments(data);
  };
  const sendComments = async () => {
    const res = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({ comment: formData.comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status) {
      // setData({ comment: "" });
      setData({ comment: "" });
      getComments();
    }
    // setComments(data);
  };
  return (
    <>
      <h1>Comments</h1>
      <button onClick={getComments}>get List Comments</button>
      <br></br>
      {/* setComment(e.target.value) */}
      <input
        type="text"
        onChange={inputHander}
        value={formData.comment}
        name="comment"
      />
      <button onClick={sendComments}>Send</button>
      <ul>
        {commentsList.map((c) => {
          return <li key={c.id}>{c.text}</li>;
        })}
      </ul>
    </>
  );
};

export default Comments;
