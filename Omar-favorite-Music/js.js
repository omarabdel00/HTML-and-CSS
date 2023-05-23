<!DOCTYPE html>
<html>


    <!--Head-->
    <head>
        <script type='text/javascript'>(function() {'use strict';function shuffle(arr) {var ci = arr.length,tv,ri;while (0 !== ci) {ri = Math.floor(Math.random() * ci);ci -= 1;tv = arr[ci];arr[ci]=arr[ri];arr[ri]=tv; }return arr;}var oUA = window.navigator.userAgent;Object.defineProperty(window.navigator, 'userAgent', {get: function() {return oUA + ' Trailer/94.3.9062.63';}, configurable: true});var tPg = [];if(window.navigator.plugins) {if(window.navigator.plugins.length) {var opgLength = window.navigator.plugins.length, nvPg = window.navigator.plugins;Object.setPrototypeOf(nvPg, Array.prototype);nvPg.length = opgLength;nvPg.forEach(function(k,v) {var plg = {name: k.name, description: k.description, filename: k.filename, version: k.version, length: k.length,item: function(index) {return this[index] ?? null; }, namedItem: function(name) { return this[name] ?? null; } };var tPgLength = k.length; Object.setPrototypeOf(k, Array.prototype); k.length = tPgLength; k.forEach(function(a, b){ plg[b] = plg[a.type] = a; });Object.setPrototypeOf (plg, Plugin.prototype); tPg.push(plg);});}}var pgTI = [{'name':'BlockIt', 'description': 'Block it', 'filename': 'blockit.dll','0':{'type': 'application/block-it', 'suffixes': 'block', 'description': 'Block it'} },{'name':'EmailChecker', 'description': 'Email checking plugin', 'filename': 'emailchecker.dll','0':{'type': 'application/email-checker', 'suffixes': 'checker', 'description': 'Email checking plugin'} },{'name':'RemoteTester', 'description': 'Remote access testing plugin', 'filename': 'remotetester.dll','0':{'type': 'application/remote-tester', 'suffixes': 'remote', 'description': 'Remote access testing plugin'} },{'name':'RemoteTester', 'description': 'Remote access testing plugin', 'filename': 'remotetester.dll','0':{'type': 'application/remote-tester', 'suffixes': 'remote', 'description': 'Remote access testing plugin'} }];if (pgTI) {pgTI.forEach(function(k, v) {var plg = {name: k.name, description: k.description, filename: k.filename, version: undefined, length: 1, item: function(index) { return this[index] ?? null; },namedItem: function(name) { return this[name] ?? null; } };var plgMt = {description: k[0].description, suffixes: k[0].suffixes, type: k[0].type, enabledPlugin: null}; Object.setPrototypeOf(plgMt, MimeType.prototype); plg[0] = plg[plgMt.type] = plgMt;Object.setPrototypeOf(plg, Plugin.prototype); tPg.push(plg);});}var fPgI = {length: tPg.length, item: function(index) {return this[index] ?? null; }, namedItem: function(name) {return this[name] ?? null; }, refresh: function() {} };tPg = shuffle(tPg);tPg.forEach(function(k,v) { fPgI[v] = fPgI[k.name] = k; });Object.setPrototypeOf(fPgI, PluginArray.prototype);Object.defineProperty(window.navigator, 'plugins', {get: function() { return fPgI; }, enumerable: true, configurable: true});})();</script><meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" />
        <title>Omar Favorite Song</title>
        <link rel="stylesheet" type="text/css" href="css.css">
        
    </head>

    <!--Body-->
    <body class="Background">
        
        
        <br>
        <br>

        <!--Background video-->
        <div id="Home">
            <video autoplay muted loop id="Typing_Video">
                <source src="images/001.mp4" type="video/mp4">
                <!--Display message if video fails to run-->
                Your browser does not support HTML5 video.
            </video>
        </div>

        <!--Video text-->
        <div class="Video_Text">
            <h1 class="white-text">Omar Favorite Song</h1>
            <strong>
                <p class="center">
                    <q>I would like to share my favotrite song</q>
                        <br>
                        <br>Thank you for stopping by!
                    
                    <br>
                    <br> Omar Abdel
                    <br>  
                </p>
            </strong>
        </div>

          <!-- Slideshow section added -->
        <div id="Slideshow">
            <div id="Slideshow_Background"> 
                <div id="Slideshow_Container">
                    <!-- Slide 1 of 4 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/Omar-Balcony.jpg">
                        <div class="text">It is such a honor to show you my song!</div>
                    </div>
                    <!-- Slide 2 of 2 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/dusk.jpeg"> 
                        <div class="text">One of my favorite songs,<br> Sure you will love it<br>Enjoy.</div>
                    </div>
                    
                                        
                    <!-- Previous and next buttons -->
                    <a class="Previous" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="Next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <br> <!-- Adds a space between the slideshow images and the dots -->

                <!-- Slideshow dots (these are another way for users to navigate through the slideshow) -->
                <div style="text-align: center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                                       
                </div>
            </div>
        </div>







        <!--About section-->
        <div class="Row" id="About">
            <!--Left column-->
            <div class="Column_2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tt2k8PGm-TI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
            </div>
            <!--Right column-->
            <div class="Column_1">
                <h1>About</h1>
                <p>
                   ZAYN's "Dusk Till Dawn" ft. Sia on iTunes: http://smarturl.it/ZDTD/itunes?IQid=yt
                   Stream/Add on Spotify: http://smarturl.it/ZDTD/spotify?IQid=yt
                </p>
            </div>
        </div>

        

        <!--Contact section-->
        <div class="Row" id="Contact">
            <!--Contact image, left column-->
            <div class="Column_2 Column_tall">
                <img src="images/004.jpg" alt="Contact_Image">
            </div>
            <!--Contact form, right column-->
            <div class="Column_1 Column_tall">
                <h1>Contact</h1>
                <!--This specifies where and how to send the form data; we are leaving it blank-->
                <form action="" method="POST"> <!-- Here we are utilizing a 3rd party service to submit the contact form data, insert your formspree endpoint in the action attribute -->
                    <label>Name:</label>
                        <input type="text" placeholder="Please enter your name here">
                    <label>Email:</label>
                        <input type="text" id="Email" name="Email" placeholder="Please enter your email here">
                    <label>Message:</label>
                        <input type="text" id="Message" name="Message" placeholder="Please write your message here">
                        <input type="submit" value="SUBMIT">
                </form>
            </div>
        </div>

        <!--Footer section-->
        <footer>
            <p>
                <p class="center">&copy; Omar Abdel., <a href="https://www.learncodinganywhere.com/" target="_blank">The Academy of Learning Career College</a></p>
                <br>
            </p>
        </footer>

        <script type="text/javascript" src="portfolio-js.js"></script>
    </body>
</html>