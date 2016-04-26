const fs = require('fs');

module.exports = () => {

    /**
     *
     * @param app Express application
     */
    var initialize = (app) => {
        fs.readdir('./app/controllers/', (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            files.forEach((file) => {
                if (file !== 'index.js') {
                    require('./' + file)(app);
                }
            });

        });
    };

    return {
        initialize: initialize
    }
};