const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get("/api/notes", (req,res)=>
{
    fs.readFile("./db/db.json", "utf8", (err, data)=>{
        if(err) throw err;
        console.log(data);
        res.send(data);
    })
});

router.post("/api/notes", (req,res)=>{
    const note = JSON.stringify(req.body);
    console.log(note);
    fs.appendFile("./db/db.json", note, (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
});
module.exports = router;