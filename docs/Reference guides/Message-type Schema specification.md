---
sidebar_position: 3
sidebar_label: Message-type Schema specification
---
# Message-type Schema specification

This is the specification for the schema of a message-type. The users will have to specify a device-type, with one to many message-type. Each message-type will have one to many schemas.

This schema is the structure of the data that the device will be sending in each communication with Biotz. The definition provided in the schema creation in the web application is the one used to validate the incoming data. Also, this will be used to structure the specific database schema for the data to be stored in a structured way.

## Supported data types in Message-Types {#supported-data-types}

At the moment Biotz offers support to a subset of MessagePack data types that are compatible with JSON format.

| Displayed in UI                                                 | [JSON Schema][] equivalent                       | [MessagePack][] equivalent                       | DB column type | Examples (in JSON syntax)           |
|-----------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|----------------|-------------------------------------|
| [Unix timestamp, as integer](#unix-timestamp-as-integer)        | number                                           | int                                              | timestamp      | `1712828630000`                     |
| [Unix timestamp, as text](#unix-timestamp-as-text)              | string                                           | string                                           | timestamp      | `"1712828630000"`                   |
| [Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)             | string                                           | string                                           | timestamp      | `"2024-04-11T11:44:36.123Z"`        |
| [Integer](#integer)                                             | number                                           | int                                              | integer        | `12345678`                          |
| [Integer, as text](#integer-as-text)                            | string                                           | string                                           | integer        | `"12345678"`                        |
| [Integer, as hexadecimal text](#integer-as-hexadecimal-text)    | string                                           | string                                           | integer        | `"3a2fbb589d"`                      |
| [Decimal](#decimal)                                             | number                                           | float                                            | real           | `12345.678`                         |
| [Decimal, as text](#decimal-as-text)                            | string                                           | string                                           | real           | `"12345.678"`                       |
| [Text](#text)                                                   | string                                           | string                                           | text           | `"Some value"`                      |
| [Boolean](#boolean)                                             | boolean                                          | boolean                                          | boolean        | `true`, `false`                     |
| [Boolean, as text](#boolean-as-text)                            | string                                           | string                                           | boolean        | `"true"`, `"false"`                 |
| [Boolean, as integer](#boolean-as-integer)                      | number                                           | int                                              | boolean        | `0`, `1`                            |
| [Object](#object)                                               | object                                           | map                                              | N/A            | `{"key1": 1, "key2": "val"}`        |
| [Collection of identical items](#collection-of-identical-items) | array (all elements are of the same type)        | array (all elements are of the same type)        | N/A            | `[1, 2, 3]` <br/> `["a", "b", "c"]` |
| [Collection of unrelated items](#collection-of-unrelated-items) | array (each elements can be of a different type) | array (each elements can be of a different type) | N/A            | `[1, "a", [2 3]]`                   |

[JSON Schema]: https://json-schema.org/draft/2020-12/json-schema-core#name-instance-data-model
[MessagePack]: https://msgpack.org/

Additional information about some of the data types above:

### Object {#object}

Object / Map / Dictionary: They are containers of the final properties, as the Collections-related type. In this case, we only expect key-value pairs as children elements that are like following:

- Keys can only be of type \`String` (in order to give support for JSON serialization format).
- Values cannot be of type \`Collection of…\` or \`Object\` type, as we do not support nesting properties in that way.

Null values: we can handle them in any format to be transformed to \`nil` Clojure values.

### Collection of identical items {#collection-of-identical-items}

This data type is similar to JSON and Message pack arrays. It is an ordered collection of items. But contrary to regular JSON and MessagePack arrays, a *Collection of identical items* has some additional constraints enforced by Biotz:

- The collection MUST contain a single item (we will call this item "the child item"); therefore it cannot be empty, and it cannot have more than one child item.
- The child item data type can only be either a [Collection of unrelated items](#collection-of-unrelated-items), or an [Object](#object)

This constraints may seem a bit strange at first sight. But the use case for this data type is actually quite widespread. If you have a device that measures and stores the same set of values (e.g., temperature and humidity for a given timestamp), and then sends a bunch of such values together as an array of maps, where all of those maps have the same set of key names (e.g, `"timestamp"`, `"temperature"` and `"humidity"`), then you need this data type.

### Collection of unrelated items {#collection-of-unrelated-items}

Collection of unrelated items: collection of any kind of item, present just once.
