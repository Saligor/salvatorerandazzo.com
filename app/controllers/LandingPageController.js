/**
 * Landing Page Controller
 * @module controllers/LandingPageController
 * @param app
 */
module.exports = (app) => {

    /**
     * Returns Homepage
     */
    app.get('/', (req, res) => {
        res.render('layout/home_page_one/home_page_one');
    });

};