from .db import db


class Inbox(db.Model):
    __tablename__ = 'inboxes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    newMessages = db.Column(db.Boolean, default=False)

    conversations = db.relationship('Conversation', back_populates='userInbox',
                                    foreign_keys='Conversation.userInboxId')
    conversations = db.relationship(
        'Conversation', back_populates='artistInbox', foreign_keys='Conversation.artistInboxId')
    user = db.relationship('User', back_populates='inbox')

    def toDict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'newMessages': self.newMessages
        }
