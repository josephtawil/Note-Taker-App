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
    let notes = fs.readFileSync("./db/db.json", "utf8");
    let newNote = JSON.parse(notes);
    let note = req.body;
    note.id = newNote.length + 1;
    newNote.push(note);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNote, null, 2));
    res.send({msg: "added"});
});
module.exports = router;