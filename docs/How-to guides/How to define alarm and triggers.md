## Introduction

Biotz provides alarm generation and notification capabilities based on the data received in the data ingestion flows. The alarm trigger or rules are evaluated against each received data observation, and when an alarm is triggered the corresponding users are notified.

This guide explains how to define the rules that decide when an alarm is triggered and how to specify the list of users that must be notified.

## Prerequisites

In order to define the alarm triggers you need to have a device-type with at least one message-type and message type schema.

The alarm trigger will apply to all the devices of a certain device type no matter if they were created before or after defining the trigger.

## Alarm definition

The alarm triggers are defined in the “Alarm triggers” subsection under the “Setup” section. 
<br></br>

\<screenshot>

<!-- To create the first alarm click on the “New alarm trigger” button. -->
<br></br>

\<screenshot>

Defining an alarm requires three steps: general options, rule definition and notification settings.

### General options

The following fields have to be completed:

- Name: an identifier for the trigger. This name will be displayed in the triggered alarm list and notifications. 
- Level: the criticality or severity of the alarm. The possible values are: alert, critical, emergency, info and warning. 
- Device type: the device type for which the alarm trigger will be evaluated. The trigger will apply to all the devices of a certain type.
- Message type: the message type that will be used to define the trigger rule. The trigger will only be evaluated when the devices send data for the selected message type.

\<screenshot>

### Rule definition

Each individual data observation is evaluated against the rule defined in this section. Those rules are composed of condition and group blocks:

**Conditions**

For each attribute in the message-type, one or more conditions can be specified. The “attribute “ values are compared with the “value” using the “operator”.

<br></br>
The available operators differ depending on the attribute type:

- numeric: `>, >=, <, <=, =, <>`
- boolean: `<>, =`
- text: `<>, =`
- others: `None`

‍**Groups**

Multiple conditions can be grouped. When doing so, a logical operator has to be chosen to define the relation between the grouped conditions.

The following are the available logical operators:

    - AND: The group is considered truthy if all the individual conditions are met.
    - OR: The group is considered truthy if at least one individual condition is met.
    - NOT AND: The group is considered truthy if none or some, but not all individual conditions are met
    -NOT OR: The group is considered truthy if none of the individual conditions is met.

![Groups](/img/groups.png)


Conditions and groups can be nested to build complex rules.
### Notifications
By default no users will be notified when an alarm is triggered. The triggered alarm will be persisted and viewable in the alarms list, but none of the users will get a message. To change that, the “Edit users” button can be used.  Pressing the button will open a sidebar where the list of users to be notified can be selected.
<br></br>
The selected users will get a web notification and an email when an alarm is triggered.
<br></br>
\<screenshot>
<br></br>
To avoid overwhelming the user with notifications, a rate limit is applied to the notifications sent to the users. The users will be notified at most once every 15 minutes for each device an alarm trigger definition. Additional notifications will be ignored, but the alarm will be persisted and viewable in the alarms list.