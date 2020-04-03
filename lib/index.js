"use strict";

let emoji = require("emojilib");

const tagToEmoji = module.exports = {};

tagToEmoji.parse = (el) => {
    if (typeof el === 'string') {
        const emojiArray = [];
        Object.keys(emoji.lib).forEach((key) => {
            emojiArray[key] = emoji.lib[key].char;
        });
        return el.replace(/:[a-zA-Z0-9_]*:/g, (m) => {
            return emojiArray[m.replace(/:/g, '')];
        });
    }
};
