// Export a function.
function ff(s) {
    console.log('Exp: ' + s);
}

// Module exports a symbol f. Calls ff.
module.exports.f = ff;
