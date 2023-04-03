export default function Handler(req, res) {
  console.log("/api/blog/new");
  res.status(200).json({ name: "blog / new api" });
}
