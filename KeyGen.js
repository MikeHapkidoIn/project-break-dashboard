

const displayPassword = document.getElementById("displayPassword")
const passwordLongitud = document.getElementById("passwordLongitud");
const boton = document.getElementById("boton");

const letrasMayus = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const letrasMinus = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
const numeros = [0,1,2,3,4,5,6,7,8,9];
const symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];

const all = [...letrasMayus, ...letrasMinus, ...symbols, ...numeros]

const setPassword = (length = 12) => {
    let password = "";

    password += letrasMayus [ Math.floor(Math.random()* letrasMayus.length)];
    password += letrasMinus [ Math.floor(Math.random()* letrasMinus.length)];
    password += numeros [ Math.floor(Math.random()* numeros.length)];
    password += symbols [ Math.floor(Math.random()* symbols.length)];

    for (let i = 4; i < length; i++){
        password += all [Math.floor(Math.random() * all.length)];
    }

    password = password.split ("").sort(() => Math.random() -0.5).join("");

    return password;

   
}
    
const getPasswordLongitud = () => {
    let passwordLenght = parseInt ( passwordLongitud.value);

    if (passwordLenght < 12 || passwordLenght > 50) {
        displayPassword.innerHTML = "Introduce un numero de caracteres entre 12 y 50";
        return
    }

    const getPassword = setPassword(passwordLenght);

displayPassword.innerHTML = `
    <div>
      <p>Tu nueva constraseña es: </p>
      <div class='displayPassword'>${getPassword}</div>
      <p>¡¡Que no se te olvide apuntarla!!</p>
    </div>`
}

boton.addEventListener('click', getPasswordLongitud);







