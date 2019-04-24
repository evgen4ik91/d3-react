module.exports.getYear = function getYear(date) {
    return new Date(date).getFullYear();
}

module.exports.scrollTo = function(gap = 0) {
    window.scrollTo({
        top: gap,
        behavior: "smooth"
    });
} 