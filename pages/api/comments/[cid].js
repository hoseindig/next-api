import { comments } from "@/data/comments";

export default function handler(req, res) {
  console.log("/api/comments/", req.method, req.query);
  const { cid } = req.query;
  const citem = comments.find((c) => c.id === parseInt(cid));
  const cindex = comments.findIndex((c) => c.id === parseInt(cid));

  console.log("cindex", cindex);
  if (citem && cindex !== -1 && req.method === "DELETE") {
    comments.splice(cindex, 1);
    res.status(200).json({ status: true, data: citem });
  } else res.status(400).json({ status: false });
}
