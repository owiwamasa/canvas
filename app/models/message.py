from .db import db
import datetime


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), nullable=False)
    conversationId = db.Column(db.Integer, db.ForeignKey(
        'conversations.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    read = db.Column(db.Boolean, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='messages')
    conversation = db.relationship('Conversation', back_populates='messages')

    def toDict(self):
        return {
            'id': self.id,
            'message': self.message,
            'conversationId': self.conversationId,
            'userId': self.userId,
            'read': self.read,
            'createdAt': self.createdAt
        }
