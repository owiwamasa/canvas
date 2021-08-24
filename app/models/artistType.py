from .db import db


class ArtistType(db.Model):
    __tablename__ = 'artistTypes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)

    artistList = db.relationship(
        'ArtistTypeList', back_populates='artistTypes')

    def toDict(self):
        return {
            'id': self.id,
            'title': self.title
        }
