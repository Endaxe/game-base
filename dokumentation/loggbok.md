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

## 2023-10-12
//skippa sista steget i 5.(skjutcooldown)
//bytte skjut (t) => spacebar

Idag var inte lika mycket gjort men justerade i steg 5. 
Bytte inputen för skjuta från 't' => spacebar
Påbörjade steg 6 med att skapa ännu en till klass 'UserInterface'
Samma struktur som andra med construktor, draw osv. 
Fast mer fokuserad på text och font
Så skrev in vad fonten ska vara, vilken storlek och färg.
Sedan i draw så säger koden åt den och rita ut det genom att filla det och berätta X och Y offset.
//till nästa fixa if loopen för 'game over'

## 2023-10-16
Uppstart:
Lämnade av arbete i steg 6 och justerade i input klassen.
Idag ska jag åtminstone slutföra steg 6 vilket är USerInterface

//Valde att inte göra något extra den här gången på interface för det används inte förrän nästa steg, lägger till då.

Gjorde klart resterande av steg 6 vilket var att fixa måsvingar för att this.game kunde inte hittas.
Lägga till klassen i draw i Game.js.
Påbörjade Enemy smått med att Skapa en Enemy.js och lägga till grunderna som  constructor för den och draw + update.

//nästa fortsätta med koden och hinna med att göra någon feature.

## 2023-10-19

Gjorde klart grunderna med enemies genom att skapa en ny klass för den induviduella fienden vilket fivk vara en krokodil. SÅ skapade en crocodile.js där den innehöll vars den skulle läggas in hastigheten med random så att alla åker me dolika hastigheter.
I game klassen sedan så importerades koden därifrån och sa till när dem skulle läggas till och rita ut dem

Gick bra:
Löste problemet att fiender bara syntes om man tryckte på knappen d, då tänkte jag att det är ju knappen för debug. Då såg jag att draw för fienderna var i debug satsen så tog bara ut den och det funka.


## 2023-10-23

Idag så påbörjade jag på själva mario platformen som innehöll både hitbox och plattformar.
Genom att göra en platform.js så kunde jag lägga in värde för platformens position och vars den ska ritas ut. Sedan i Game klassen så skrev man in hur många som skulle ritas ut och vad som händer med spelaren om den träffar platformen (kollision). Hann fixa mark och en platform och så att spelaren kan hoppa.

## 2023-10-24

Detta lektion var för att felsöka koderna som inte funka, inkluderande kunde inte röra sig höger och vänster utan att försvinna och debugg tiden visades inte. Lyckades fixa båda idag. 

Tiden funkade inte för att i game.js så hade jag inte en variable som sa att den skulle börja/existera.
För att röra sig till sidorna så hade jag inte frameX så de försvann...............

## 2023-11-06

Idag fixade Keypress som fastna. När man höll i en tangent så trodde inputen att den fortfarande hölls in så det fortsatte oändligt. Detta hände för att alla inputs i inputhandlerna var i sina egna grupper, så dem induviduella fortsatte bara istället för att reseta. Enkel lösning: tog bort parenteserna.


## 2023-11-06

Skrev klart resterande av planeringen och påbörjat på att fixa en kamera som ska följa spelaren x och y kordinaterna. Har skapat en Camera.js klass som innehåller information om hur den ska följa player. I game.js la jag till att camera ska importeras och lade till dem som variable this.camera =... osv.

## 2023-11-09

Cameran funkar, saknade delar i koden som behövdes för att den skulle fungera, så lade till dem och justerade så att dem passsade in

Gjorde platform längre vågrätt och så att den fyllar resterande av skärmen neråt.

lade till bilderna i en mapp

## 2023-11-13

jag har börjat lägga till sprites. La till i player klassen. Där bilden importas och ritas ut på spelaren.

 Och TOG BORT PROJECTILES!!
 Det var impuls och går inte att ångra men den originella ideen behövde inte projektiles hursom.


Vad som måste fixas nästa: måste fixa till den så att den passar hitboxenoch storlekarna


## 2023-11-13
Fått bilden och synca med hitboxen men den ser fortfarande lite väl smal ut.
*Kameran är också trasig sedan förra lektionen, måste fixas.*
Börjar lite på bakgrund.

## 2023-11-30

Fortsatte med bakgrunden. Skapade layers.js som bestämmer hur bakgrunden ska röra på sig.
i backgrounds.js la jag till en skyimage och en groundimage och en update och draw function som ska fungera för varje layer.

I game importerades background och en ny instans. LAde till i update och i draw.

*Får inte det och funka, behöver hjälp nästa lektion*
