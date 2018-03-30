module.exports = function (data) {


    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Chompy!</title>
    </head>
    <body>
    <link rel="stylesheet" href="styles.css">

    <div id="navbar"></div>
    <div class="titlestyle"><div id="app"></div></div>
    <div class="mapsstyle"><div id='MapAndImages'></div></div>
    <div class="bottom-half">


    <span class="left">
        <div id="highlights"></div>
        <div id="reviews-module">${data.reviews[0]}</div>
    </span>
    <span class="right">
    <div class="related"><div id="right_bottom_sidebar"></div></div>
    </div>
    <script>
    window.__REVIEWS_INITIAL_STATE__ = ${data.reviews[1]}
    </script>

    <!-- navbar -->
    <script src="http://13.57.141.182/bundle.js"></script>
    <!-- title -->
    <script src="http://52.8.109.246/bundle.js"></script>
    <!-- highlights v  -->
    <script src="http://54.241.166.39/bundle.js"></script>
    <!-- maps image v -->
    <script src='http://34.216.201.147/bundle.js'></script>
    <!-- reviews v -->
    <script src="http://13.57.136.163/js/bundle.js"></script>
    <!-- bottom right v -->
    <script src="http://13.56.34.255/bundle.js"></script>



    </body>
    </html>
    `
}