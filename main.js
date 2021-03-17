var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition()

function start()
{
    console.log("start")
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event)  { 
         console.log(event);   
            var spoken = event.results[0][0].transcript;    
           document.getElementById("textbox").innerHTML = spoken; 
                  console.log(spoken);
                
                  speak();   }


                  function speak()
                  {
                      synth = window.speechSynthesis; // is the game name
                      speak_data = document.getElementById("textbox").value; // textbox is mind speak data is pictures name
                      utter = new SpeechSynthesisUtterance(speak_data) // speak data transferred to saanvis mind
                      synth.speak(utter) // saanvi acts the speak data
                 
                  Webcam.attach(camera)

                  }

                  Webcam.set({  image_format: jpg, jpg_quality: 90 })
                 camera =  document.getElementById("camera")