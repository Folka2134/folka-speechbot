import './App.css'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

document.querySelector('button')?.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('result', (e: any) => {
  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  console.log('Confidence: ' + e.results[0][0].confidence);

  // We will use the Socket.IO here later…
});

const socket = io();

socket.emit('chat message', text);

function App() {
  return (
    <>
      <button>Talk</button>
    </>
  )
}

export default App
