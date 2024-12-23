const $ = function(expr, context) {
    return (context || document).querySelector(expr);
};

const $$ = function(expr, context) {
    return Array.from((context || document).querySelectorAll(expr));
};