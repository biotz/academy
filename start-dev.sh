#!/usr/bin/env bash

set -eu -o pipefail

docker-compose down -t 0
docker-compose up --build --detach
docker-compose logs -f docusaurus
