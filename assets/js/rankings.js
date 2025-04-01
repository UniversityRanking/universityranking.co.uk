document.addEventListener('DOMContentLoaded', function () {
  var table = new Tabulator("#ranking-table", {
    data: [],
    layout: "fitColumns",
    columns: [
      { title: "Rank", field: "rank" },
      { title: "", field: "logo", formatter: "image", width: 50 },
      { title: "University", field: "name" },
      { title: "Score", field: "score" }
    ]
  });
});
