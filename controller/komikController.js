const db = require('../modules');

async function getAllKomik(req, res) {
    try {
        const komiks = await db.Komik.findAll();
        res.status(200).json(komiks);
    } catch (error) {
        console.error('Error retrieving komik:', error.massage);
        res.status(500).json({ error: 'An error occurred while retrieving komik.' });
    }
}

