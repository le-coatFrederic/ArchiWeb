async function run() {
  let url = "mongodb://localhost:27017/local";
  const { MongoClient } = require("mongodb");
  const client = new MongoClient(url);
  await client.connect();
  console.log(
    await client
      .db("local")
      .collection("city")
      .find({ statut: "Préfecture" })
      .toArray()
  );
}
run();
