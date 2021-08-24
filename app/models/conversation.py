from .db import db


class Conversation(db.Model):
    __tablename__ = 'conversations'

    id = db.Column(db.Integer, primary_key=True)
    userInboxId = db.Column(
        db.Integer, db.ForeignKey('inboxes.id'), nullable=False)
    artistInboxId = db.Column(
        db.Integer, db.ForeignKey('inboxes.id'), nullable=False)

    userInbox = db.relationship(
        'Inbox', back_populates='conversations', foreign_keys='Conversation.userInboxId')
    artistInbox = db.relationship('Inbox', back_populates='conversations',
                                  foreign_keys='Conversation.artistInboxId')
    messages = db.relationship('Message', back_populates='conversation')

    def toDict(self):
        return {
            'id': self.id,
            'userInboxId': self.userInboxId,
            'artistInboxId': self.artistInboxId
        }
