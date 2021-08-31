from flask_socketio import SocketIO
import os


if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "https://canvas-proj.herokuapp.com",
        "https://canvas-proj.herokuapp.com"
    ]
else:
    origins = "*"

socketio = SocketIO(cors_allowed_origins=origins)


@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)
