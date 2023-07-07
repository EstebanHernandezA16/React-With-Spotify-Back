import { SerialPort } from "serialport"
import { ReadlineParser } from "serialport"
export const getWeight = (com, socket) => {
    let WeightValue;
    try {
        const PortCom = new SerialPort({ path: `COM${com}`, baudRate: 9600 });
        PortCom.on('error', (err) => {
            console.log('error --> ' + err);
        });

        const parser = PortCom.pipe(new ReadlineParser({ delimiter: '\r' }));

        parser.on('data', (data) => {
            WeightValue = data.toString();
            console.log('WeightValue:', WeightValue);

            socket.emit('Weight_Socket', WeightValue); // Emite el evento hacia el cliente
        });

    } catch (error) {
        console.log(error);
    }
};
