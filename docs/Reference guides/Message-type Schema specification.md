---
sidebar_position: 3
sidebar_label: Message-type Schema specification
---
# Message-type Schema specification

This is the specification for the schema of a message-type. The users will have to specify a device-type, with one or several message-types. Each message-type will have one or more schemas.

These schemas define the structure of the data that the device will be sending in each communication with Biotz. The definition provided during the schema creation in the web application is the one that will be used to validate the incoming data. Also, this will be used to structure the specific database schema for the data to be stored in a structured way.

## Supported data types in Message-Types {#supported-data-types}

At the moment Biotz offers support for a subset of MessagePack data types that are compatible with the JSON format. See [Data types detailed specification](#data-types-detailed-specification) below for additional details on each data type, or click on the individual data type names in the "Displayed in the UI" column.

The "DB Column Type" specifies the data type of the value stored in the database, once it has received and validated.

| Displayed in UI                                                 | [JSON Schema][] equivalent                       | [MessagePack][] equivalent                       | DB Column Type | Examples (in JSON syntax)           |
|-----------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|----------------|-------------------------------------|
| [Unix timestamp, as integer](#unix-timestamp-as-integer)        | number                                           | int 64                                           | timestamp      | `1712828630000`                     |
| [Unix timestamp, as text](#unix-timestamp-as-text)              | string                                           | string                                           | timestamp      | `"1712828630000"`                   |
| [Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)             | string                                           | string                                           | timestamp      | `"2024-04-11T11:44:36.123Z"`        |
| [Integer](#integer)                                             | number                                           | int 32                                           | integer        | `12345678`                          |
| [Integer, as text](#integer-as-text)                            | string                                           | string                                           | integer        | `"12345678"`                        |
| [Integer, as hexadecimal text](#integer-as-hexadecimal-text)    | string                                           | string                                           | integer        | `"3a2fbb589d"`                      |
| [Decimal](#decimal)                                             | number                                           | float 64                                         | double         | `12345.678`                         |
| [Decimal, as text](#decimal-as-text)                            | string                                           | string                                           | double         | `"12345.678"`                       |
| [Text](#text)                                                   | string                                           | string                                           | text           | `"Some value"`                      |
| [Boolean](#boolean)                                             | boolean                                          | bool                                             | boolean        | `true`, `false`                     |
| [Boolean, as text](#boolean-as-text)                            | string                                           | string                                           | boolean        | `"true"`, `"false"`                 |
| [Boolean, as integer](#boolean-as-integer)                      | number                                           | int                                              | boolean        | `0`, `1`                            |
| [Object](#object)                                               | object                                           | map                                              | N/A            | `{"key1": 1, "key2": "val"}`        |
| [Collection of identical items](#collection-of-identical-items) | array (all elements are of the same type)        | array (all elements are of the same type)        | N/A            | `[1, 2, 3]` <br/> `["a", "b", "c"]` |
| [Collection of unrelated items](#collection-of-unrelated-items) | array (each elements can be of a different type) | array (each elements can be of a different type) | N/A            | `[1, "a", [2 3]]`                   |
| [To discard](#to-discard)                                       | N/A                                              | N/A                                              | N/A            | N/A                                 |

[JSON Schema]: https://json-schema.org/draft/2020-12/json-schema-core#name-instance-data-model
[MessagePack]: https://msgpack.org/

## Data types detailed specification {#data-types-detailed-specification}

The table shown in the [Supported data types in Message-Types](#supported-data-types) section only shows a brief summary of the different data types, including some basic examples to help intuit their main properties. But it lacks a detailed specification of the properties of each data type, and the constraints enforce by Biotz on those data types (if any). This section describes in greater detail, for each of the supported types, what those properties and constraints are.

### Unix timestamp, as integer {#unix-timestamp-as-integer}

Biotz "Unix timestamp as integer" data type is a **64** bits signed integer value (signed long). Be aware that if you are JSON as the data encoding method, the [maximum and minimum integer values that can be safely represented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#description) are smaller than what this data type supports.

It is based on the [Unix time](https://en.wikipedia.org/wiki/Unix_time) concept (commonly called Unix timestamp), in that it measures an offset from the Unix epoch. But there are two important differences from the standard Unix timestamp definition:

* The standard Unix timestamp uses the second as the unit of measure (although many systems allow fractions of seconds, if represented as a floating point number), while Biotz "Unix timestamp, as integer" uses milliseconds as the unit of measure. Thus the value `12345` means 12345 seconds after the Unix epoch if using Standard Unix timestamps, but it means 1.2345 seconds after the epoch if using Biotz Unix timestamps.
* The standard Unix timestamp uses a 32 bits signed integer value, which means that it will roll over after 2038-01-19T03:14:07Z (known as the [Year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem)). Biotz "Unix timestamp, as integer", being 64 bits long, does not have such a problem even if the unit of measure is the millisecond.

#### Examples

- The value `1705491207432` corresponds to the `2024-01-17T12:33:27.432Z` date and time (expressed in ISO-8601 UTC format).
- The value `2456444847987` corresponds to the `2047-11-04T02:47:27.987Z` date and time (again in ISO-8601 UTC).
- The value `-2119381953432` corresponds to the `1902-11-04T02:47:27.432Z` date and time (again in ISO-8601 UTC).

### Unix timestamp, as text {#unix-timestamp-as-text}

Except for the differences noted below, Biotz "Unix timestamp, as text" data type has the same properties as the [Unix timestamp, as integer](#unix-timestamp-as-integer) data type.

The differences with the [Unix timestamp, as integer](#unix-timestamp-as-integer) data type are:

- The value is represented as a string of decimal digits, instead of as an actual (64 bits) signed integer number.
- The value must represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The minimum number of digits is 1.
  - The maximum number of digits is 20.
- The represented value must fint in a 64 bits signed integer.

#### Examples

- The value `"1705491207432"` corresponds to the `2024-01-17T12:33:27.432Z` date and time (expressed in ISO-8601 UTC format).
- The value `"2456444847987"` corresponds to the `2047-11-04T02:47:27.987Z` date and time (again in ISO-8601 UTC).
- The value `"-2119381953432"` corresponds to the `1902-11-04T02:47:27.432Z` date and time (again in ISO-8601 UTC).

### Unix timestamp RFC-3339 {#unix-timestamp-rfc-3339}

Biotz "Unix timestamp RFC-3339" data type is a string value, whose content must conform to [RFC-3339: Date and Time on the Internet: Timestamps](https://www.rfc-editor.org/rfc/rfc3339). In particular, it must comply with the ABNF grammar specified in [Section 5.6: Internet Date/Time Format](https://www.rfc-editor.org/rfc/rfc3339#section-5.6). It must also comply with the restrictions stated [Section 5.7: Restrictions](https://www.rfc-editor.org/rfc/rfc3339#section-5.7), with the additional restriction that `"Z"` is the only `time-offset` value accepted by Biotz. That is, only UTC time are accepted.

#### Examples

- `"1985-04-12T23:20:50.52Z"`
- `"2039-01-01T00:00:00Z"`

### Integer {#integer}

32 bits signed integers.

Biotz "Integer" data type is a **32** bits signed integer value (signed int). Thus, the minimum possible value is `-2147483648` and the maximum possible value is `2147483647`).

#### Examples

- `123`
- `-34567`
- `-2147483648`
- `2147483647`

### Integer, as text {#integer-as-text}

Except for the differences noted below, Biotz "Integer, as text" data type has the same properties as the [Integer](#integer) data type.

The differences with the [Integer](#integer) data type are:

- The value is represented as a string of decimal digits, instead of as an actual (32 bits) signed integer number.
- The value must represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The minimum number of digits is 1.
  - The maximum number of digits is 10.
- The represented value must fit in a 32 bits signed integer value.

#### Examples

- `"123"`
- `"-34567"`
- `"-2147483648"`
- `"2147483647"`

### Integer, as hexadecimal text {#integer-as-hexadecimal-text}

Except for the differences noted below, Biotz "Integer, as hexadecimal text" data type has the same properties as the [Integer](#integer) data type.

The differences with the [Integer](#integer) data type are:

- The value is represented as a string of hexadecimal digits.
- The value must represent a valid hexadecimal number. That is, an optional `0x` prefix (using a lower case `x` is mandatory), followed by hexadecimal digits only. With no leading or trailing white space. The hexadecimal can be upper or lower case.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The minimum number of hexadecimal digits is 1.
  - The maximum number of hexadecimal digits is 8.

#### Examples

- `"0xaabbccdd"`
- `"aabbccdd"`
- `"0xA"`
- `"A"`
- `"a"`
- `"0A"`
- `"0a"`
- `"0x1234aAbB"`

### Decimal {#decimal}

Biotz "Decimal" data type is a `binary64` (double precision) floating point value, as specified in the [IEEE 754 standard](https://en.wikipedia.org/wiki/Double-precision_floating-point_format).

#### Examples

- `0`
- `3.1415936535`
- `-2.71828182823536`
- `-13.`
- `.123456789`
- `0.123456789e23`
- `.123456789e23`
- `-0.123456789e-23`
- `-.123456789e-23`
- `-13.e23`
- `1234`

### Decimal, as text {#decimal-as-text}

Except for the differences noted below, Biotz "Decimal, as text" data type has the same properties as the [Decimal](#decimal) data type.

The differences with the [Decimal](#decimal) data type are:

- The value is represented as a string of digits, with an optional sign, and optional fractional part
- The value can only use decimal digits. Hexadecimal digits are not supported.
- The value must not contain leading or trailing white space.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The maximum number of decimal digits for the fractional part is 18.
  - The maximum number of decimal digits for the integral (non-fractional) part is 309.

#### Examples

- `"0"`
- `"3.1415936535"`
- `"-2.71828182823536"`
- `"-13."`
- `".123456789"`
- `"0.123456789e23"`
- `".123456789e23"`
- `"-0.123456789e-23"`
- `"-.123456789e-23"`
- `"-13.e23"`
- `"1234"`

### Text {#text}

Biotz "Text" data type is a string value, containing valid UTF-8 code points. The maximum length of the value is 256 Kilobytes.

#### Examples

- `"This is a text value"`
- `"Este también es un texto válido áéíóúäëïöü 😇👩🎂 ¯\_(ツ)_/¯"`
- `""`

### Boolean {#boolean}

Biotz "Boolean" data type is the standard JSON or MessagePack boolean data type.

#### Examples

- `true`
- `false`

### Boolean, as text {#boolean-as-text}

Except for the differences noted below, Biotz "Boolean, as text" data type has the same properties as the [Boolean](#boolean) data type.

The differences with the [Boolean](#boolean) data type are:

- The value is represented as a string.
- The value must not contain leading or trailing white space.
- The value must be either `"true"` or `"false". Lower case, upper case or mixed-case values are accepted.

#### Examples

- `"true"`
- `"false"`
- `"True"`
- `"False"`

### Boolean, as integer {#boolean-as-integer}

Except for the differences noted below, Biotz "Boolean, as integer" data type has the same properties as the [Boolean](#boolean) data type.

The differences with the [Boolean](#boolean) data type are:

- The value is represented as a 32 bits signed integer value.
- If the signed integer value is equal to 0, then it is considered `false`.
- If the signed integer value is not equal to 0, then it is considered `true`.

#### Examples

- `0` (considered `false`)
- `000`  (considered `false`)
- `255` (considered `true`)
- `-16384` (considered `true`)

### Object {#object}

Object / Map / Dictionary: They are containers of the final properties, as the Collections-related type. In this case, we only expect key-value pairs as children elements that are like following:

- Keys can only be of type \`String` (in order to give support for JSON serialization format).
- Values cannot be of type \`Collection of...\` or \`Object\` type, as we do not support nesting properties in that way.

Null values: we can handle them in any format to be transformed to \`nil` Clojure values.

#### Examples

### Collection of identical items {#collection-of-identical-items}

This data type is similar to JSON and Message pack arrays. It is an ordered collection of items. But contrary to regular JSON and MessagePack arrays, a *Collection of identical items* has some additional constraints enforced by Biotz:

- The collection MUST contain a single item (we will call this item "the child item"); therefore it cannot be empty, and it cannot have more than one child item.
- The child item data type can only be either a [Collection of unrelated items](#collection-of-unrelated-items), or an [Object](#object)

This constraints may seem a bit strange at first sight. But the use case for this data type is actually quite widespread. If you have a device that measures and stores the same set of values (e.g., temperature and humidity for a given timestamp), and then sends a bunch of such values together as an array of maps, where all of those maps have the same set of key names (e.g, `"timestamp"`, `"temperature"` and `"humidity"`), then you need this data type.

#### Examples

### Collection of unrelated items {#collection-of-unrelated-items}

Collection of unrelated items: collection of any kind of item, present just once.

#### Examples

### To discard {#to-discard}

Biotz "To discard" data type is a special data type. It does not impose any properties or constraints on the values that have this data assigned. In fact, the values that have this data type assigned are simply discarded (they not stored in the database at all), without even being looked at or checked. It is as if the messages from the devices neved had those values in the first place.
