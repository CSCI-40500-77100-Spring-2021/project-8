//This component uses SpeechRecognition to transcribe text 
//Add another component to send transcript to the chatbot API

'use strict'
import React, { Component } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import Button from 'react-bootstrap/Button'

const Dictaphone = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div>
            <Button variant="primary" onClick={SpeechRecognition.startListening}>Start</Button>
            <Button variant="secondary" onClick={SpeechRecognition.stopListening}>Stop</Button>
            <Button variant="dark" onClick={resetTranscript}>Reset</Button>
            <p>{transcript}</p>
        </div>
    )
}
export default Dictaphone
