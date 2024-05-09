
//query string config
const esModules = [
    'query-string',
    'decode-uri-component',
    'split-on-first',
    'filter-obj',
];
//query string config


module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    //query string config
    transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : [],
    //query string config
}