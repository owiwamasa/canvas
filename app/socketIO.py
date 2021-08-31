from flask_socketio import SocketIO


socketio = SocketIO(cors_allowed_origins=[
        "http://actual-app-url.herokuapp.com",
        "https://actual-app-url.herokuapp.com"
    ])
