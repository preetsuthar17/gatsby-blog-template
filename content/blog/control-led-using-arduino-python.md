---
title: "Control Arduino using Python"
date: 2021-12-27
tags: ["python"]
---

Arduino is the most popular thing in those days and you can do so many things using arduino, but using arduino with combination of python gonna blow up i mean you can almost do anything you want using arduino with python and in this blog we are gonna control our led using Arduino UNO, Python and pyfirmata package for arduino.

![Arduino UNO Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xldw1re0qtsohf6uu2ea.png)

This is arduino uno make sure to connect arduino uno with your computer via arduino cable. i guess you mught might have some basic knowledge of arduino and python!

After connecting arduino with python open main arduino software.

![Tools](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pvpzsvl090m4z72mm04b.png)

And then select COM port where you have connect your arduino mine is COM4 you should check yours!

![Select COM PORT](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r3me4irchlxktedsrkkd.png)

Then you gotta click on Tools and then Manage Libraries, or press `ctrl + shift + i`

![Manage Libraries](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8wokidthuah9chkyk3yr.png)

It will open tab something like this,

![Manage Libraries tab](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8bb1acsq3lf128udt7k5.png)

Then click on search bar and search for `firmata`, select the latest version and press `enter`

![Install firmata](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ndt1jynaiuryjotyb7br.png)

nice now close that tab and go to file tab, then goto examples then firmata then standardFirmata.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l1usb9734352ii5it5wy.png)

You will get some code in your arduino IDE

![Arduino Code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s08vflqgk6jyukcbjnb3.png)

just hit Upload but make sure that your arduino is connected to your computer perfectly and main COM port is selected!

![HIT Enter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xa8pg00vur17xxkx6n3z.png)

work of arduino ide is done now open your favourite code editor!

and create a new python file `automation.py`

now get an LED yourself and put small rode of led inside gnd port in arduino and pur bigger rode inside digital pin 5.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qc8gmy6ucjdwm824tfhe.png)

here resistor is optional!

now it's time to code in our `automation.py` file!

here is the code

```py
# import modules
from pyfirmata import Arduino, pyfirmata
import time

port = 'COM4' #define COM port which you choose in Arduino IDE
pin = 5 # Put the number of digital pin where black wire is connected in circuit
board = Arduino(port) # define board

board.digital[pin].mode = pyfirmata.OUTPUT # define output mode

# create function to turn on and off led
def turn_on_led():
    board.digital[pin].write(1) # 1 means power on
def turn_off_led():
    board.digital[pin].write(0) # 0 means power off

while True:
    turn_on_led() # call the function
    time.sleep(2) # wait for 2 seconds and turn off led!
    turn_off_led() # call the function
```

So yeah that was the whole code and procedure to control LED light using python and arduino make sure to follow!
