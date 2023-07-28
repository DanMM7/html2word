			function exportToWord() {
			  // Get the HTML content
			  var html = document.documentElement.outerHTML;
	  
			  // Create a Blob object with the HTML content
			  var blob = new Blob([html], { type: 'application/msword' });
	  
			  // Check if the browser is Internet Explorer
			  if (window.navigator.msSaveOrOpenBlob) {
				// Use msSaveOrOpenBlob() to open the Blob in Microsoft Word
				window.navigator.msSaveOrOpenBlob(blob, 'Anglo_WD_RM_Report.doc');
			  } else {
				// Create a temporary link element
				var link = document.createElement('a');
	  
				// Set the link href and download attributes
				link.href = URL.createObjectURL(blob);
				link.download = 'Anglo_WD_RM_Report.doc';
	  
				// Append the link to the document body and click it to trigger the download
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			  }
			}




