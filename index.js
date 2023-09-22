const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
        res.end("ini adalah halaman utama dengan content type plain text.");
    }
    else if(req.url === "/contacts"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        let contacts = JSON.stringify([
            {name: "Anggita Prameswari", phone:"000"},
            {name: "Sarah Gushef", phone:"000"},
            {name: "Sarah Gushef", phone:"000"},
        ]);
        res.end(contacts);
    }
    else if (req.url === "/about"){
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.end("<h1>Ini halaman about, dengan tipe konten html");
    }

    else if (req.url === "/products"){
        fs.readFile("./public/index.html", (err, data) => {
            if(err){
                res.writeHead(404);
                res.write("halaman ini tidak ditemukan");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        })
    }
});
server.listen(port, () => {
    console.log(`server is running on port ${port}`);

});