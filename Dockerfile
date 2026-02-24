FROM node:20-trixie-slim

ENV BINARIES_INSTALL_PATH=/usr/local/bin

RUN set -eux; \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    ca-certificates=20250419 \
    runit=2.2.0-3 && \
    useradd --home-dir /home/hop --create-home --shell /bin/bash --user-group hop && \
    apt-get -y autoremove && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY docker/run-as-user.sh "${BINARIES_INSTALL_PATH}"

WORKDIR /app

ENTRYPOINT ["run-as-user.sh"]