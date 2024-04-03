// PdfViewer.js

import React from 'react';

function PdfViewer({ pdfUrl }) {
  return (
    <div>
      {/* Back button to go back to the main page */}
      <button onClick={() => window.history.back()}>Back to Main Page</button>
      
      {/* PDF viewer iframe */}
      <iframe src={pdfUrl} width="100%" height="600px" title="PDF Viewer"></iframe>
    </div>
  );
}

export default PdfViewer;
