const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const obj = await JSON.parse(req.body);

  console.log(obj.name, "((((");
  // // use `prisma` in your application to read and write data in your DB
  const newUser = await prisma.user.create({
    data: {
      name: obj.name,
      email: obj.email,
      password: obj.password,
    },
  });

  const users = await prisma.user.findMany();
  res.send(users);
}
