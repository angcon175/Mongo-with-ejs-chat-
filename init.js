const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
  {
    from: "Angcon",
    to: "Rafa",
    msg: "Send me notes",
    created_at: new Date(),
  },
  {
    from: "Joyeta Halder",
    to: "neha",
    msg: "Valo gan gaisish",
    created_at: new Date(),
  },
  {
    from: "Hasib",
    to: "Angcon",
    msg: "Baira taratari",
    created_at: new Date(),
  },
  {
    from: "Mafiur",
    to: "Lola",
    msg: "Meal hoise?",
    created_at: new Date(),
  },
  {
    from: "Azmi",
    to: "hasib",
    msg: "Gupto corner ay",
    created_at: new Date(),
  },
  {
    from: "Nobab",
    to: "Rickshawala",
    msg: "Mama koi jaben",
    created_at: new Date(),
  },
];

Chat.insertMany(chats);
