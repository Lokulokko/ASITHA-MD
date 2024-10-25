const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "szEQRIyD#WM0mE2bZNwpmC4SdM_2Orx9AVe5edTtI_ZI5TOVA_w0",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
