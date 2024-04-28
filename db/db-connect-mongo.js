const mongoose = require('mongoose')
//const mondoDB = require('mongodb')

const getConnection = async () => {
    try {
        const url = 'mongodb://'+process.env.USER+':'+process.env.PASSWORD+'@ac-b4oqypv-shard-00-00.rftnzlp.mongodb.net:27017,ac-b4oqypv-shard-00-01.rftnzlp.mongodb.net:27017,ac-b4oqypv-shard-00-02.rftnzlp.mongodb.net:27017/estandar-sofasa?ssl=true&replicaSet=atlas-ixge1c-shard-0&authSource=admin&retryWrites=true&w=majority';
        const url2 =  'mongodb+srv://'+process.env.USER+':'+process.env.PASSWORD+'@clusterestandarqr.dutyufw.mongodb.net/'
        
        await mongoose.connect(url2);

        console.log("Conexion Exitosa");

    } catch (error) {
        console.log(error);
    }
}


module.exports = { getConnection }