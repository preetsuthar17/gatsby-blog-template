---
title: "Python Text to Speech Converter."
date: 2022-02-10
tags: ["python"]
---

Speech recognition is very useful! It can be used in so many applications or programs like it can be used for home automation systems, artificial intelligence, etc. so in this article, you'll learn how to make basic text-to-speech programs using python.

## Installation required

Python (it's very obvious. to install python go to https://www.python.org/downloads/ and download python)

Speech Recognition module

```bash
pip install SpeechRecognition
```

pyAudio module

```bash
pip install pyAudio
```

> NOTE: if you get errors while installing pyAudio check out this question from StackOverflow [Here](https://stackoverflow.com/questions/52283840/i-cant-install-pyaudio-on-windows-how-to-solve-error-microsoft-visual-c-14)

pyttsx3 module

```bash
pip install pyttsx3
```

## Speech Input Using a Microphone and Translation of Speech to Text

Here is code that shows how to implement features and functions from the speech recognition module

```py

import speech_recognition as sr
import pyttsx3

# Initialize the recognizer
r = sr.Recognizer()

# Function to convert text to speech
def SpeakText(command):

    # Initialize the engine
    engine = pyttsx3.init()
    engine.say(command)
    engine.runAndWait()


# Loop infinitely for the user to speak

while True:

    # Exception handling to handle
    # exceptions at the runtime
    try:

        # use the microphone as the source for input.
        with sr.Microphone() as source:

            # wait for a second to let the recognizer
            # adjust the energy threshold based on
            # the surrounding noise level
            r.adjust_for_ambient_noise(source, duration=0.2)

            #listens for the user's input
            audio = r.listen(source)

            # Using ggogle to recognize audio
            user_input = r.recognize_google(audio)
            user_input = user_input.lower()

            print("User: "+user_input)
            SpeakText(user_input)

    except Exception as e:
        print(e)
```

So yeah that was here I wanna wrap things here make sure to comment if you have any queries regarding this blog see ya <3
