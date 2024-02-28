## Connection details
- Host: mqtts://broker.biotz.io
- Port: 8883
- Transport: TLS
- MQTT version: v3.1.1

## Authentication
The authentication values are generated and provided when a new device is registered in the Biotz Platform. Each device uses its own credentials.

- **Client id**: generated and provided when a device is registered.
- **Username**: generated and provided when a device is registered.
- **Password**: generated and provided when a device is registered.

More information about device registration <a href="http://localhost:3000/academy/docs/Tutorials/Step%204%20-%20Creating%20%20a%20device/" target="_self">here</a>.

## Topics

### Publish

#### Data ingestion

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME
```
<a href="http://localhost:3000/academy/docs/How-to%20guides/How%20to%20publish%20device%20data/" target="_self">More information</a>
### Subscribe

#### Remote actioning:‍

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/action/ACTION-MESSAGE-TYPE-INTERNAL-NAME
```
<a href="http://localhost:3000/academy/docs/How-to%20guides/How%20to%20configure%20and%20trigger%20a%20remote%20action%20in%20devices/" target="_self">More information</a>

### Firmware updates:

```
biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/firmware/update
```
<a href="http://localhost:3000/academy/docs/How-to%20guides/How%20to%20update%20device%20firmware/" target="_self">More information</a>