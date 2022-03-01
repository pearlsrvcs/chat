import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ChatBot from './react-simple-chatbot/lib/ChatBot';

const steps = [
  {
    id: '1',
    message: 'What would you like to search?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Standards Catalog', trigger: '3' },
      { value: 2, label: 'Tech Stack', trigger: '4' },
      { value: 2, label: 'Documents', trigger: '5' }
    ],
  },  
  {
    id: '3',
    message: 'Enter a Search Value.',      
    trigger: 'S',
  },
  {
    id: '4',
    message: 'Enter a Search Value',   
    trigger: 'T',
  },
  {
    id: '5',
    message: 'Enter a Search Value',
    trigger: 'D',
  },
  {
    id: 'S',
    user: true,
    trigger: 'Standards',
  },
  {
    id: 'T',
    user: true,
    trigger: 'TechStack',
  },
  {
    id: 'D',
    user: true,
    trigger: 'Documents',
  },
  {
  id: 'Standards',
    message: 'Let me search for {previousValue} in the Standards Catalog',   
    end: true,
  },
  {
    id: 'TechStack',
    message: 'Let me search for {previousValue} in the Tech Stack',
    end: true,
  },
    {
    id: 'Documents',
    message: 'Let me search for {previousValue} in Documents',
    end: true,
    trigger: 'Documents',
  },
]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF0000',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FF0000',
  botFontColor: '#FFF',
  userBubbleColor: '#FFF',
  userFontColor: '#4a4a4a',
};

ReactDOM.render(
  < ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ ThemeProvider>,
  document.getElementById('root')
);