// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/hello?nome=luis&idade=2
export default function handler(req, res) {
  res
    .status(200)
    .json({
      name: "John Doe",
      metodo: req.method,
      nome: req.query.nome,
      idade: +req.query.idade,
    });
}
