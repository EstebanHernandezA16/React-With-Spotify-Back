import { db } from "../../server.js";
import { signToken } from "../token/signToken.js";
const collection = 'users';


export const createUser = async (req, res) => {
  console.log('Data' + JSON.stringify(req.body, null, 2));
  const data = req.body;

  try {
    const querySnapshot = await db
      .collection(collection)
      .where('username', '==', req.body.username)
      .get();

    if (!querySnapshot.empty) {
     
      return res.status(409).json({ error: 'Username already exists' });
    }

    
    const docRef = await db.collection(collection).add(data);
    console.log('Document with ID:', docRef.id);
    return res.status(201).json({ message: 'Operation Success' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Operation Error' });
  }
};



export const loginUser = async (req, res) =>{
  // console.log('Data' + JSON.stringify(req.body, null, 2));
  const data = req.body
  try {
    const querySnapshot = await db.collection(collection).where('username','==',data.username).where('password','==',data.password).get();

    if(querySnapshot.empty){
      console.log('Document doesnt exists');
      return res.status(409).json({error: 'Username doesnt exists'})
    }else{
      // console.log('Document found');

      const documentId = querySnapshot.docs[0].id
      const queryData = querySnapshot.docs[0].data();
      //queryData.username,email,etc...

      const tokenInfo = {
        id:documentId,
        username: queryData.username,
        role: queryData.role? queryData.role : 'user'
      }

    const token =  signToken(tokenInfo)
   
    return res.status(200).json({token})
      
    }


  } catch (error) {
    console.log('Error while executing query', error)
    return res.status(500).json({error: 'Operation error'})
  }
}



