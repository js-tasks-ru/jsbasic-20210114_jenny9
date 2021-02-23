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
  constructor(rows) {
    const table = document.createElement("table"); // создать таблицу
    this.table = table;
    const tbody = document.createElement("tbody"); // создать тело таблицы

    // создать заголовки таблицы
    const tableHeader = `
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
    table.innerHTML = tableHeader;

    table.appendChild(tbody); // тело таблицы появись

    for (let user of rows) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.salary}</td>
          <td>${user.city}</td>
          <td>
            <button class="closeButton">X</button>
          </td>
      `;
      tbody.append(tr); // появись контент в теле таблицы
    }
  }

  // метод удаления строки по нажатию кнопки
  deleteRowOnClick() {

  }
}
