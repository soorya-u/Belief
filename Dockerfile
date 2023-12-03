FROM python:3.11

RUN apt update

WORKDIR /flask-app

COPY . .

RUN pip install -r requirements.txt

ENTRYPOINT [ "python", "app.py" ]