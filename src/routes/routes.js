import { userRoutes } from "./userRoutes.js";
import {exec} from 'child_process'

export const routes = (route)=>{
    route.use('/user', userRoutes);

    route.post('/shutdown', (req,res)=>{
        setTimeout(()=>{
            process.exit(0);
        }, 3000)

        exec('taskkill /IM node.exe /F',()=>{
            if(error){
                console.log(`Error closing Java Runtime Process : ${error}`);
            }else{
                console.log('Java Runtime Process and subProcesses closed successfully');
            }
        });

        res.status(200).json({message: 'Turning off the server...'})


    })

    
}