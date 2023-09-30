const serviceList = document.querySelector("#serviceList");

const services = [
  {
    name: "Создание, редактирование, просмотр",
    description:
      "Создавайте, редактируйте, просматривайте тренировки, упражнения и планы питания",
  },
  {
    name: "Загружайте/Выгружайте",
    description:
      "Загружайте пользовательские тренировки и планы питания. Выгружайте в удобный для вас формат",
  },
  {
    name: "Календарь и события",
    description:
      "Отмечайте тренировки и другие события прямо в системе с помощью встроенного календаря",
  },
  {
    name: "Профиль со статистикой ",
    description: "Отслеживайте свой прогресс и выполнение целей",
  },
  {
    name: "Коммьюнити",
    description:
      "Делитесь результатами с другими спортсменами в профильных группах или личных сообщениях",
  },
  {
    name: "Зарабатывайте",
    description:
      "Платформа предоставляет полный функционал для ведения персональных тренировок за плату",
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
