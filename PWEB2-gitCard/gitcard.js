let usuario = document.querySelector("#usuario-github");
let btn = document.querySelector("#buscar-github");

let avatar_link = document.querySelector(".avatar");
let avatar_img = avatar_link.querySelector("img");
let nome = document.querySelector(".content h1");
let total_repo = document.querySelectorAll(".status li a strong")[0];
let total_gist = document.querySelectorAll(".status li a strong")[1];
let total_seg = document.querySelectorAll(".status li a strong")[2];


const getGitHubInfo = function (username) {

    var api = 'https://api.github.com/users/' + username;
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax2 = JSON.parse(this.responseText);

            nome.innerText = ajax2.name;
            avatar_img.src = ajax2.avatar_url;
            total_repo.innerText = ajax2.public_repos;
            total_seg.innerText = ajax2.followers;
            total_gist.innerText = ajax2.public_gists;

        }
    };

    ajax.open('GET', api, true);
    ajax.send();

};

btn.onclick = function (e){
   e.preventDefault();
   getGitHubInfo(usuario.value);
}

