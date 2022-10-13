// const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const input = document.querySelector('#input')
const div = document.querySelector('#div')
const btn = document.querySelector('#btn')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()
// const recognitionList = new SpeechGrammarList()


// recognitionList.addFromString(grammar, 1)
recognition.continuous = false
recognition.lang = 'en-US'

btn.addEventListener('click', (e) => {
    e.preventDefault();
    recognition.start()
})

recognition.onresult = (e) => {
    input.value = e.results[0][0].transcript
    console.log(e)
}


console.log(window)




