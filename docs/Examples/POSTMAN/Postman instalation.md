---
sidebar_position: 2
sidebar_label: Postman instalation
---


**Install Postman in Ubuntu:**
```
sudo snap install postman
```

This command installs Postman using the Snap package manager.

**Extract the installation archive:**

```
tar -xzf Postman-linux-x64-5.3.2.tar.gz
```

This command unpacks the downloaded Postman archive file.

**Remove any previous version (optional):**
```
sudo rm -rf /opt/Postman
```
This removes any previous version of Postman that may exist in the /opt/Postman directory.

**Move Postman to a specific directory:**
```
sudo mv Postman /opt/Postman
```
It moves the extracted Postman folder to the /opt/Postman directory.

**Create a symbolic link:**
```
sudo ln -s /opt/Postman/Postman /usr/bin/postman
```
This creates a symbolic link so you can easily run Postman from the command line using the postman command.

**Create a desktop launcher file:**
```
cat > ~/.local/share/applications/postman.desktop <<EOL
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=postman
# Before v6.1.2
# Icon=/opt/Postman/resources/app/assets/icon.png
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
EOL
```
This creates a desktop file named postman.desktop, allowing you to launch Postman from the applications menu. This file will be saved in ~/.local/share/applications/.

**Remove the compressed file (optional):**

```
rm Postman-linux-x64-5.3.2.tar.gz
```
This deletes the compressed file that was unpacked in step 2.

These steps guide you through the process of installing and setting up Postman on your Linux system.

**To install Postman on Windows, follow these steps:**

**Download the Postman installer:** Visit the official Postman website at getpostman.com and download the Postman installer for Windows.

**Run the installer:** Once the download is complete, double-click the downloaded file to run the Postman installer.

**Follow the installation instructions:** Follow the installer instructions to complete the installation process. Be sure to read and accept the terms of service and terms of use if prompted.

**Select installation options:** During installation, you may be prompted to choose some configuration options, such as the installation location and whether you want to create shortcuts on the desktop or in the start menu. Select the options according to your preferences.

**Finish the installation:** Once the installation is complete, click "Finish" or "Close" to exit the installer.

**Start Postman:** After installation, you can start Postman from the Windows Start menu or by double-clicking on the shortcut created on the desktop.

**Finish the installation:** Once the installation is complete, click "Finish" or "Close" to exit the installer.


And that's it! You should now have Postman installed and ready to use on your Windows computer.

**To install Postman on macOS, follow these steps:**

**Download the Postman installer:** Visit the official Postman website at getpostman.com and download the Postman installer for macOS.

**Open the downloaded file:** Once the download is complete, double-click the downloaded file (usually found in the "Downloads" folder on your computer) to open it.

**Drag Postman to the Applications folder:** In the window that opens, you will see the Postman icon and the Applications folder. Simply drag the Postman icon to the Applications folder to install it.

**Wait for the copy to finish:** Copying Postman to the Applications folder may take a few moments. Once it completes, you will see the Postman icon in the Applications folder.

**Open Postman:** Go to the Applications folder and click on the Postman icon to open the application.


And that's it! You should now have Postman installed and ready to use on your Mac. You can find it in the Applications folder or search for it using Spotlight.
