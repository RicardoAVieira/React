export default function handler(req, res){

    const codigo = req.query.codigo
    
    res.status(200).json({
		id: 3,
		nome: `Maria ${codigo}`,
		email: `Mariamariamaria${codigo}@xcftes.com`
	});

   
}