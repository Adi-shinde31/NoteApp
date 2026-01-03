export function getAllNotes (req, res) {
    res.status(200).send('Notes Received Successfully!');
}

export function createNote (req, res) {
    res.status(201).send({message: 'Notes Created Successfully!'});
}

export function updateNote (req, res) {
    res.status(200).send({message: 'Notes Updated Successfully!'});
}

export function deleteNote (req, res) {
    res.status(200).send({message: 'Notes Deleted Successfully!'});
}