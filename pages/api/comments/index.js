import { comments } from "@/data/comments";

export default function Handler(req, res) {
  if (req.method === "GET") res.status(200).json(comments);
  else if (req.method === "POST") {
    const comment = req.body.comment;
    console.log("req.body", req.body);
    if (comment) {
      const newComment = {
        id: Date.now(),
        text: comment,
      };
      console.log("newComment", newComment);
      comments.push(newComment);
      res.status(201).json({ status: true, data: newComment });
    } else {
      res.status(200).json({ status: false });
    }
  }
}
