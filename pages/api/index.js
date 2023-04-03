export default function Handler(req, res) {
  console.log("/api/");
  res.status(200).json({ name: "test api" });
}
