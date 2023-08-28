const mongoose = require("mongoose");

// should be stored at .env!
const username = "denysfive";
const password = "denysfive";

main()
  .then(() => console.log("DB is connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.lfbuine.mongodb.net/`
  );
}
