from .db import db
import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(2000), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    artistPageId = db.Column(db.Integer, db.ForeignKey(
        'artistPages.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    likes = db.relationship('Like', back_populates='post')
    artistPage = db.relationship('ArtistPage', back_populates='posts')

    def toDict(self):
        return {
            'id': self.id,
            'image': self.image,
            'title': self.title,
            'description': self.description,
            'artistPageId': self.artistPageId,
            'createdAt': self.createdAt
        }
