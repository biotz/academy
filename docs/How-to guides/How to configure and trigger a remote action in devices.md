---
sidebar_position: 5
---

## Introduction

Biotz offers the feature to action devices remotely, this is offered just through MQTT. The configuration of this features include 3 steps:

<br></br>

## Step 1 - Setup the 'Remote actioning' in Biotz platform.

In the Setup section of the sidebar, there is a subsection called 'Remote action flow', this is where configuration is done. Remote actions are configured per device type, so the first thing to do will be to select a device type (that must already exist).

Each device type can have 0 to n action message types, each of this message type will be related to an specific MQTT topic (as pushed into). But at the same time, the action message type could have 1 to n schemas.

The action message types, as said before, are specifically offered through MQTT communication protocol. Regarding Message encoding, json or message pack can be used. Once this configuration is done, the schema of the communication should be registered.

Biotz shows the same interface for both message types (specific to communication from device to Biotz platform) and action message type (specific to communication from Biotz platform to device) schema registration. So the same way, the schema representing the data to action the device should be registered. This schema will be used when action is triggered, and also the device has to be able to decipher this schema (json or message pack format) once it receives it through MQTT.

<br></br>

## Step 2 - Setup device to get the order to perform the action.

Find specific MQTT broker information following this <a href="/academy/docs/Reference guides/MQTT broker" target="_self">link</a>.

The specific device of the selected device type should be already registered under the 'Device Management' section for devices. The device should be configured to SUBSCRIBE to the specific topic that Biotz will use to notify the action to the device. The topic follows this pattern:

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/action/ACTION-MESSAGE-TYPE-INTERNAL-NAME
```
So the device has to be SUBSCRIBED to the topic generated following the pattern that fits the specific details of the device and the action message type registered in step 1. The device will get the message following the schema registered and in the configured message encoding format. The device is expected to know how and what to do with it to perform the action.

## Step 3 - Trigger the action from the Biotz platform.

The 'Remote actioning' section in the sidebar, shows the list of device types and the number of action messages registered per each of them. If a device type with at least an action message type registered for it is selected, the action triggering interface is shown.

Next selections must be done: the specific 'action message type', the specific schema to be used for the selected action message type. Once those are selected, a file in the specified message encoding must be uploaded to the system, this will be the specific message Biotz will publish to the mentioned topic to which the device has been subscribed in step 2.

Lastly, this action can be triggered in one to n devices (that are already registered in the platform) that are from that device type. All devices will be listed on the right side of the interface. Once the device(s) is selected, the action can be sent by pushing the 'send' button in the bottom.
