/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 */
export default class UserTable {
  constructor(users) {
    const table = document.createElement("table"); // создать таблицу
    const tbody = document.createElement("tbody"); // создать тело таблицы

    // создать заголовки таблицы
    const thead = `
      <thead>
         <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
         </tr>
      </thead>
    `;
    table.innerHTML = thead;

    // тело таблицы
    table.appendChild(tbody);
    // заполнить контентом тело таблицы
    for (let user of users) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.salary}</td>
          <td>${user.city}</td>
          <td>
            <button class="closeButton">X</button>
          </td>
      `;
      tbody.appendChild(tr); // появись контент в теле таблицы
    }
    console.log(table);
    this.elem = table;
  }

  deleteRowOnClick() {

  }
}
