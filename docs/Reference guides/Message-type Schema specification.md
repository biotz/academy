---
sidebar_position: 3
sidebar_label: Message-type Schema specification
---
# Message-type Schema specification

his is the specification for the schema of a message-type. The users will have to specify a device-type, with one to many message-type. Each message-type will have one to many schemas.

This schema is the structure of the data that the device will be sending in each communication with Biotz. The definition provided in the schema creation in the web application is the one used to validate the incoming data. Also, this will be used to structure the specific database schema for the data to be stored in a structured way.

At the moment Biotz offers support to a subset of MessagePack data types that are compatible with JSON format. 

Supported data types:

- Displayed in UI
- <a href="https://json-schema.org/draft/2020-12/json-schema-core#name-instance-data-model/" target="_self">JSON</a>
- <a href="https://msgpack.org/#core-types/" target="_self">MessagePack</a>
- DB column type
<div class="tutorial-image-container">
    ![Message type schema](/img/message-type-schema.png)
</div>

Additional information about some of the data types above:

Collection of identical items: collection of more than one identical item. Being an item anything from an object/map/dictionary to singular element as a text, boolean, integer or decimal.

Collection of unrelated items: collection of any kind of item, present just once.

Object / Map / Dictionary: They are containers of the final properties, as the Collections-related type. In this case, we only expect key-value pairs as children elements that are like following:

- Keys can only be of type \`String` (in order to give support for JSON serialization format).
- Values cannot be of type \`Collection of…\` or \`Object\` type, as we do not support nesting properties in that way.
Null values: we can handle them in any format to be transformed to \`nil` Clojure values.

In order to parse MessagePack binary data to Clojure and the other way around, we can use this <a href="https://github.com/edma2/clojure-msgpack/" target="_self">library</a>.