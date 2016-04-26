module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('layout/home_page_one/home_page_one');
    });

};