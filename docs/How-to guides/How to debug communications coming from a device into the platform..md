## Introduction
The communication debugger has as objective to help debug possible errors or problems related to the communication coming from the devices into Biotz Platform.

## Prerequisites
There must be these things defined at Biotz: device-type, message-type and schema. And at least a device registered for the defined device-type.

Also the device firmware must be ready to connect to Biotz and send data.

## Communication debugger
The communication debugger will monitorize the communications that are sent to Biotz application coming from a certain device and for a certain message-type. This provides a way to check if the messages supposedly

The tools is available under 'Developer Tools' menu item. Once selected, two inputs are shown:

- Select device: in here the device from which the communication has to be debugged must be selected.
- Select message type: The selected device, will be of a certain device type and could have more than one message type registered for it. Each message type can be debugged on its own.

Once those are selected communication debugger can be started by using the 'Start session' button. This will show a 'terminal' style view where all communications from the device published in the selected message-type topic. The communications shown are all of them, as these aren't filtered by schema matching.

At the bottom right three buttons are shown:

- Stop: to pause the 'terminal' style view of showing more communications. That can be latter re-started.
- Download: to download all the communication in a json format into the local machine.
- Cancel: to shut down the communication debugger.
