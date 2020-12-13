const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM feedback ORDER BY id'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error in router GET', err)
            res.sendStatus(500);
        })
}); // END GET Route

router.post('/', (req, res) => {
    const newFeedback = req.body
    let sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`
    // TODO - tighten up sql query for feedback

    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in router POST', err)
        })
})

// TODO DELETE route


// router.delete('/delete/:id', (req, res) => {
//     const galleryId = req.params.id
//     let sqlText = 'DELETE FROM gallery WHERE id=$1;'
//     pool.query(sqlText, [galleryId])
//         .then((response) => {
//             res.sendStatus(200)
//         })
//         .catch(err => {
//             console.log('Error in route delete', err)
//             res.sendStatus(500)
//         })
// })

module.exports = router;