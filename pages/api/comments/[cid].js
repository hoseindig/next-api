import { comments } from "@/data/comments";

export default function handler(req, res) {
  console.log("/api/comments/", req.method, req.query);
  const { cid } = req.query;
  console.log("cid", cid);
  const citem = comments.find((c) => c.id === parseInt(cid));
  const cindex = comments.findIndex((c) => c.id === parseInt(cid));
  console.log("citem", citem);

  const params = req.query.params;
  console.log("method", req.method, "params", params);

  console.log("cindex", cindex);
  if (citem && cindex !== -1 && req.method === "DELETE") {
    comments.splice(cindex, 1);
    res.status(200).json({ status: true, data: citem });
  } else if (citem && req.method === "GET") {
    res.status(400).json({ status: true, data: citem });
  } else {
    console.log("/api/comments/", "fail");
    res.status(400).json({ status: false });
  }
}
