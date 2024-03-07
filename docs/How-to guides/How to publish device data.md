---
sidebar_position: 4
sidebar_label: How to publish device data using MQTT - setup devices to send data
---
# Publishing Device data
## Introduction
There is a standard format of the MQTT topics for sending data from devices to the Biotz IoT Platform. For this to happen there are these pre-steps that must be fulfilled:

- Organisation must be <a href="/academy/docs/Tutorials/Creating a Biotz account" target="_self">registered</a> in Biotz.
- <a href="/academy/docs/Tutorials/Getting started/Step 1 - Creating a Device Type" target="_self">Device-Type</a>, <a href="/academy/docs/Tutorials/Getting started/Step 2 - Creating a Message Type" target="_self">message-type</a> and the schema of data <a href="/academy/docs/Tutorials/Getting started/Step 3 - Creating a Schema" target="_self">schema of data</a> to be sent must be registered in Biotz.
- <a href="/academy/docs/Tutorials/Getting started/Step 4 - Creating  a device" target="_self">Specific</a> device must be registered.

Find specific MQTT broker information following this <a href="/academy/docs/Reference guides/MQTT broker" target="_self">link</a>.

This is the generic MQTT topic builds:

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME
```

In the topic standard there are three elements that have to be personalized:

- **CUSTOMER-ID**: is common to the organisation. It is provided when a device is registered in the web application, and it has a UUID format.
- **DEVICE-ID**: specific to each device. It is provided when a device is registered in the web application, and it has a UUID format.
- **MESSAGE-TYPE-INTERNAL-NAME**: is specified by the device owner when registering a message-type for a certain device-type. This message-type will have to have also a schema specified in Biotz.

Devices should publish messages to these topics. There are specific security measures in place so these topics are exclusively set up to get publish messages. Devices can't subscribe to it.

## Custom topic name support

We won’t support custom topic names in the SaaS platform. That feature would only be considered in an ad-hoc project for a specific customer, along with some other possible customization as the device payload schema gathering.