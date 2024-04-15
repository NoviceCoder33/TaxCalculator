document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateTax();
    });
  
    function calculateTax() {
      const grossIncome = parseFloat(document.getElementById('grossIncome').value);
      const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
      const ageGroup = document.getElementById('ageGroup').value;
      const deductions = parseFloat(document.getElementById('deductions').value) || 0;
      const overallIncome = grossIncome + extraIncome - deductions;
      let tax = 0;
  
      if (overallIncome <= 800000) {
        tax = 0;
      } else {
        if (ageGroup === "<40") {
          tax = 0.3 * (overallIncome - 800000);
        } else if (ageGroup === ">=40 & <60") {
          tax = 0.4 * (overallIncome - 800000);
        } else {
          tax = 0.1 * (overallIncome - 800000);
        }
      }
  
      const result = overallIncome - tax;
      document.getElementById('resultModalBody').textContent = `Your overall income after tax deductions is: ${result} Lakhs`;
      document.getElementById('resultModal').style.display = 'block';
    }
  
    const modal = document.getElementById('resultModal');
    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function() {
      modal.style.display = 'none';
    };
  });