
const newvar = ["happy", "happy new year","h"]
newvar.sort()
console.log(newvar)
document.write(newvar)
alert(newvar)

let TruFilm = "Донни Дарко";
let UserFilm = prompt("Какой мой любимый фильм?");
FilmQuiz (UserFilm,TruFilm);

function FilmQuiz (UserFilm,TruFilm) {
    if (UserFilm == TruFilm) { alert("Правильно, вы угадали!")
    } else {  alert("Неправильно, попробуйте еще раз")
    };
};

