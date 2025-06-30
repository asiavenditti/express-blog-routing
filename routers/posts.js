
const express = require('express')
const router = express.Router()
const posts = require('../bonus/posts')



// index [get]
router.get('/', (req, res) => {
    res.json(posts)

})
// show [get]
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(`Dettaglio del con id: ${id}`)
})

// store [post]
router.post('/', (req, res) => {

    res.send('Crea un nuovo post')
})

// update [put]
router.put('/:id', (req, res) => {
    const id = req.params.id

    res.send(`Aggiornamento del post con id: ${id}`)
})

// modify [patch]
router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifica del post con id: ${id}`)


})

// destroy [delete]
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Cancella il post con id: ${id}`)

})

module.exports = router


