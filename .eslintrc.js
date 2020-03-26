module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "google"
    ],
    "globals": {
        // "Atomics": "readonly",
        // "SharedArrayBuffer": "readonly"
       
            "supertest": true,
            "expect": true
          
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};