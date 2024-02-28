## Introduction

Biotz offers two ways for registering physical devices of a certain device type. This is used by Biotz to generate internal machinery for specific devices. But also as a way to have data of the collection of devices gathered together.

## Prerequisites

Before registering a device, the device type to which it belongs must be created.

## Register a device

Biotz offers two ways to register devices:

    - Using the specific UI one by one.
    - Uploading a cvs with data of 1 to n devices to register all of them   in one go.

**Using the UI**

Follow the steps:

- From the lateral menu navigate to 'Device management - Devices'. 
- At the right side top of this new view there will be a button that says 'New device'.
- That will present the form for the device registration.

<div class="tutorial-image-container">
![Using the UI](/img/UsingUI.png)
</div>

Parameters description:
- Device type - compulsory -: select the device type already created.
- Name - compulsory -: name of the device.
- Description: description of the device.
- Time Zone: time zone of the location of the device.
- Tags: tags for device classification purpose.


**Using the CSV way**

Follow the steps:

    - From the lateral menu navigate to 'Device management - Devices'.
    - At the right side top of this new view there will be a button that says 'Create devices form CSV'.
    - That will present the form for the device registration.
    - 
<div class="tutorial-image-container">
![Using the CSV way](/img/UsingCSVway.png)
</div>
Parameters description:

    - Device type - compulsory -: select the device type already created.
    - File droping area.

Expected file is a CSV format file that must contain the following columns:
    - name
    - description
    - timezone


And there must be at least a row with data of a device in it.


