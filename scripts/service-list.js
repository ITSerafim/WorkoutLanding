const serviceList = document.querySelector("#serviceList");

const services = [
  {
    name: "Тренировка",
    description:
      "Создавайте, редактируйте, просматривайте, загружайте тренировки.",
  },
  {
    name: "Упражнения",
    description: "Просматривайте таблицы упражнений и создавайте свои",
  },
  {
    name: "Программы",
    description: "Уже готовой набор тренировок с упражнениями и питанием",
  },
  {
    name: "Персональный профиль",
    description: "Заносити данные антропометрии и отслеживайте свой прогресс",
  },
  {
    name: "Онлайн-чат",
    description:
      "Поддерживайте общение и делитесь результатами в реальном  времени!",
  },
];

function serviceCard(name, description) {
  return `
    <div class="service-card">
        <h3>${name}</h3>
        <p>${description}</p>
    </div>
    `;
}

services.forEach((service) => {
  serviceList.appendChild(
    stringToHtml(serviceCard(service.name, service.description), "div")
  );
});

function stringToHtml(string, selector) {
  return new DOMParser()
    .parseFromString(string, "text/html")
    .querySelector(selector);
}
