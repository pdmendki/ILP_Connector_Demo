'use strict'

const address = 'rBV1HqNzQiRz9o3pKxJseDijbToSYwUoB8'
const secret = 'snACtXQBfQnZKJLUWqPeGYASiQxwk'

const parentConnector = {
    relation: 'parent',
    plugin: 'ilp-plugin-xrp-asym-client',
    assetCode: 'XRP',
    assetScale: 6,
    balance: {
        maximum: '10000000',
        settleThreshold: '50000',
        settleTo: '100000'
    },
    options: {
        server: 'btp+wss://client.scyl.la',
        xrpServer: 'wss://s1.ripple.com',
        address,
        secret
    }
}

const miniAccounts = {
    relation: 'child',
    plugin: 'ilp-plugin-mini-accounts',
    assetCode: 'XRP',
    assetScale: 6,
    options: {
        port: 7768
    }
}

const connectorApp = {
    name: 'connector',
    env: {
        CONNECTOR_ENV: 'test',
        CONNECTOR_BACKEND: 'one-to-one',
        CONNECTOR_SPREAD: '0',
        CONNECTOR_ADMIN_API: true,
        CONNECTOR_ADMIN_API_PORT: 7769,
        CONNECTOR_STORE_PATH: '/Users/dinorodriguez/connector-data',
        CONNECTOR_ACCOUNTS: JSON.stringify({
            parent: parentConnector,
            local: miniAccounts
        })
    },
    script: '/usr/local/lib/node_modules/ilp-connector/src/index.js' 
}

module.exports = { apps: [ connectorApp ] }
