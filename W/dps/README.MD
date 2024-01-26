# Installing Postgres SQl server with docker 
1. Doing this for your cursa learning
2. You also have done this in gitpodgitlab 
3. Now re doing that shit here 

# Docker Compose

```docker
# This will spin up a docker image with postgres and pgadmin
version: "3"

services:
  # Database server
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - .:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  # PgAdmin4  Db Management
  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: a@a.com
      PGADMIN_DEFAULT_PASSWORD: root
    ports:
      - "5050:80"
    depends_on:
      - db
```