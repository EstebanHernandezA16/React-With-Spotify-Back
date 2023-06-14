import { db } from "../../server.js";


const collection = 'users';


export const createUser =  async(req,res)=>{
    const data = req.body;
  

    db.collection(collection)
    .add(data)
    .then((docRef)=>{
        console.log('Document with ID:', docRef.id);
      res.status(200).send({ message: 'Operation Success' });
    })
    .catch((error)=>{
        console.error('Error:', error);
      res.status(500).json({ error: 'Operation Error' });
    })

}




