from flask import Blueprint, jsonify, request
from app.models import Conversation, Message, db
from app.forms import CreateConversationForm
from flask_login import current_user
from sqlalchemy import or_


conversation_routes = Blueprint('conversations', __name__)


@conversation_routes.route('/')
def get_all_conversations():
    conversations = Conversation.query.filter(or_(Conversation.userId == current_user.id, Conversation.artistId == current_user.id)).all()
    return {'conversations': [conversation.toDict() for conversation in conversations]}


@conversation_routes.route('/', methods=['POST'])
def create_conversation():
    form = CreateConversationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        conversation = Conversation(
            userId=form.userId.data,
            artistId=form.artistId.data
        )
        db.session.add(conversation)
        db.session.commit()
        return conversation.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
