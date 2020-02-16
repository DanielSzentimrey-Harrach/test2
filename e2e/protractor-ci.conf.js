const config = require('./protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chomeOptions: {
        args: ['--headless', '--no-sandbox', '--disable-gpu']
    }
};

exports.config = config;