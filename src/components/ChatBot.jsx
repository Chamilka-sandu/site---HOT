import React, { useState } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';
const config = {
   width: "400px",
  height: "500px",
  floating: true,
  top: "50px",
  left: "10px"
  
};

function App4() {
  const [headerTitle, setHeaderTitle] = useState('Welcome');

  const handleTitleChange = (newTitle) => {
    setHeaderTitle(newTitle);
  }

  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'What would you like to talk about?',
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: 'react', label: 'Academic', trigger: () => handleTitleChange('Acedamic') },
        { value: 'chatbots', label: 'Exam', trigger: () => handleTitleChange('Exam') },
        { value: 'ai', label: ' Staff', trigger: () => handleTitleChange('Staff') },
      ],
    },
  ];

  const handleEnd = ({ renderedSteps, steps }) => {
    const lastStep = renderedSteps[renderedSteps.length - 1];
    const lastMessage = lastStep.message;
    console.log(lastMessage);
  };

  return (
    <div>
      <h1>{headerTitle}</h1>
      <ChatBot
        steps={steps}
        handleEnd={handleEnd}
        headerTitle={headerTitle}
        recognitionEnable={true}
        botDelay={1000}
        loadingComponent={Loading}
        botAvatar={"https://avatars.githubusercontent.com/u/58495524?s=400&v=4"}
        userAvatar={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"}
                  {...config}

      />
    </div>
  );
}

export default App4;
