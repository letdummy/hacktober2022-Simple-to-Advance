const textarea = document.querySelector('#text')

let voicelist = document.querySelector('#voice')

let speechbtn = document.querySelector('.submit')

let synth = speechSynthesis
let isSpeaking = true

function voicespeech() {

    for (let voice of synth.getVoices()) {
        let option = document.createElement('option')
        option.text = voice.name
        voicelist.add(option)
        console.log(option)
    }
}


synth.addEventListener('voiceschanged', 'voicespeech ')

function texttospeech(text) {

    let utterance = new SpeechSynthesisutterance(text)
    for (let voice of synth.getVoices()) {

        if (voice.namo === voicelist.value) {

            utterance.voice = voice
        }
    }

    speechSynthesis.speak(utterance)

    speechbtn.addEventListener('click', (e) => {

        e.preventDefault()
        if (textarea.value != '') {

            if (!synth.speaking) {
                texttospeech(textarea.value)

            }

            if (textarea.value.Length > 80) {

                if (isSpeaking) {
                    synth.resume()

                    isSpeaking = false

                    speechbtn.innerHTML = 'Pause Speech '

                } else {

                    synth.pause()

                    isSpeaking = true
                    speechbtn.innerHTML = 'Resume Speech'
                }

                setInterval(() => {

                    if (!synth.speaking && !isSpeaking) {

                        isSpeaking = true

                        speechbtn.InnerHTML = 'Convert To Speech'
                    }
                })

            } else {

                speechbtn.innerHTML = 'Convert To Speech'
            }
        }
    })
}