import React from 'react';
import { Gradio } from '@gradio/react';

function GradioInterface() {
  return (
    <Gradio
      interface="sidebar"
      src="https://huggingface.co/spaces/WillySwain/parcelgradio"
      width="100%"
      height="800px"
    />
  );
}

export default GradioInterface;