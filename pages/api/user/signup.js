const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const { name, email, password } = req.body;
  // // use `prisma` in your application to read and write data in your DB
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  const users = await prisma.user.findMany();
  res.send(users);
}
