---
sidebar_position: 2
sidebar_label: MQTTX instalation
---

To install MQTTX, first, Visit the official MQTTX [website](https://mqttx.app/) and select the download button and you will be sent to a page.

Choose your operating system: On the download page, identify your operating system
(Windows, macOS, Linux) and download the appropriate installer.

<div class="tutorial-image-container">
![OS](../img/operating-system.png)
</div>

**For Windows and macOS:** The download will likely be an executable file (.exe or .dmg) that
you can double-click to begin the installation process.
**For Linux:** You might have options for a DEB package, RPM package, or a standalone
executable. Choose the format that works best with your Linux distribution.
<div class="tutorial-image-container">
![Version](../img/version.png)
</div>

## Install MQTTX on Debian/Ubuntu (using commands):

### Prerequisites

Ensure you have administrator privileges (sudo access) on your system.

### Update package lists

Run the following command to update the list of available packages:

```
sudo apt update
```

### Install dependencies:
MQTTX might require additional libraries to function properly. Use this
command to install them:

```
sudo apt install libgirepository1.2-dev libqt5widgets5-dev libgqt5core5-dev
```

**Download the DEB package:** Visit the MQTTX download page again and download the DEB package for your specific version and architecture (32-bit or 64-bit).
**Install the DEB package:** Use the dpkg command to install the downloaded DEB package.
Replace path/to/mqttx.deb with the actual path to the downloaded file:
```
sudo dpkg -i path/to/mqttx.deb
```
**Resolve dependencies (if needed):** In rare cases, additional dependencies might be missing.
If you encounter errors during installation, run the following command to attempt resolving
them:
```
sudo apt --fix-broken install
```
**Verify installation:** You can try running mqttx in your terminal to launch the application. If successful, MQTTX should start.

This method assumes you prefer installing software using package managers. The
official MQTTX website might offer alternative installation methods like pre-built binaries or
Snap packages. Choose the method that best suits your needs and technical experience.

## Install MQTTX on Windows:
**Download the installer:** Visit the official MQTTX website (https://mqttx.app/downloads) and
click the download button.

**Choose the installer:** On the download page, select the version compatible with your system.
Typically, for Windows, you'll choose between a 32-bit (x86) or 64-bit (x64) installer based on your system architecture. Most users will have a 64-bit system. If you're unsure, you can search online to identify your system type.

**Run the installer:** Once downloaded, double-click the installer file (usually named mqttx-*.exe). This will launch the installation wizard.

**Follow the installation wizard:** The wizard will guide you through the installation process. It's generally recommended to keep the default settings unless you have specific preferences.

Click "Next" to progress through each step.

**Complete the installation:** Once you've reviewed the settings, click "Install" to begin the installation. It might take a few minutes to complete.

**Launch MQTTX:** After successful installation, you can launch MQTTX directly from your
desktop or Start menu.

The installer might offer you the option to create a desktop shortcut or add MQTTX to your
Start menu. Choose the options you prefer.
You can always uninstall MQTTX from the Windows Control Panel or Settings app like any
other program.

## Install MQTTX on Mac:
**Download the installer:** There are two recommended ways to get MQTTX on Mac:

**App Store:** This is the easiest method for most users. Visit the Mac App Store and search for "MQTTX". Download and install the application directly from there. However, keep in mind
the App Store version might not be the latest due to the review process.

**Official Website:** Visit the official MQTTX download page (https://mqttx.app/downloads) and
select the download button. Choose the ".dmg" installer file compatible with your Mac.

**Install from DMG file (Official Website method):**
Once downloaded, locate the DMG file (e.g., mqttx-*.dmg). Double-click it to mount the disk
image.

The DMG file will open a new window displaying the MQTTX application icon.

Drag and drop the MQTTX application icon to your Applications folder.
Eject the DMG disk image when finished.

**Launch MQTTX:** Open the Applications folder and double-click the MQTTX application icon
to launch it.

#### Additional Tips:
You can also right-click the downloaded DMG file and choose "Open With" > "Disk Utility" to
mount the disk image and then drag the application to Applications.

If you encounter permission issues during installation, you might need to provide
administrator access using your Mac password.

The official website might offer alternative installation methods like pre-built binaries.
However, the DMG file and App Store methods are generally the most straightforward
options.