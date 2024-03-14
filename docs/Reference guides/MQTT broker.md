---
sidebar_position: 1
sidebar_label: MQTT Broker
---
# MQTT Broker Reference

## Connection details
- Host: mqtts://broker.biotz.io
- Port: 8883
- Transport: TLS
- MQTT version: <a href="http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/csprd02/mqtt-v3.1.1-csprd02.html" target="_self">v3.1.1</a>
## Authentication
The authentication values are generated and provided when a new device is registered in the Biotz Platform. Each device uses its own credentials.

- **Client id**: generated and provided when a device is registered.
- **Username**: generated and provided when a device is registered.
- **Password**: generated and provided when a device is registered.

More information about device registration <a href="/docs/Tutorials/Getting started/Step 1 - Creating a Device Type" target="_self">here</a>.

## Topics

### Publish

#### Data ingestion

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME
```
<a href="/docs/How-to guides/How to publish device data" target="_self">More information</a>

### Subscribe

#### Remote actioning:‍

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/action/ACTION-MESSAGE-TYPE-INTERNAL-NAME
```
<a href="/docs/How-to guides/How to configure and trigger a remote action in devices" target="_self">More information</a>

### Firmware updates:

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/firmware/update
```
<a href="/docs/How-to guides/How to update device firmware" target="_self">More information</a>

