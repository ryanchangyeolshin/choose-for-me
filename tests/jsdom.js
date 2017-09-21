const { JSDOM } = require('jsdom')

const page = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" />
    <!-- Compiled and minified CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i|Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet" />
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"></script>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="https://use.fontawesome.com/6223f24cbd.js"></script>
    <link href="styles.css" rel="stylesheet" />
    <title>To Be Determined...</title>
  </head>
  <body>
    <div class="container">
      <div id="logo" class="row">
        <div class="col s8 offset-s2">
          <h3 class="site-name center-align"></h3>
          <h5 class="slogan center-align"></h5>
        </div>
      </div>
      <div class="col s8 offset-s2 row">
        <ul id="choices" class="col s8 offset-s2 row"></ul>
      </div>
      <div id="option" class="row">
        <div class="col s8 offset-s2">
          <div class="card-panel form">
            <form>
              <div class="input-field">
                <input id="choice" type="text" class="validate" maxlength="50" />
                <label for="choice">Choice</label>
              </div>
              <div class="input-field">
                <input id="author" type="text" name="user" class="validate" maxlength="50" />
                <label for="author">Author</label>
              </div>
              <div class="buttons center-align">
                <button class="waves-effect waves-light btn-large" id="submit">Submit</button>
                <button class="waves-effect waves-light btn-large" id="clear">Clear</button>
                <button class="waves-effect waves-light btn-large" id="randomize">Randomize</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <script src="functions.js" type="text/javascript"></script>
  </body>
</html>`

const { window } = (new JSDOM(page))

module.exports = {
  window
}