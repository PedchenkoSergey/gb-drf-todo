#!/bin/sh
# wait-for-postgres.sh

set -e
host="$1"
shift
cmd="$@"

until PGPASSWORD="tdlist_password" psql -h "$host" -d "tdlist" -U "tdlist" -c '\q';do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd