const STORAGE_KEY = "daily-reminder-site-v1";

const longLineNames = ["医学", "英语", "音乐", "创作"];
const reminders = [
  "今天不用很厉害，但要真实一点。",
  "先做一点，不要等状态完美。",
  "你不是机器，不用把人生过成KPI。",
  "输出一点点，才知道自己到底在想什么。",
  "累了就休息，不要把疲惫解释成失败。",
  "别把疲惫误以为人生无趣。",
  "先做一点，再等待意义出现。",
  "有时候只是太累了，不是人生坏掉了。",
  "今天也别离开自己太远。",
  "不必把每一天都过成证明题。",
  "慢一点也没关系，夜晚本来就不催人。",
  "如果脑子很乱，先把一件小事放到桌面上。",
  "你可以暂时没有答案，但不要停止感受。",
  "不是所有沉默都叫失败，有些是在恢复。",
  "别急着定义自己，先把今天照顾好。",
  "你不需要立刻变好，先真实地待一会儿。",
  "把心里的噪声写下来，它就不会一直追着你。",
  "今天的空白，也许只是明天的入口。",
  "如果世界太响，就先听见自己的呼吸。",
  "不必每次都赢过昨天，偶尔只是回来也很好。",
  "别用别人的节奏惩罚自己的生活。",
  "你可以很普通，也可以很珍贵。",
  "有些路不是走得快才算走过。",
  "今晚先把自己放回身体里。",
  "不要把短暂的低落翻译成永远。",
  "真正重要的事，通常不会很吵。",
  "你已经撑了很久，可以轻一点。",
  "今天只要留下一个小小的痕迹。",
  "先把灯调暗，再把心放慢。",
  "有些成长不是开花，是终于不再逃走。",
  "别急着把混乱整理成漂亮的道理。",
  "你不是计划表，你是一个会累的人。",
  "如果没有力气热爱，就先不要讨厌。",
  "一个人走夜路，也可以不假装勇敢。",
  "别把没有回应的时刻，误认为自己不存在。",
  "意义有时很晚才来，先把手里的事做一点。",
  "你可以暂时不清楚方向，但别丢掉温度。",
  "今天的你不完整，也仍然值得被好好对待。",
  "别把生活过成对自己的审讯。",
  "疲惫的时候，世界会显得比实际更冷。",
  "把一件事做完，不是为了伟大，是为了让心安静。",
  "你不需要一直清醒，偶尔迷路也是真的活着。",
  "别把所有孤独都解释成缺陷。",
  "有些夜晚，只适合慢慢活过去。",
  "先喝水，先坐下，先不要攻击自己。",
  "没有灵感的时候，也可以整理一下心。",
  "今天能输出一点点，就已经不是空的。",
  "别向疲惫的人生索要漂亮答案。",
  "你可以不被理解，但不要因此否认自己。",
  "今晚不解决全部问题，只留住一点清醒。",
  "不要把暂时的沉没，当成永远的消失。",
  "每个人都有不发光的时候。",
  "把手机放远一点，听听房间里的安静。",
  "你不是落后了，你只是还在路上。",
  "有些东西要慢慢长出来，急不得。",
  "别为了显得正常，压扁自己的感受。",
  "你可以带着困惑生活，不必立刻交卷。",
  "今天别把自己交给焦虑保管。",
  "做一点真实的事，比想象完整的人生更有用。",
  "不确定也没关系，先把这一小时过好。",
  "你不是一份需要优化的报告。",
  "有些疲惫需要睡眠，不需要哲学。",
  "把今天写下来，哪怕只有一句。",
  "别急着成为答案，先成为一个在场的人。",
  "你可以很安静地继续。",
  "深夜不是失败的证据，只是情绪比较诚实。",
  "别把别人的光，拿来照自己的阴影。",
  "生活没有坏掉，它只是暂时没有配乐。",
  "今天不必燃烧，保留一点火种就好。",
  "你可以不漂亮地前进。",
  "别把休息看成逃跑，有时那是回来。",
  "如果心很重，就先不要再加砝码。",
  "你不必向任何人证明自己正在努力。",
  "有些愿望还没实现，但它们仍然在你身上活着。",
  "先把一页翻过去，不必解释整本书。",
  "今晚允许自己低电量运行。",
  "别让效率偷走你对生活的触觉。",
  "你可以慢慢学会不责怪自己。",
  "那些说不出口的，也可以先留在纸上。",
  "并不是每个夜晚都需要结论。",
  "如果今天只剩一点力气，就用来善待自己。",
  "不要把没做到的一切，盖过你已经做过的。",
  "你仍然可以从很小的地方重新开始。",
  "空下来不是浪费，有时是在重新听见自己。",
  "别把未来想得太硬，它也会被你慢慢改写。",
  "今天的意义可能很小，但不是没有。",
  "你不需要假装没事，才算成熟。",
  "有些心事，先不处理也不会背叛你。",
  "别让凌晨的情绪替整个人生下判断。",
  "你可以承认累，同时继续爱一点什么。",
  "先把自己从比较里领回来。",
  "如果生活太密，就给心留一条缝。",
  "你不是没有变化，只是变化还很安静。",
  "今晚把目标放低，把感受放近。",
  "有些日子适合建设，有些日子适合保存。",
  "别把一时的无力，写成自己的名字。",
  "你可以没有宏大的计划，但要有一小块自己的时间。",
  "今天最重要的事，也许只是别弄丢自己。",
  "把注意力从远处收回来，放到手边的一件事上。",
  "你不需要在深夜里审判白天的自己。",
];

const dateEl = document.querySelector("#today-date");
const phaseEl = document.querySelector("#today-phase");
const timeEl = document.querySelector("#today-time");
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const mainCounter = document.querySelector("#main-counter");
const lineGrid = document.querySelector("#line-grid");
const feelingInput = document.querySelector("#feeling-input");
const reminderText = document.querySelector("#reminder-text");
const reminderButton = document.querySelector("#reminder-button");
const archiveList = document.querySelector("#archive-list");

let state = loadState();

// Read one compact object from localStorage, then merge it with the current shape.
function loadState() {
  const today = getDateKey(new Date());
  const fallback = {
    tasks: [],
    longLines: Object.fromEntries(longLineNames.map((name) => [name, ""])),
    feeling: "",
    activeDate: today,
    archives: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const hydrated = {
      ...fallback,
      ...saved,
      tasks: normalizeTasks(saved?.tasks),
      longLines: { ...fallback.longLines, ...(saved?.longLines || {}) },
      archives: Array.isArray(saved?.archives) ? saved.archives : [],
    };

    if (!saved?.activeDate) {
      hydrated.activeDate = today;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(hydrated));
      return hydrated;
    }

    if (hydrated.activeDate !== today) {
      const nextState = archivePreviousDay(hydrated, today);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      return nextState;
    }

    return hydrated;
  } catch {
    return fallback;
  }
}

function normalizeTasks(tasks) {
  if (!Array.isArray(tasks)) return [];

  return tasks
    .filter((task) => task && typeof task === "object" && String(task.title || "").trim())
    .map((task) => ({
      id: task.id || createId(),
      title: String(task.title).trim(),
      done: Boolean(task.done),
    }));
}

// Saving after each edit keeps the page low-friction: no extra button, no ceremony.
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function hasArchiveContent(dayState) {
  const hasTasks = dayState.tasks?.length > 0;
  const hasLongLines = Object.values(dayState.longLines || {}).some((value) =>
    String(value || "").trim()
  );
  const hasFeeling = Boolean(String(dayState.feeling || "").trim());
  return hasTasks || hasLongLines || hasFeeling;
}

function archivePreviousDay(dayState, today) {
  const archives = [...(dayState.archives || [])];

  if (hasArchiveContent(dayState)) {
    const record = {
      date: dayState.activeDate,
      tasks: (dayState.tasks || []).map((task) => ({ ...task })),
      longLines: { ...dayState.longLines },
      feeling: dayState.feeling || "",
    };
    const existingIndex = archives.findIndex((archive) => archive.date === record.date);

    if (existingIndex >= 0) {
      archives[existingIndex] = record;
    } else {
      archives.push(record);
    }
  }

  return {
    ...dayState,
    activeDate: today,
    tasks: [],
    longLines: Object.fromEntries(longLineNames.map((name) => [name, ""])),
    feeling: "",
    archives,
  };
}

function checkDateRollover() {
  const today = getDateKey(new Date());
  if (state.activeDate === today) return;

  state = archivePreviousDay(state, today);
  saveState();
  renderTasks();
  renderLongLines();
  renderArchive();
  feelingInput.value = state.feeling;
}

function formatToday() {
  checkDateRollover();
  const now = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" })
    .format(now)
    .toUpperCase();
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now);

  dateEl.textContent = `${now.getFullYear()} / ${month} / ${String(now.getDate()).padStart(2, "0")}`;
  phaseEl.textContent = `${weekday} · ${getDayPhase(now)}`;
}

function getDayPhase(date) {
  const hour = date.getHours();
  if (hour < 5) return "Deep Night";
  if (hour < 8) return "Early Morning";
  if (hour < 12) return "Morning";
  if (hour < 18) return "Afternoon";
  if (hour < 22) return "Evening";
  return "Late Night";
}

function updateTime() {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const nextTime = formatter.format(new Date());
  if (timeEl.textContent === nextTime) return;

  timeEl.textContent = nextTime;
}

// The main thread is intentionally capped at three tasks to protect focus.
function renderTasks() {
  state.tasks = normalizeTasks(state.tasks);
  taskList.innerHTML = "";
  mainCounter.textContent = `${state.tasks.length} / 3`;
  taskInput.disabled = state.tasks.length >= 3;
  taskForm.querySelector("button").disabled = state.tasks.length >= 3;

  if (state.tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "先放一件真正重要的事。";
    taskList.appendChild(empty);
    return;
  }

  state.tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item${task.done ? " is-done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "task-check";
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `完成 ${task.title}`);
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      item.classList.toggle("is-done", task.done);
      saveState();
    });

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `删除 ${task.title}`);
    deleteButton.addEventListener("click", () => {
      state.tasks = state.tasks.filter((savedTask) => savedTask.id !== task.id);
      saveState();
      renderTasks();
    });

    item.append(checkbox, title, deleteButton);
    taskList.appendChild(item);
  });
}

// These four long lines stay fixed, while the daily note underneath stays editable.
function renderLongLines() {
  lineGrid.innerHTML = "";

  longLineNames.forEach((name) => {
    const card = document.createElement("div");
    card.className = "line-card";

    const label = document.createElement("label");
    const inputId = `line-${name}`;
    label.setAttribute("for", inputId);
    label.textContent = name;

    const input = document.createElement("input");
    input.id = inputId;
    input.type = "text";
    input.maxLength = 80;
    input.value = state.longLines[name] || "";
    input.placeholder = "今天推进了什么";
    input.addEventListener("input", () => {
      state.longLines[name] = input.value;
      saveState();
    });

    card.append(label, input);
    lineGrid.appendChild(card);
  });
}

function formatArchiveDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" })
    .format(date)
    .toUpperCase();
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

  return {
    title: `${year} / ${monthName} / ${String(day).padStart(2, "0")}`,
    subtitle: weekday,
  };
}

function renderArchive() {
  if (!archiveList) return;

  archiveList.innerHTML = "";

  const archives = [...(state.archives || [])].sort((a, b) => b.date.localeCompare(a.date));

  if (archives.length === 0) {
    const empty = document.createElement("p");
    empty.className = "archive-empty";
    empty.textContent = "还没有旧日子。等明天到来，今天会被轻轻收好。";
    archiveList.appendChild(empty);
    return;
  }

  archives.forEach((archive) => {
    const { title, subtitle } = formatArchiveDate(archive.date);
    const details = document.createElement("details");
    details.className = "archive-item";

    const summary = document.createElement("summary");
    summary.className = "archive-summary";

    const dateWrap = document.createElement("span");
    dateWrap.className = "archive-date-wrap";

    const dateText = document.createElement("span");
    dateText.className = "archive-date";
    dateText.textContent = title;

    const weekdayText = document.createElement("span");
    weekdayText.className = "archive-weekday";
    weekdayText.textContent = subtitle;

    const marker = document.createElement("span");
    marker.className = "archive-marker";
    marker.textContent = "展开";

    dateWrap.append(dateText, weekdayText);
    summary.append(dateWrap, marker);

    const body = document.createElement("div");
    body.className = "archive-body";
    body.append(createArchiveBlock("今日主线", renderArchivedTasks(archive.tasks || [])));
    body.append(createArchiveBlock("长期线", renderArchivedLines(archive.longLines || {})));

    if (archive.feeling?.trim()) {
      const feeling = document.createElement("p");
      feeling.className = "archive-feeling";
      feeling.textContent = archive.feeling;
      body.append(createArchiveBlock("今日感受", feeling));
    }

    details.append(summary, body);
    archiveList.appendChild(details);
  });
}

function createArchiveBlock(title, content) {
  const block = document.createElement("section");
  block.className = "archive-block";

  const heading = document.createElement("h3");
  heading.textContent = title;

  block.append(heading, content);
  return block;
}

function renderArchivedTasks(tasks) {
  if (tasks.length === 0) return createMutedLine("没有写下主线。");

  const list = document.createElement("ul");
  list.className = "archive-task-list";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = task.done ? "is-done" : "";
    item.textContent = task.title;
    list.appendChild(item);
  });

  return list;
}

function renderArchivedLines(longLines) {
  const list = document.createElement("dl");
  list.className = "archive-line-list";

  longLineNames.forEach((name) => {
    const value = String(longLines[name] || "").trim();
    if (!value) return;

    const term = document.createElement("dt");
    term.textContent = name;

    const description = document.createElement("dd");
    description.textContent = value;

    list.append(term, description);
  });

  return list.children.length ? list : createMutedLine("长期线没有留下推进。");
}

function createMutedLine(text) {
  const line = document.createElement("p");
  line.className = "archive-muted";
  line.textContent = text;
  return line;
}

function createId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function pickReminder() {
  const current = reminderText.textContent.trim();
  const pool = reminders.filter((sentence) => sentence !== current);
  const next = pool[Math.floor(Math.random() * pool.length)];

  reminderText.classList.remove("is-entering");
  reminderText.classList.add("is-leaving");

  window.setTimeout(() => {
    reminderText.textContent = next;
    reminderText.classList.remove("is-leaving");
    reminderText.classList.add("is-entering");
  }, 180);
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  state.tasks = normalizeTasks(state.tasks);
  const title = taskInput.value.trim();
  if (!title || state.tasks.length >= 3) return;

  state.tasks.push({
    id: createId(),
    title,
    done: false,
  });

  taskInput.value = "";
  saveState();
  renderTasks();
});

feelingInput.addEventListener("input", () => {
  state.feeling = feelingInput.value;
  saveState();
});

reminderButton.addEventListener("click", pickReminder);

formatToday();
updateTime();
setInterval(updateTime, 1000);
setInterval(formatToday, 60000);
renderTasks();
renderLongLines();
renderArchive();
feelingInput.value = state.feeling;
