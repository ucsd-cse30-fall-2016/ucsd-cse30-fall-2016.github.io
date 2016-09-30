---
topic: "Emulating the Raspberry Pi on ieng6 servers"
desc: "Tutorial for ieng6 servers"
---

## Run a raspberry pi emulation environment on ieng6 servers

* Step 1: Log into your cs30fxx account on the ieng6 servers or lab machines. To login remotely over ssh run:

```
$ ssh -Y cs30fxx@ieng6-240.ucsd.edu

```

* Step 2: Create a new directory to stores images and copy over the Raspian image and a kernel image that qemu requires :

``` 
[cs30fxx@ieng6-240]:~:1$ mkdir images
[cs30fxx@ieng6-240]:~:2$ cp ../public/images/* ./images/

```
Note: The images are failry large. So, it will take a while for the copy to complete. Be patient. If you get a disk quota error, let us know and we will increase your disk space.

* Step 3: Copy a script to run the emulator from the public directory and to find available ports

```

[cs30fxx@ieng6-240]:~:1$ cp ../public/run_qemu ./
[cs30fxx@ieng6-240]:~:1$ cp ../public/bin/find_open_port ./

```

* Step 4: Run the `find_open_port` script to find an available tcp port. 

```
[cs30fxx@ieng6-240]:test_qemu:118$ ./find_open_port 
30223
```

Note: Take note of the number that the script outputs. You will use it when running the next script


* Step 5: Run`run_qemu` script in your home directory as follows

```

[cs30fxx@ieng6-240]:~:1$ ./run_qemu PORT_NUMBER

```

In the above example PORT_NUMBER is 30223

Note: Unlike docker, it will take a few minutes for Raspian to boot up. After it boots up you should get a prompt to login. Login with username `pi` and password `raspberry`

* Step 6: After logging into raspian, change your password using the `raspi-config` tool. 

	* Run `$ sudo raspi-config`, you will see a graphical menu that you can navigate with arrow, tab and enter keys

	* Use the down arrow key to navigate to Option 2: "Change User Password". Press enter

	* Enter your new password at the prompt "Enter new UNIX password:". After you enter your password, you will get back the raspi-config screen. Press "tab" to select Finish, then press enter to exit the configuration screen.

* Step 7: If you want another Raspian shell, you don't have to run qemu again. Instead open another terminal and connect to your emulated session over ssh as follows

```
ssh pi@localhost -p PORT_NUMBER

```

Replace PORT_NUMBER with the port number that the `find_port` script gave you earlier






