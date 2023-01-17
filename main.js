var names = ["Top 10 Melhores Jogadores do Mundo", "1° Lionel Messi ", " 2° Cristiano Ronaldo ", " 3° Pelé ", " 4° Diego Armando Maradona ", " 5° Ronaldinho Gaúcho ", " 6° Johan Cruijff ", " 7° Mohamed Salah ", " 8° Ronaldo Fenômeno ", " 9° Robert Lewandowski ", " 10° Gullit "];
var images = ["Los Mejores Del Mundo.jpg", "messi.webp", "cristianoRonaldo.webp", "pelé.jpeg", "maradona.webp", "ronaldinho.jpeg", "crufi.jpg", "salah.jpgg.jpg", "Fenômeno.webp", "Lewandowski.jpeg", "gullit.jpg"];
var i = 0;
    function update() 
    {
        i++;
        var numbersOfFamilyMemberInArray = 10;
        if(i > numbersOfFamilyMemberInArray) {
            i = 0;
        }
        var updateImage = images[i];
        var updateName = names[i];
        document.getElementById("familyMemberImage").src = updateImage;
        document.getElementById("familyMemberName").innerHTML = updateName;
    }