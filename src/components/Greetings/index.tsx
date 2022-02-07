import { useState } from 'react';
import { Button } from '../Button'
import { Container, Image, Text } from './styles'
// import sendAsync from '../Message-control/renderer';

export function Greetings() {
  const [message, setMessage] = useState('SELECT * FROM repositories');
  const [response, setResponse] = useState();

  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  function send(sql: string) {
    window.Main.send(sql).then((result: any) => {
      alert("index.tsx")
      console.log(result);
      setResponse(result)
    });
  }

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button onClick={handleSayHello}>Send message to main process</Button>
      <input
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)} />
      <button type="button" onClick={() => send(message)}>
        Send
      </button>
      <pre>
        {(response && JSON.stringify(response, null, 2)) ||
          'No query results yet!'}
      </pre>
    </Container>
  )
}

