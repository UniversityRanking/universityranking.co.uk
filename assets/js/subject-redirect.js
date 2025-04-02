document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("subject-select");
  if (dropdown) {
    dropdown.addEventListener("change", function () {
      const subject = this.value;
      if (subject) {
        const encoded = encodeURIComponent(subject);
        window.location.href = `/universityranking.co.uk/subject/subject.html?subject=${encoded}`;
      }
    });
  }
});
