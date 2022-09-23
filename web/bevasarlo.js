//tömb létrehozása

let tomb=[{"nev":"tej" , "ar":500},
{"nev":"tojás" , "ar":200},
{"nev":"kenyér" , "ar":1000}]

let tomb2=[{"nev":"","ar":0}]

function Hozzaad()
{
    var x=document.getElementById('termeknev').value 
    
    console.log(x)
}
//termékek összértéknek meghatározása
function ar_meghatarozas()
{
    var ossz=0
    for(var elem of tomb)
    {
        ossz+=elem.ar
    }
    return ossz
}
//kiadás figyelés
function max_koltes()
{
    var maximum_koltes=2000
    var logikai =false
    var hiba_uzenet="Tulsokat költöttél!Tedd vissza valamelyik terméket!"
    var uzenet=""
    if(ar_meghatarozas()>maximum_koltes)
    {
        logikai=true
    
    }
    else
    {
        logikai=false
       
    }
   if( logikai==true)
    {
        return hiba_uzenet
    }
    else
    {
        return uzenet
    }
}

   
    console.log("A termékek összértéke:",ar_meghatarozas()+"ft")
    console.log(max_koltes())
    console.log(tomb2)

console.log(tomb)

