let content = ``;
const form = document.getElementById("form");
const html = document.getElementById("html");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.elements[0].value;
  if (input.trim() === "" || !input) {
    alert("Please choose a date...");
    return;
  }
  let years = [];
  const dob = dayjs(input).year();
  const thirties = dob + 30;
  content += `<h1 class="m-0 mb-3">Plan your 30s</h1><p class="m-0">If you are a parent or a teacher, you can fork this repository to revise table with your customized milestones.</p><table class="mt-3 table table-striped table-dark table-hover table-bordered"><thead><tr><th>Milestone</th><th>Year</th></tr></thead>`;
  for (let i = dob; i <= thirties; i++) {
    if (
      i !== dob + 12 &&
      i !== dob + 13 &&
      i !== dob + 14 &&
      i !== dob + 15 &&
      i !== dob + 16 &&
      i !== dob + 18 &&
      i !== dob + 22 &&
      i !== dob + 24 &&
      i !== dob + 27 &&
      i !== dob + 29
    ) {
      continue;
    }
    let task;
    task =
      i === dob + 12
        ? "Learn finances, banking and get into reading literature"
        : i === dob + 13
        ? "Take a sports, learn about personal well-being and nurturing"
        : i === dob + 14
        ? "Get a paid part-time job, learn cooking, time and money management"
        : i === dob + 15
        ? "Pick a career choice and improve your grades"
        : i === dob + 16
        ? "Learn about education system, volunteer, build leadership skills"
        : i === dob + 18
        ? "Kickstart your under-graduate journey"
        : i === dob + 22
        ? "Kickstart your graduate journey"
        : i === dob + 24
        ? "Kickstart your PhD journey (optional)"
        : i === dob + 27
        ? "Own a house, settle down with life partner"
        : i === dob + 29
        ? "Start your own family, serve your family and community"
        : false;
    years.push(i);
    content += `<tr><th>${task}</th><td>${i}</td></tr>`;
  }
  content += `</table>`;
  html.innerHTML = content;
  form.style.display = `none`;
});
