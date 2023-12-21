function checkWord() {
    document.body.style.backgroundImage = 'url(bg.png)';
    var inputWord = document.getElementById('searchtext').value;
    let vid = document.getElementById("myVideo");
    document.getElementById('myVideo').style.display = 'block';
    vid.play();

    if (inputWord.length === 7) {
        var a = 7 - inputWord.length;
        thala = inputWord + " = " + inputWord.length + " = 7 Thala For A Reason🗿!"
        console.log(thala)
        document.getElementById('thalaBolte').innerHTML = thala;
    } else if (inputWord.length < 7) {

        var a = 7 - inputWord.length;
        thala = inputWord + " = " + inputWord.length + " + " + a + " = 7 Thala For A Reason🗿!"
        console.log(thala)
        document.getElementById('thalaBolte').innerHTML = thala;
    }
    else
    {
        var a = inputWord.length - 7;
        thala = inputWord + " = " + inputWord.length + " - " + a + " = 7 Thala For A Reason🗿!"
        console.log(thala)
        document.getElementById('thalaBolte').innerHTML = thala;
    }
}

let btn = document.getElementById('icon-src');
   
// when the btn is clicked print info in console 
btn.addEventListener('click', (ev)=>{
});

document.addEventListener('keypress', (event)=>{

  // event.keyCode or event.which  property will have the code of the pressed key
  let keyCode = event.keyCode ? event.keyCode : event.which;

  // 13 points the enter key
  if(keyCode === 13) {
    // call click function of the buttonn 
    btn.click();
  }
    
});



let arr = ["Have You Ever Wonder Why There Are Seven Colours In A Rainbow🌈? <br><br> - Reason is clear🙌", "Have You Ever Wonder Why There Are Seven Continents In The World🌏? <br><br> - Reason is clear🙌",
    "Have You Ever Wonder Why Renaldo's Jersey Number Is 7⚽? <br><br> - Thala Did It Again🙌", "Have You Ever Wonder Why There Are Seven Seas In A World🌊? <br><br> - Thala For A Reason🙌", "Have You Ever Wonder Why There Are Seven days of the week🍆? <br><br> - Reason is clear🙌", "Have You Ever Wonder Why There Are Seven wonders of the world🤡? <br><br> - He Did It Again🙌", "Have You Ever Wonder Why There Are Seven colours that make up the white ligh🕯️? <br><br> - Reason is clear🙌","Have You Ever Wonder Why There Are Seven musical note🎶? <br><br> - Reason is clear🙌"];

function GFG_Fun() {
   x = arr[(Math.floor(Math.random() * arr.length))];
   console.log(x);
   document.getElementById('quote').innerHTML = x;
}
GFG_Fun()

function resetPage() {
    // Reload the page
    location.reload();
}

        var contInput = document.getElementById('continput');
        var gInput = document.getElementById('input-group');
        var input = document.getElementById('searchtext');
        var button = document.getElementById('icon-src');
        var logo = document.getElementById('logo');
        var results = document.getElementById('results');
        var redBg = document.getElementById('header');

        var element = [redBg, contInput, gInput, button, logo, results];

        input.addEventListener('focus', function () {
            document.getElementById('dhek').style.display = 'none';
            document.getElementById('quote').style.display = 'none';
            document.getElementById('continput').style.marginTop = '0px';
            for (var i = 0; i < element.length; i++) {
                element[i].classList.add('focus' + i);
            }
        }, false);

        /* jquery for autocomplete*/

      