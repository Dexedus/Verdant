import { Router } from 'express';

const router = Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/About', (req, res) => {
    res.render('About');
});

router.get('/Pricing', (req, res) => {
    res.render('Pricing');
});

router.get('/Landing', (req, res) => {
    res.render('Landing');
});

router.get('/Contact', (req, res) => {
    res.render('Contact');
});

export default router;