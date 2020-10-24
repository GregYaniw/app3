import React from 'react';

interface Props {
  text: string;
}

const Text: React.FC<Props> = ({text}) => {
  const test: string = '123'
  return (
    <div className="App">
      Hello {text}
    </div>
  );
}

export default Text;
