---
topic: "Raspberry Pi: Remote Access"
desc: " connecting remotely to your Pi over ssh or remote desktop"
---

# Accessing your Pi remotely

To access your Pi remotely you must have internet access. 
We highly recommend connecting your Pi over the UCSD-PROTECTED network. However, if you are unable to connect to UCSD-PROTECTED, you may connect on UCSD-GUEST or your home Wifi and use a service like [weaved](https://www.raspberrypi.org/documentation/remote-access/access-over-Internet/README.md) to access your Pi remotely. The downside of weaved is that the free plan only allows for 30 minute long sessions.


## Remote ssh 

If your Pi is connected over UCSD-PROTECTED you can ssh into your Pi from any other machine using your Pi's unique hostname:

```

$ ssh -Y pi@spispi-xy71.dynamic.ucsd.edu

```

Assumes the hostname is `spispi-xy71`, your hostname should be different.

If you ssh with the -Y option you may use graphical applications such as gvim (assuming these have been installed on your Pi)

If your Pi is connected over UCSD-GUEST or your home wifi, log into your [weaved account](https://developer.weaved.com/portal/members/home.php). Click on the service name that you already created on your Pi. In the example below, the service I had previously created is `ssh-pidiba`. Read the instructions on the weaved website on creating a [weaved ssh service on your Pi](https://www.weaved.com/installing-weaved-raspberry-pi-raspbian-os/) 

<p align="center">
![rpi-wpa](/topics/RPi/RPi-weaved.png){:height="300px"}
</p>


Clicking on the session name makes an ssh session available for 30 minutes. Be sure to save your work and renew your session.

<p align="center">
![rpi-wpa](/topics/RPi/RPi-weaved-ssh.png){:height="300px"}
</p>

In the above example you may ssh as follows:

```

$ ssh -Y -l pi proxya.yoics.net -p 36624

```


# Remote desktop

You don't really need a remote desktop to complete the lab assignments but if you'd like to try it out, follow these steps.

* ssh into your pi (see previous section)
* start the vncserver service on the Pi

```
$ sudo vncserver

```

On your laptop you may use any remote desktop application like [CorD](http://cord.sourceforge.net/) or Windows Remote Desktop (comes with Windows)

