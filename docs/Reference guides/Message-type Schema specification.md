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

| Displayed in UI                                                 | [JSON Schema][] equivalent                      | [MessagePack][] equivalent                      | DB Column Type | Examples (in JSON syntax)           |
|-----------------------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------|-------------------------------------|
| [Unix timestamp, as integer](#unix-timestamp-as-integer)        | number                                          | int 64                                          | timestamp      | `1712828630000`                     |
| [Unix timestamp, as text](#unix-timestamp-as-text)              | string                                          | string                                          | timestamp      | `"1712828630000"`                   |
| [Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)             | string                                          | string                                          | timestamp      | `"2024-04-11T11:44:36.123Z"`        |
| [Integer](#integer)                                             | number                                          | int 32                                          | integer        | `12345678`                          |
| [Integer, as text](#integer-as-text)                            | string                                          | string                                          | integer        | `"12345678"`                        |
| [Integer, as hexadecimal text](#integer-as-hexadecimal-text)    | string                                          | string                                          | integer        | `"3a2fbb589d"`                      |
| [Decimal](#decimal)                                             | number                                          | float 64                                        | double         | `12345.678`                         |
| [Decimal, as text](#decimal-as-text)                            | string                                          | string                                          | double         | `"12345.678"`                       |
| [Text](#text)                                                   | string                                          | string                                          | text           | `"Some value"`                      |
| [Boolean](#boolean)                                             | boolean                                         | bool                                            | boolean        | `true`, `false`                     |
| [Boolean, as text](#boolean-as-text)                            | string                                          | string                                          | boolean        | `"true"`, `"false"`                 |
| [Boolean, as integer](#boolean-as-integer)                      | number                                          | int                                             | boolean        | `0`, `1`                            |
| [Object](#object)                                               | object                                          | map                                             | N/A            | `{"key1": 1, "key2": "val"}`        |
| [Collection of unrelated items](#collection-of-unrelated-items) | array (each element can be of a different type) | array (each element can be of a different type) | N/A            | `[1, "a", [2 3]]`                   |
| [Collection of identical items](#collection-of-identical-items) | array (all elements are of the same type)       | array (all elements are of the same type)       | N/A            | `[1, 2, 3]` <br/> `["a", "b", "c"]` |
| [To discard](#to-discard)                                       | N/A                                             | N/A                                             | N/A            | N/A                                 |

[JSON Schema]: https://json-schema.org/draft/2020-12/json-schema-core#name-instance-data-model
[MessagePack]: https://msgpack.org/

## Data types detailed specification {#data-types-detailed-specification}

The table shown in the [Supported data types in Message-Types](#supported-data-types) section only shows a brief summary of the different data types, including some basic examples to help intuit their main properties. But it lacks a detailed specification of the properties of each data type, and the constraints enforce by Biotz on those data types (if any). This section describes in greater detail, for each of the supported types, what those properties and constraints are.

### Unix timestamp, as integer {#unix-timestamp-as-integer}

Biotz "Unix timestamp as integer" data type is a **64** bits signed integer value (signed long). Be aware that if you use JSON as the data encoding method, the [maximum and minimum integer values that can be safely represented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#description) are smaller than what this data type supports.

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
- The value MUST represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The minimum number of digits is 1.
  - The maximum number of digits is 20.
- The represented value MUST fint in a 64 bits signed integer.

#### Examples

- The value `"1705491207432"` corresponds to the `2024-01-17T12:33:27.432Z` date and time (expressed in ISO-8601 UTC format).
- The value `"2456444847987"` corresponds to the `2047-11-04T02:47:27.987Z` date and time (again in ISO-8601 UTC).
- The value `"-2119381953432"` corresponds to the `1902-11-04T02:47:27.432Z` date and time (again in ISO-8601 UTC).

### Unix timestamp RFC-3339 {#unix-timestamp-rfc-3339}

Biotz "Unix timestamp RFC-3339" data type is a string value, whose content MUST conform to [RFC-3339: Date and Time on the Internet: Timestamps](https://www.rfc-editor.org/rfc/rfc3339). In particular, it MUST comply with the ABNF grammar specified in [Section 5.6: Internet Date/Time Format](https://www.rfc-editor.org/rfc/rfc3339#section-5.6). It MUST also comply with the restrictions stated [Section 5.7: Restrictions](https://www.rfc-editor.org/rfc/rfc3339#section-5.7), with the additional restriction that `"Z"` is the only `time-offset` value accepted by Biotz. That is, only UTC time are accepted.

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
- The value MUST represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space.
- There are limits on the minimum and maximum number of digits that the value can use:
  - The minimum number of digits is 1.
  - The maximum number of digits is 10.
- The represented value MUST fit in a 32 bits signed integer value.

#### Examples

- `"123"`
- `"-34567"`
- `"-2147483648"`
- `"2147483647"`

### Integer, as hexadecimal text {#integer-as-hexadecimal-text}

Except for the differences noted below, Biotz "Integer, as hexadecimal text" data type has the same properties as the [Integer](#integer) data type.

The differences with the [Integer](#integer) data type are:

- The value is represented as a string of hexadecimal digits.
- The value MUST represent a valid hexadecimal number. That is, an optional `0x` prefix (using a lower case `x` is mandatory), followed by hexadecimal digits only. With no leading or trailing white space. The hexadecimal can be upper or lower case.
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

Biotz "Decimal" data type is a `binary64` (double precision) floating point value, as specified in the [IEEE 754 standard](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). It uses the dot (".") as the decimal separator.

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
- The value MUST not contain leading or trailing white space.
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
- `"This is also a valid text value áéíóúäëïöüñÑ 😇👩🎂 ¯\_(ツ)_/¯"`
- `""` (the empty string)

### Boolean {#boolean}

Biotz "Boolean" data type is like the standard JSON or MessagePack boolean data type.

#### Examples

- `true`
- `false`

### Boolean, as text {#boolean-as-text}

Except for the differences noted below, Biotz "Boolean, as text" data type has the same properties as the [Boolean](#boolean) data type.

The differences with the [Boolean](#boolean) data type are:

- The value is represented as a string.
- The value MUST not contain leading or trailing white space.
- The value MUST be either `"true"` or `"false". Lower case, upper case or mixed-case values are accepted.

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
- `-0` (considered `false`)
- `000` (considered `false`)
- `255` (considered `true`)
- `-16384` (considered `true`)

### Object {#object}

Biotz "Object" data type is similar (but not equal) to JSON and MessagePack objects (also called maps, or dictionaries in some programming languages). They are the containers of the final properties, as the "Collection of ..." data types. Contrary to regular JSON and MessagePack arrays, an "Object" has some additional constraints enforced by Biotz:

- Key names can only be string values (in order to support the JSON encoding format for the messages).
- Key names CANNOT be repeated. If you repeat a key name, you will get an error.
- Values associated to a key name CANNOT be of type "Collection of ..." or "Object" type, as Biotz does not support nesting properties in that way. If you try to add any value of those types, you will get an error.
- Null values are accepted, as long as they use the canonical representation of the message encoding format (e.g., `null` for JSON encoding format).

Each of the values in the "Object" will be stored in the database in a single entry.

#### Examples

- `{"timestamp": "1985-04-12T23:20:50.52Z", "temperature": 12.5, "humidity": 65, "low_battery": true}`
- `{"timestamp": "1985-04-12T23:20:50.52Z", "last_error": null}`

### Collection of unrelated items {#collection-of-unrelated-items}

Biotz "Collection of unrelated items" data type is also similar (but not equal) to JSON and MessagePack arrays. It is an ordered collection of items. But contrary to regular JSON and MessagePack arrays, a "Collection of unrelated items" has some additional constraints enforced by Biotz:

- Values in the collection CANNOT be of of type "[Collection of identical items](#collection-of-identical-items)".
- Each of the values in the collection MUST represent a different item in the schema. Therefore, the same represented item CANNOT appear more than once in the collection.

In case any of the values is itself of type "Collection of ..." (of the allowed types) or "Object", that is, in case there is nesting of values, the values present in the collection will be "flattened". That is, an equivalent unnested collection of items will be created. This is the collection that will be checked for represented items repetitions.

Also, each of the values in the flatenned collection will be stored in the database in a single entry.

#### Examples

- Example 1: The unrelated items are the timestamp ("[Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)"), the temperature ("[Decimal](#decimal)") and the relative humididy ("[Integer](#integer)").
```
["1985-04-12T23:20:50.52Z", 21.3, 65],
```

- Example 2: The unrelated items are the timestamp ("[Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)") and the luminosity ("[Integer](#integer)").
```
["1985-04-12T23:20:50.52Z", 2400],
```

- Example 3: The unrelated items are the timestamp ("[Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)"), the luminosity ("[Integer](#integer)") and an "Object" with two key-pair values, of type "[Decimal](#decimal)" and "[Boolean](#boolean)" respectively:
```
["1985-04-12T23:20:50.52Z", 2400, {"current_speed": 82.35, "low_battery": false}],
```
### Collection of identical items {#collection-of-identical-items}

Biotz "Collection of identical items" data type is similar (but not equal) to JSON and MessagePack arrays. It is an ordered collection of items. But contrary to regular JSON and MessagePack arrays, a "Collection of identical items" has some additional constraints enforced by Biotz:

- The "Collection of identitcal items" data type MUST contain a **single** element data type. Biotz calls this single element data type "the child data type". Therefore it CANNOT be empty, and it CANNOT have more than one child data type.
- The child data type can only be either a "[Collection of unrelated items](#collection-of-unrelated-items)" data type, or an "[Object](#object)" data type.

These constraints may seem a bit strange at first sight. But the use case for this data type is actually quite widespread. If you have a device that measures and stores the same set of values (e.g., temperature and humidity for a given timestamp), and then sends a bunch of such values together as an array of maps, where all of those maps have **the same set of key names** (e.g, `"timestamp"`, `"temperature"` and `"humidity"`), then you need this data type.

You can model that use case as a "Collection of identical items", whose child data type is an "Object". The key names of that "Object" would be `"timestamp"`, `"temperature"` and `"humidity"`, with suitable data types for their values (e.g., "[Unix timestamp RFC-3339](), "[Decimal](#decimal)" and "[Integer](#integer)").

A similar use case as the previous one is when a device also measures and stores the same set of values at certain time intervals, and then sends a bunch of them together as an array of arrays. Where the second-level arrays are the values that the device measured and stored. The order in which the values are sent in those second-level arrays is always the same. E.g, the timestamp at which the measurement took place is always the first element of the array, the temperature is always the second, the humidity is always the third, etc. You can model this use case as a "Collection of identical items", whose child data type is an "Collection of unrelated items".

Each of the items in the collection will be treated as an independent entry to be stored in the database. That is, if the child data type is an "Object" data type, the values inside that "Object" will be stored in the database in a single entry. Same if the child data type is a "Collection of unrelated items" data type: all of the values inside that "Collection of unrelated items" will be stored in the database in a single entry.

#### Examples

- Example 1: with "[Object](#object)" as the child data type.
```
[{"timestamp": "1985-04-12T23:20:50.52Z", "temperature": 12.5, "humidity": 60},
 {"timestamp": "1985-04-12T23:21:00.52Z", "temperature": 13.0, "humidity": 61},
 {"timestamp": "1985-04-12T23:21:10.52Z", "temperature": 12.7, "humidity": 60}]
```
- Example 2: with "[Collection of unrelated items](#collection-of-unrelated-items)" as the child data type, where the unrelated items are the timestamp ("[Unix timestamp RFC-3339](#unix-timestamp-rfc-3339)") and the luminosity ("[Integer](#integer)").
```
[["1985-04-12T23:20:50.52Z", 2400],
 ["1985-04-12T23:21:00.52Z", 2410],
 ["1985-04-12T23:21:10.52Z", 2390]]
```

### To discard {#to-discard}

Biotz "To discard" data type is a special data type. It does not impose any properties or constraints on the values that have this data type assigned. In fact, the values that have this data type assigned are simply discarded (they are not stored in the database at all), without even being looked at or checked. It is as if the messages from the devices never had those values in the first place.
