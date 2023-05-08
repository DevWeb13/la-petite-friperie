const { PrismaClient } = require("@prisma/client");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const userInfos = await JSON.parse(req.body);

  const user = await prisma.user.findUnique({
    where: { email: userInfos.email },
  });
  res.send(user);
}
