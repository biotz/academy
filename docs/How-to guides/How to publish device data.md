There is a standard format of the MQTT topics for sending data from devices to the Biotz IoT Platform. For this to happen there are these pre-steps that must be fulfilled:

- Organisation must be <a href="http://localhost:3000/academy/docs/Tutorials/Creating%20a%20Biotz%20account/" target="_self">registered</a> in Biotz.
- <a href="http://localhost:3000/academy/docs/Tutorials/Step%201%20-%20Creating%20a%20Device%20Type/" target="_self">Device-Type</a>, <a href="http://localhost:3000/academy/docs/Tutorials/Step%202%20-%20Creating%20a%20Message%20Type/" target="_self">message-type</a> and the schema of data <a href="http://localhost:3000/academy/docs/Tutorials/Step%203%20-%20Creating%20a%20Schema/" target="_self">schema of data</a> to be sent must be registered in Biotz.
- <a href="http://localhost:3000/academy/docs/Tutorials/Step%204%20-%20Creating%20%20a%20device/" target="_self">Specific</a> device must be registered.

Find specific MQTT broker information following this link.

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