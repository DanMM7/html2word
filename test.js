const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const assert = require('assert');
const { exportToWord } = require('./index.js');


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
    const exportToWord = dom.window.exportToWord();

    // Call the function to export the HTML to Word
    exportToWord();

    // Verify that the exported Word document contains the correct content
    const link = dom.window.document.querySelector('a');
    assert.equal(link.download, 'document.doc');
    assert.equal(link.href.substr(0, 5), 'data:');
  });
});

//other downloaders
$("body").on("click", "#pdfBTN", function () {            
  html2canvas($('table')[0], {                
    onrendered: function (canvas) {                    
      var data = canvas.toDataURL();                    
      var docDefinition = {                        
        content: [{                            
          image: data,                            
          width: 500                        
        }]                    
      };                    
      pdfMake.createPdf(docDefinition).download("Report.pdf");                
    }            
  });        
});


$(function () { 
  $('#excelBTN').click(function(e){            
    var table2excel = new Table2Excel();            
    table2excel.export($('table'));        
  });    
});