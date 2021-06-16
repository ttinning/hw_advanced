const UpperCaser = function (words) {
    this.words = words;
};

UpperCaser.prototype.toUpperCase = function () {
    const upperCaseWord = this.words.map((word) => {
        return word.toUpperCase();
    });
    return upperCaseWord;
};


module.exports = UpperCaser;