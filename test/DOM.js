const {JSDOM} = require('jsdom');

global.document = new JSDOM(`
<html">
<body>
  <div id="container">
    <h1 id="header">Change My Background Color</h1>
    <p>Current Color: <span id="current-color"></span></p>
    <input type="text" id="user-color" placeholder="Color">
    <button id="enter" onclick="changeColor()">Enter</button>
  </div>
</body>
</html>`).window.document;