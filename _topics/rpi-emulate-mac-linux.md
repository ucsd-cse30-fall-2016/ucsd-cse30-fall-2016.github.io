---
topic: "Emulating the Raspberry Pi with docker"
desc: "Tutorial for MAC OSX and Linux"
---

## Set up a raspberry pi emulation environment on MAC OSX or Linux

Follow these steps on MAC OSX or Linux machine:

1. Install Docker Engine following the instructions appropriate for your OS from the [docker website](https://docs.docker.com/engine/installation/)

2. Install the packages: qemu (and qemu-user-static on linux)
For MAC OSX, run

```
$ brew install qemu
```

On linux, Debian or ubuntu, run

```
$ apt-get install qemu 
$ apt-get install qemu-user-static
```
3. Download the zipped [Raspian Jessie Lite image](https://www.raspberrypi.org/downloads/raspbian/) and place it in some local directory (say ~/images). Unzip the image.

4. Run the following docker command to pull the image and start a bash shell in Raspian

```
$ docker run -it --rm --privileged=true -v IMAGE_LOCATION:/usr/rpi/images -w /usr/rpi ryankurte/docker-rpi-emu /bin/bash -c './run.sh images/IMAGE_NAME [COMMAND]'
```

In the above command, IMAGE_LOCATION is the directory containing your Raspbian image to be mounted, IMAGE_NAME is the name of the image to be used, and [COMMAND] is the optional command to be executed (inside the image). For example if the IMAGE_LOCATION is  `/Users/diba/git/emulate-pi-docker/images` and the IMAGE_NAME is `2016-05-27-raspbian-jessie-lite.img`, then you should run the command:

```
docker run -it --rm --privileged=true -v /Users/diba/git/emulate-pi-docker/images:/usr/rpi/images -w /usr/rpi ryankurte/docker-rpi-emu /bin/bash -c './run.sh images/2016-05-27-raspbian-jessie-lite.img /bin/bash'
```

If you are running the above command for the first time, the docker image `ryankurte/docker-rpi-emu` is not on your local machine and docker will try to pull the image. It also attempts to start a bash shell in the raspian image. Once the docker image is available locally this command will run much faster and should produce the following output

```
Attempting to mount images/2016-05-27-raspbian-jessie-lite.img to /media/rpi
Attached base loopback at: /dev/loop0
Located partitions: p1 (/boot) at 8192 and p2 (/) at 137216
Closed loopback /dev/loop0
Mounted to /media/rpi and /media/rpi/boot
Bootstrapping Qemu
root@891796c67246:/#
```

This shows that you have successfully started emulating the raspberry pi and are running a single bash process as root within the raspian image. To get information about the system that you are emulating run the uname command:

```
$ uname -a
```

The above will print all the information about yout system and should give you the following output:

```
root@3f8b1662662a:/# uname -a
Linux 3f8b1662662a 4.4.15-moby #1 SMP Thu Jul 28 22:03:07 UTC 2016 armv7l GNU/Linux
root@3f8b1662662a:/#
```

Try `pwd` and `ls` to get your coorinates on the raspian image and view the files under the root directory.

To change to user pi run the following command:

```
$su pi
```

Play around with your favorite unix commands! Any new packages you install will be saved on the raspian image. You can take this same image burn it on an SD card and use it with teh actual hardware - how cool is that!

Do an update on your raspian image as follows:

```
$ sudo apt-get update
```

Okay, now let's install a package! Let's install git using the `sudo apt-get install` command. Try the following:

```
$ sudo apt-get install git
```

Once you have successfully installed git, complete the [git one-time configuration tutorial](/topics/git_one_time_config/).

As you continue to work on your raspian image you may need to install other linux packages. Remember you can use the command `sudo apt-get install <package>` to install packages.

To exit your raspberry pi session, simply type exit at the bash prompt
All changes made to the raspberry pi image will persist.











