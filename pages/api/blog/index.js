export default function Handler(req, res) {
  console.log("/api/blog");
  res.status(200).json({ name: "blog api" });
}
