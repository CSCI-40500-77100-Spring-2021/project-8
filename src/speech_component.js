//This component uses SpeechRecognition to transcribe text
//Add another component to send transcript to the chatbot API

"use strict";
import React, { Component } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Paper, Button, ButtonGroup } from "@material-ui/core";

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button color="primary" onClick={SpeechRecognition.startListening}>
          Start
        </Button>
        <Button color="secondary" onClick={SpeechRecognition.stopListening}>
          Stop
        </Button>
        <Button color="primary" onClick={resetTranscript}>
          Reset
        </Button>
      </ButtonGroup>
      <Paper>
        <p>{transcript}</p>
      </Paper>
    </div>
  );
};
export default Dictaphone;
