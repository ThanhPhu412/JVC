document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table');
  
    table.addEventListener('click', function(e) {
      
      if (e.target.classList.contains('btn-delete')) {
        const row = e.target.closest('tr');
        table.deleteRow(row.rowIndex);
        alert('Dự án đã được xóa.');
      }
  
      if (e.target.classList.contains('btn-update')) {
        const row = e.target.closest('tr');
        
        alert('Mở form cập nhật cho dự án: ' + row.cells[0].textContent);
      }
    });
  });
  