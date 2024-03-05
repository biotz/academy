---
sidebar_position: 9
---

## Introduction
Biotz offers a remote firmware update service. The user will upload the new firmware file to the Biotz IoT platform where it will be registered and stored. From that point on the user will be able to assign any firmware file to existing devices.

For this to be possible, the device must be subscribed to the MQTT topic where Biotz will publish the firmware update message. The topic name follows this format:

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/firmware/update
```

In the topic name format there are two elements that have to be personalized:

- **CUSTOMER-ID**: Is shared by all devices of the organization. It is provided when a device is registered in the web application, and it has a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_self">UUID</a> format.
- **DEVICE-ID**: Is specific to each device. It is provided when a device is registered in the web application, and it has a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_self">UUID</a> format.

There are specific security measures in place for these topics. The devices can just subscribe to them, publishing is not allowed.

Whenever the user assigns a certain firmware file to a device (or a set of devices), a message will be published to the specific topic(s) just described. This message will be published with the MQTT Retained flag set to true. This means that the MQTT broker will keep the message around, and **every time** the device connects to the MQTT broker and subscribes to the topic, the message will be delivered to the device. Thus, the device must be ready to deal with repeated firmware update messages in a sensible way (e.g., by recognizing that the firmware name specified in the message is the same already running on the device, and not doing any updates).

The reason why the firmware update message is sent with the MQTT Retained flag set to true is twofold:

- The device can know that there is a firmware update pending, even if it was disconnected from the MQTT broker at the time the message was sent.
- Biotz IoT Platform can assign firmware updates to devices even before those devices connect to the MQTT broker for the first time.

The payload of the MQTT message is a UTF-8 encoded string, that holds a JSON object with the following content:

```
{
  "firmware-name": "firmware name",
  "download-url": "https://firmware-download-url"
}
```

The download URL has an expiration period of **one week**. After that time the URL will no longer be valid.

To summarize:

- The device must be subscribed to specific topic to get the message(s),
- It must decode the UTF-8 encoded string to build the JSON object,
- It must check the "firmware-name" key and decide if it has to apply the update or not,
- If it does decide to apply the update, it must download the firmware file from the URL specified in the "download-url" key,
- Once it has downloaded the firmware file locally, it may perform some checks to verify the suitableness of the firmware file (integrity checks, authenticity checks, compatibility checks, etc.), and then perform the auto-update.
