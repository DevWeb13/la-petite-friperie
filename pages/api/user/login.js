const { PrismaClient } = require("@prisma/client");
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const userInfos = await JSON.parse(req.body);

  const user = await prisma.user.findUnique({
    where: { email: userInfos.email },
  });
  if (!user) {
    return res.status(401).json({ error: "l'utilisateur n'existe pas" });
  }
  bcrypt.compare(userInfos.password, user.password).then((valid) => {
    if (!valid) {
      return res.status(401).json({ error: "mot de passe incorrect !" });
    }
    console.log("valid");
    return res.status(200).send({
      message: "ok",
      userId: user.id,
      name: user.name,
      picture: user.picture,
      token: jwt.sign(
        { userId: user.id }, //on signe le token avec l'id de l'utilisateur pour ne pas qu'un autre utilisateur puisse modifier un produit (seul celui avec l'id peut modifier ses produits)
        "RANDOM_TOKEN_SECRET", //on définit un sel pour le token
        { expiresIn: "24h" } //on définit une durée de validité du token
      ),
    });
  });
}
