const express = require('express');
const router = express.Router();
const fs = require('fs');

//get all notes router
router.get("/api/notes", (req,res)=>
{
    fs.readFile("./db/db.json", "utf8", (err, data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        res.send(data);
    })
});

//create note router
router.post("/api/notes", (req,res)=>{
    let notes = fs.readFileSync("./db/db.json", "utf8");
    let note = req.body;
    let newNote = JSON.parse(notes);
    note.id = newNote.length + 1;
    
    newNote.push(note);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNote, null, 2));
    res.send({msg: "added"});
});


//delete note router
router.delete("/api/notes/:id", (req,res)=>{
    const id = req.params.id;
  
   let allNotes = fs.readFileSync("./db/db.json","utf8");
   allNotes = JSON.parse(allNotes);   
   
   allNotes.forEach((note)=>{
            if(note.id == id)
            {
                allNotes.splice(note,1);
            }
        });
    fs.writeFileSync("./db/db.json",JSON.stringify(allNotes,null,2));
    res.json("successfully deleted note");
})
module.exports = router;