from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

    post = db.relationship('Post', back_populates='likes')

    def toDict(self):
        return {
            'id': self.id,
            'postId': self.postId
        }
