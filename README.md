run backend:
activate env:
    source env/bin/activate
run DRF:
    python3 manage.py runserver
access localhost:8000 via browser

run frontend:
go to frontend folder:
    npm start
access localhost:3000 via browser

run docker:
- sudo docker-compose up --build 
- sudo docker-compose build --no-cache && sudo docker-compose up -d --force-recreate 