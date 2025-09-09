import { Router } from 'express';

const router = Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.render('index', { currentPage: 'home' });
});

router.get('/about', (req, res) => {
    res.render('about', { currentPage: 'about' });
});

router.get('/pricing', (req, res) => {
    res.render('pricing', { currentPage: 'pricing' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { currentPage: 'contact' });
});

router.get('/faq', (req, res) => {
    res.render('FAQ', { currentPage: 'faq' });
});

export default router;