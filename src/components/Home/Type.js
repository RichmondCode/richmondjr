import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Computer Engineer',
          'Robotics Programmer',
          'Mobile Application Developer',
          'Channels Engineer',
          'Java Developer',
          'Open Source Contributor',
          'Machine Learning Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
