const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const obj = await JSON.parse(req.body);

  // cryptage du mdp
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(obj.password, salt);

  // // use `prisma` in your application to read and write data in your DB
  const newUser = await prisma.user.create({
    data: {
      name: obj.name,
      email: obj.email,
      password: encryptedPassword,
    },
  });

  const users = await prisma.user.findMany();
  res.send(users);
}
