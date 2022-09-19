Project for raspberry pi and 3.5 lcd screen

Run the project with
`yarn dev`

Setting up
You need to have installed desktop version of OS and Chromium. For example, if you have no desktop environment, you can install PIXEL Desktop — default DE for Raspbian OS.

`apt install -y raspberrypi-ui-mods chromium-browser`
Of course, you can install desktop environment by yourself, so if you do, then you will have no problems with installing Chromium and setting up boot script correctly.

Also you need to install a package unclutter that will hide a cursor.

`apt install -y unclutter`
Create a directory for config file if it is not exist.

`mkdir -p /home/pi/.config/lxsession/LXDE-pi/`
Set up a script which run on desktop environment start.

`nano /home/pi/.config/lxsession/LXDE-pi/autostart`
Place here a config.

Also command for external run project
`yarn --cwd  /home/pi/Projects/clock-pi/  dev`

```
@xset s off
@xset -dpms
@xset s noblank
@chromium-browser --kiosk --incognito -disable-translate --app=https://localhost:3000
@unclutter -idle 0
Now you can restart RPi and see a result.
```
