/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let tagUl = document.createElement('ul');

  friends.forEach(function(friend) {
    const tagsLi = document.createElement('li');
    const friendName = friend.firstName;
    const friendLastname = friend.lastName;

    tagsLi.innerHTML = friendName + " " + friendLastname;
    tagUl.append(tagsLi);
  });
  return tagUl;
}


