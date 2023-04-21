function exportToWord() {
    var html = document.getElementById('content').outerHTML;
    var blob = new Blob([html], { type: 'application/msword' });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, 'document.doc');
    } else {
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'document.doc';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      exportToWord
    };
  }
  