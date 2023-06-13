
const images = require('../images/linkImages')

export const getImage = (req,res) =>{
    //send a image 
const id = req.query.IconCode




}


export const getImages = (req,res) =>{

    res.status(200).send(images)
}