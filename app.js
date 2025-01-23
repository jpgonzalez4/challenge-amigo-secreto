// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function agregarAmigo() {
  let addedFriend = document.getElementById("amigo").value;
  if (addedFriend === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  friends.push(addedFriend);
  document.getElementById("amigo").value = "";
  actualizarAmigos();
}

function actualizarAmigos() {
    let friendShower = document.getElementById("listaAmigos");
    friendShower.innerHTML = "";

    for (let index = 0; index < friends.length; index++) {
        const friendName = friends[index];
        friendShower.innerHTML += `<li>${friendName}</li>`;
    }
  }

function sortearAmigo() {
    if (friends.length === 0) {
        alert("Por favor, agregue amigos a ser sorteados.");
        return;
    }
    let sortedFriend = friends[Math.floor(Math.random() * friends.length)];
    let sortedFriendShower = document.getElementById("resultado");
    sortedFriendShower.innerHTML = `Ha sido sorteado el amigo: ${sortedFriend}`;
  }