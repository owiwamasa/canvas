from .db import db


class Conversation(db.Model):
    __tablename__ = 'conversations'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    artistId = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship(
        'User', back_populates='conversations', foreign_keys='Conversation.userId')
    artist = db.relationship('User', back_populates='conversations',
                                  foreign_keys='Conversation.artistId')
    messages = db.relationship('Message', back_populates='conversation')

    def toDict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'artistId': self.artistId
        }
