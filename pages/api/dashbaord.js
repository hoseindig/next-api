export default function Handler(req, res) {
  console.log("/api/dashbaord");
  res.status(200).json({ name: "dashbaord api" });
}
