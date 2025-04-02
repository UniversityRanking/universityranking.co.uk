document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedSubject = urlParams.get('subject');

  if (!selectedSubject) return;

  fetch("/assets/tables/All-Subjects-Formatted.json")
    .then(response => response.json())
    .then(data => {
      const filtered = data.filter(row => row.Subject === selectedSubject);
      const sorted = filtered.sort((a, b) => a.Rank - b.Rank);

      new Tabulator("#subject-table", {
        data: sorted,
        layout: "fitColumns",
        responsiveLayout: "collapse",
        columns: [
          { title: "Rank", field: "Rank", width: 80, hozAlign: "center" },
          { title: "University", field: "Provider", widthGrow: 3 },
          { title: "Score", field: "AVERAGE", width: 100, hozAlign: "center" }
        ]
      });
    });
});
