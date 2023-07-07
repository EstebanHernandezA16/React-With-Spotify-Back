import { CLIENT_ID, CLIENT_SECRET } from "../utils/utils.js";


export const getLandingSongs = async(req, res) =>{
   try {
    const token = await getSpotiToken();
    const GRXID = '60d24wfXkVzDSfLS6hyCjZ'

    const url = `https://api.spotify.com/v1/artists/${GRXID}/top-tracks?limit=30&market=US`
    const params = {
        method:'GET',
        headers:{

            Authorization: `Bearer ${token}`
        }
    }

    const response = await fetch(url, params)
    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    res.send({data})

    
   } catch (error) {
        console.log(error.message);
        res.send({message:'Error'})
   } 
 
}


export const getSpotiToken = async () =>{


    try {
        const url = 'https://accounts.spotify.com/api/token'
        const params = {
            method:'POST',
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`
            },
            body:'grant_type=client_credentials'

        
        }

        const response = await fetch(url, params)
        const data = await response.json();
        const token = data.access_token;

    // console.log('New token:', token);
    return token;
        
    } catch (error) {
        return null
    }
}