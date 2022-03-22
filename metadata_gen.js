// file system module to perform file operations
const fs = require('fs');

const url = "https://gateway.pinata.cloud/ipfs/QmRcXhcz9KcW631pjDLZgEKuJAneE76XMpDV2H2VNSNkVg/"
const description = "This is a uniquely designed and hand crafted KONGTAMA NFT. Only 1 available for this item number making it a one-off piece."
 
// json data
for(let j = 1; j <= 1000; j++) {
    const name = "Kongtama #"+j.toString().padStart(4, '0');
    const image = `${url}KONGTAMA (${j.toString()}).png`;

    const jsonData = {
        name,
        description,
        image
    }

    const jsonContent = JSON.stringify(jsonData);

    //KONGTAMA (100).png

 
    fs.writeFile(`metadata/${j.toString()}`, jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log(`Saved File ${j.toString()}`);
    });

}



 
// stringify JSON Object
