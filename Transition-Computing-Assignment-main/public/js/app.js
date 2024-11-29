document.addEventListener('DOMContentLoaded', () => {
    const resultsTable = document.getElementById('results');
  
    // Fetch checklist results from the API
    fetch('/api/evaluate')
      .then((response) => response.json())
      .then((results) => {
        results.forEach((result) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${result.rule}</td>
            <td class="${result.status === 'Passed' ? 'status-passed' : 'status-failed'}">
              ${result.status}
            </td>
          `;
          resultsTable.appendChild(row);
        });
      })
      .catch((error) => {
        console.error('Error fetching results:', error);
      });
  });
  