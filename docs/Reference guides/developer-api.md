---
title: Developer API
description: Developer API reference
sidebar_position: 4
---

# Developer API

You can interact with the Biotz platform using the Developer API.

### API reference

The API endpoints are documented in the [OpenAPI][] v3.0 format. You
can load and browse the [API specification][] from your tool of
choice, or use our [Swagger UI][].

### Authentication

The Biotz Developer API uses OpenID JWT id-tokens for
authentication.

#### Obtaining Developer API Credentials

Developer API credentials are required for obtaining tokens. The
credentials can be created in the "Developer API" section of the Biotz
web application.

:::warning

Make sure to save the Developer API credentials in a safe place.

:::

#### Obtaining an identity token

The token can be obtained using the [OpenAuth Password Grant flow][]:

- **Token URL**: https://auth.biotz.io/realms/biotz-platform/protocol/openid-connect/token
- **Request parameters**:
  - `grant_type`: `"password"`
  - `client_id`: `"biotz-platform-programmatic-users"`
  - `scope`: `"openid"`
  - `username`: Developer API credentials username.
  - `password`: Developer API credentials password.

#### Using the obtained token

The id token has to be sent in every API request using the [HTTP Authorization request header][].

``` http
Authorization: Bearer <id-token>
```

[API specification]: https://api.biotz.io/docs/specification/developer-api.yaml
[Swagger UI]: https://api.biotz.io/docs/ui/index.html#/
[OpenAuth Password Grant Flow]: https://www.oauth.com/oauth2-servers/access-tokens/password-grant/
[OpenAPI]: https://swagger.io/resources/open-api/
[HTTP Authorization request header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
