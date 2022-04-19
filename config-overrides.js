const { alias, configPaths } = require('react-app-rewire-alias');

const aliasPaths = configPaths('./aliasPath.json');

module.exports = alias(aliasPaths);