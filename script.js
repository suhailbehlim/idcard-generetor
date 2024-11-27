document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const designation = document.getElementById('designation').value;
    const joiningDate = document.getElementById('joiningDate').value;
    const companyName = document.getElementById('companyName').value;
    const slogan = document.getElementById('slogan').value;
    const image = document.getElementById('image').files[0];
    const companyLogo = document.getElementById('companyLogo').files[0];
  
    // Display values on ID card
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayNumber').innerText = `Number: ${number}`;
    document.getElementById('displayEmail').innerText = `Email: ${email}`;
    document.getElementById('displayDesignation').innerText = designation;
    document.getElementById('displayJoiningDate').innerText = `Joined: ${joiningDate}`;
    document.getElementById('displayCompanyName').innerText = companyName;
    document.getElementById('displaySlogan').innerText = slogan;
  
    // Display profile image on ID card
    if (image) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('previewImage').src = e.target.result;
      };
      reader.readAsDataURL(image);
    }
  
    // Display company logo on ID card
    if (companyLogo) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('companyLogoPreview').src = e.target.result;
      };
      reader.readAsDataURL(companyLogo);
    }
  });
  
  // Clear button functionality
  document.getElementById('clearBtn').addEventListener('click', function() {
    // Clear form fields
    document.getElementById('idForm').reset();
  
    // Clear ID card display
    document.getElementById('displayName').innerText = '';
    document.getElementById('displayNumber').innerText = '';
    document.getElementById('displayEmail').innerText = '';
    document.getElementById('displayDesignation').innerText = '';
    document.getElementById('displayJoiningDate').innerText = '';
    document.getElementById('displayCompanyName').innerText = '';
    document.getElementById('displaySlogan').innerText = '';
    document.getElementById('previewImage').src = '';
    document.getElementById('companyLogoPreview').src = '';
  });
  document.getElementById('printBtn').addEventListener('click', function () {
    const card = document.querySelector('.card'); // Select the card to print
    const printWindow = window.open('', '', 'height=500,width=800');
    
    // Create the print document structure
    printWindow.document.write('<html><head><title>ID Card</title>');
    printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<div class="d-flex justify-content-center">');
    printWindow.document.write(card.outerHTML); // Add the card HTML content
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    
    printWindow.document.close(); // Close document to finish writing
    printWindow.onload = function() {
      printWindow.print(); // Automatically trigger print dialog
      printWindow.close(); // Close print window after printing
    };
  });
  