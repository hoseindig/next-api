export default function Handler(req, res) {
  const params = req.query.params;
  console.log("/api/", "params:", params, req.method);
  res.status(200).json({ params, message: "multi params" });
}
