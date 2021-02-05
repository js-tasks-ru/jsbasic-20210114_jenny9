/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let tagUl = document.createElement('ul');

  friends.forEach(function(item) {
    let tagsLi = document.createElement('li');
    tagsLi.innerHTML = item[0] + item[1];
    tagUl.append(tagsLi);
  });
  return tagUl;
}


