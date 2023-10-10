## loggbok

## 2023-10-09
skapade och installerade npm
Skrev i planeringen och skapade Player.js och Game.js i src mappen
Skrev över koden från instruktions git sidan in i Game.js och Player.js

## 2023-10-10
 gjorde  klart hela InputHandler och 90% av Projectiles:

Skapade InputHandler.js där jag matade in alla inputs som behövdes.

Detta gjorde så att jag kunde styra spelar rektangeln med arrow keysen.

efter så justerade jag i Player.js för att det är spelaren man ska kunna styra och ska updateras. Det löstes genom att skriva in speedX och speedY metoderna i player.js > update

Nu när man kan röra på sig så måste man ha något att skjuta med. Så jag skapade projectiles genom att skapa en js för den. projectiles.js behöver också en inmatning och allt sånt fanns i Inputhandler.js, så jag gick in i filen och lade till en metod för den. Tog samma event.key metod som raden ovan men valde "t" istället, och hade en rad kod som sa till den att skjuta då de "t" trycks.

Enda problemen jag hade idag var att jag råkade röra ihop måsvingarna {} då och då, men löstes lätt genom att kolla igenom vilka som hör till vilka. Och några enstaka stavfel.
