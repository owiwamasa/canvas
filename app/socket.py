from flask_socketio import SocketIO, send, emit, join_room
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
    #add to database
    emit("chat", data)

@socketio.on('join')
def on_join(data):
    username = data['sender']
    room = data['room']
    join_room(room)
    send(username + 'has entered the chat.', to=room)
