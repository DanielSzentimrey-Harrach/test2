const config = require('.protractor.con').config;

config.capabilities = {
    browserName: 'chorme',
    chomeOptions: {
        args: ['--headless', '--no-sandbox']
    }
};

exports.config = config;