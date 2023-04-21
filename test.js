const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const assert = require('assert');

describe('HTML to Word export', function () {
  it('should export HTML to Word', function () {
    // Create a new JSDOM environment with a test HTML content
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test Page</title>
        </head>
        <body>
          <div id="content" style="font-size: 16px; color: #333;">
            <h1>Hello, World!</h1>
            <p>This is a test page.</p>
          </div>
          <script src="../index.js"></script>
        </body>
      </html>
    `);

    // Get the HTML to Word export function from your source code
    const exportToWord = dom.window.exportToWord;

    // Call the function to export the HTML to Word
    exportToWord();

    // Verify that the exported Word document contains the correct content
    const link = dom.window.document.querySelector('a');
    assert.equal(link.download, 'document.doc');
    assert.equal(link.href.substr(0, 5), 'data:');
  });
});
