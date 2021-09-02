from flask import Blueprint, jsonify, request
from app.models import Message, db, User
from app.forms import MessageForm


message_routes = Blueprint('messages', __name__)


@message_routes.route('/')
def get_all_messages():
    messages = Message.query.join(User).all()
    return {'messages': [message.toDict() for message in messages]}


@message_routes.route('/', methods=['POST'])
def create_message():
    form = MessageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        message = Message(
            message=form.message.data,
            conversationId=form.conversationId.data,
            userId=form.userId.data,
            read=False
        )
        db.session.add(message)
        db.session.commit()
        return message.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
