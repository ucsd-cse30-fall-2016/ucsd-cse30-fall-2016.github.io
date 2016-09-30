---
topic: "Emulating the Raspberry Pi on ieng6 servers"
desc: "Tutorial for ieng6 servers"
---

## Run a raspberry pi emulation environment on ieng6 servers

* Step 1: Log into your cs30fxx account on the ieng6 servers or lab machines. Although you may do the following steps over ssh, note that the image file that you create in the /scratch/ directory may not be available to you in the next login session because /scratch/ is a local file system. If you do the process below on a physical machine in B230, your changes will persist on that machine. If you are not able to be physical present in the labs just yet, try to the following steps over ssh just as a practice with running your emulation environment on ieng6. Login over ssh as follows:

```
$ ssh -Y cs30fxx@ieng6-240.ucsd.edu

```

* Step 2: Create an account specific directory in the scratch folder and copy the provided image files by running the following commands:

``` 
[cs30fxx@ieng6-240]:~:1$ mkdir /scratch/cs30fxx/
[cs30fxx@ieng6-240]:~:2$ cp ../public/images/* /scratch/cs30fxx/

```

Note: Replace cs30fxx with your account name

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

Note: Take note of the number that the script outputs


* Step 5: Open the `run_qemu` script in your home directory and replace the two instances of `cs30fzz` with your account name. Replace the word "PORT" by the port number that the script gace you. Save and close the file

* Step 5: Run the emulator by running the `run_qemu` script as follows:


```

[cs30fxx@ieng6-240]:~:1$ ./run_qemu 

```

Note: Unlike docker, it will take a few minutes for Raspian to boot up. After it boots up you should get a prompt to login. Login with username `pi` and password `raspberry`

* Step 6: After logging into raspian, change your password using the `raspi-config` tool. 

	* Run `$ sudo raspi-config`

	* Use your cursor to navigate to Option 2: "Change User Password". Press enter

	* Enter your new password at the prompt "Enter new UNIX password:". After you enter your password, you will get back the raspi-config screen. Press "tab" to select Finish, then press enter to exit the configuration screen.

* Step 7: If you want another Raspian shell, you don't have to run qemu again. Instead open another terminal and connect to your emulated session over ssh as follows

```
ssh pi@localhost -p 30223

```

Replace 30223 with the port number that the `find_port` script gave you earlier

Note: Your image file will only be present locally on the machine that you logged in and not over the network because it is in the /scratch/ folder. So, if you logged in at a later time into that very same physical machine, the image should be available to you.

Note: We have put in a request to increase your disk quota space so that images can be stored in your home directory. We will update you over Piazza when thsi becomes available.

