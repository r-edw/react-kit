module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "never"
        ],
        "no-unused-vars": 1,
        "react/jsx-uses-react": 1
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "modules": true,
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
