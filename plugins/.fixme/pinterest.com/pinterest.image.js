module.exports = {

    re: /^https?:\/\/pinterest\.com\/pin\/(\d+)/i,

    mixins: [
        "canonical",
        "site",
        "html-title",
        "favicon"
    ],

    getMeta: function($selector) {
        return {
            description: $selector('.commentDescriptionContent').text()
        };
    },

    getLink: function($selector) {

        var $img = $selector('.pinImage');

        if ($img.length) {
            return {
                href: $img.attr('src'),
                type: CONFIG.T.image,
                rel: CONFIG.R.image,
                width: $img.css('width').replace('px', ''),
                height: $img.css('height').replace('px', '')
            };
        }
    },

    tests: [{
        page: "http://pinterest.com/all/science_nature/",
        selector: ".pinImageWrapper"
    }]
};