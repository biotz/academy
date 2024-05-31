---
sidebar_position: 2
sidebar_label: Postman instalation
---


### Install Postman in Ubuntu

You can install Postman on Ubuntu using either the snap package or the tar.gz archive. Here are the steps for each method:

#### Method 1: Using Snap (Recommended)
This method installs Postman in a single step.

1. Open your terminal.
2. Run the following command:
    ```bash
    sudo snap install postman
    ```

#### Method 2: Using tar.gz Archive
This method involves downloading, extracting, and setting up Postman manually.

1. Open your terminal.
2. Download the latest Postman archive:
    ```bash
    wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
    ```
3. Extract the downloaded archive:
    ```bash
    tar -xzf postman.tar.gz
    ```
4. Move the extracted Postman directory to `/opt`:
    ```bash
    sudo mv Postman /opt/Postman
    ```
5. Create a symbolic link to make Postman accessible from anywhere:
    ```bash
    sudo ln -s /opt/Postman/Postman /usr/bin/postman
    ```

Both methods will successfully install Postman on your system. Choose the method that best suits your preference.

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

## To install Postman on Windows, follow these steps:

**Download the Postman installer:** Visit the official Postman website at getpostman.com and download the Postman installer for Windows.

**Run the installer:** Once the download is complete, double-click the downloaded file to run the Postman installer.

**Follow the installation instructions:** Follow the installer instructions to complete the installation process. Be sure to read and accept the terms of service and terms of use if prompted.

**Select installation options:** During installation, you may be prompted to choose some configuration options, such as the installation location and whether you want to create shortcuts on the desktop or in the start menu. Select the options according to your preferences.

**Finish the installation:** Once the installation is complete, click "Finish" or "Close" to exit the installer.

**Start Postman:** After installation, you can start Postman from the Windows Start menu or by double-clicking on the shortcut created on the desktop.

**Finish the installation:** Once the installation is complete, click "Finish" or "Close" to exit the installer.


And that's it! You should now have Postman installed and ready to use on your Windows computer.

## To install Postman on macOS, follow these steps:

**Download the Postman installer:** Visit the official Postman website at getpostman.com and download the Postman installer for macOS.

**Open the downloaded file:** Once the download is complete, double-click the downloaded file (usually found in the "Downloads" folder on your computer) to open it.

**Drag Postman to the Applications folder:** In the window that opens, you will see the Postman icon and the Applications folder. Simply drag the Postman icon to the Applications folder to install it.

**Wait for the copy to finish:** Copying Postman to the Applications folder may take a few moments. Once it completes, you will see the Postman icon in the Applications folder.

**Open Postman:** Go to the Applications folder and click on the Postman icon to open the application.


And that's it! You should now have Postman installed and ready to use on your Mac. You can find it in the Applications folder or search for it using Spotlight.
