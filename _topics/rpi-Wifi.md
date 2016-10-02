---
topic: "Raspberry Pi: Checking for Wifi connectivity on the UCSD network"
desc: " checking for wifi"
---

# Checking your Wifi connectivity on the UCSD network

Examine the wifi icon on the top-right of your desktop screen. If the Raspian image you are using was configured with your UCSD-PROTECTED credentials, you should automatically be connected to UCSD-PROTECTED, although sometimes it takes a few minutes for the Pi to connect to the network after it boots up. You may also check your network connectivity via the command line. To do this open a terminal (by clicking on the terminal icon on the top left corner). Note that your command prompt should say `pi@hostname:~$`, where hostname is the unique hostname that you set for your machine. 

At the command prompt run the following command:

```
pi@spispi-xy71:~ $ hostname -I

```
If your Pi has successfully connected to UCSD-PROTECTED the above command should give an output with the following format:

```
pi@spispi-xy71:~ $ hostname -I
137.110.91.191 2607:f721:f10:4042:ccd9:c832:c742:4599 
pi@spispi-xy71:~ $ 

```

The first number "137.110.91.191" is your IP addess. You will get a different IP but as long as it starts with "137", it means you have a global IP and you can remotely access your Pi via ssh. Read the tutorial on remotely connecting to your Pi.
