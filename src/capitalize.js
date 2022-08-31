function capitalize(input) {
    var output = input.charAt(0).toUpperCase() + input.slice(1);
    return output
}

module.exports = capitalize;