const focusMap = {
  "push-pull-legs": ["صدر علوي", "صدر وسط", "صدر سفلي"],
  "bro-split": ["صدر علوي", "ظهر علوي", "أكتاف جانبي"],
  "full-body": ["صدر علوي", "رجل أمامية", "ظهر عرض"]
};

let currentSplit = "push-pull-legs";
let focusIndex = 0;

const focusText = document.getElementById("focusText");
const logList = document.getElementById("logList");

function renderFocus() {
  focusText.textContent = focusMap[currentSplit][focusIndex];
}

document.querySelectorAll(".choice").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".choice").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSplit = btn.dataset.split;
    focusIndex = 0;
    renderFocus();
  });
});

document.getElementById("nextFocusBtn").addEventListener("click", () => {
  focusIndex = (focusIndex + 1) % focusMap[currentSplit].length;
  renderFocus();
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const exercise = document.getElementById("exercise").value.trim();
  const weight = document.getElementById("weight").value.trim();
  const reps = document.getElementById("reps").value.trim();
  if (!exercise || !weight || !reps) return;
  const li = document.createElement("li");
  li.textContent = `${exercise} — ${weight} كجم × ${reps}`;
  logList.prepend(li);
  document.getElementById("weight").value = "";
  document.getElementById("reps").value = "";
});

document.getElementById("calcBtn").addEventListener("click", () => {
  const weight = Number(document.getElementById("bodyWeight").value);
  const goal = document.getElementById("goal").value;
  const result = document.getElementById("nutritionResult");
  if (!weight) {
    result.textContent = "أدخل وزنك أولًا.";
    return;
  }
  const calories = goal === "bulk" ? weight * 34 : weight * 26;
  const protein = Math.round(weight * 2);
  const fats = Math.round(weight * 0.8);
  const carbs = Math.round((calories - protein * 4 - fats * 9) / 4);
  result.textContent = `السعرات: ${Math.round(calories)} — بروتين: ${protein}غ — كارب: ${carbs}غ — دهون: ${fats}غ`;
});

renderFocus();
