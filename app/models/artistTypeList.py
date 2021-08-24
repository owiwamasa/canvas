from .db import db


class ArtistTypeList(db.Model):
    __tablename__ = 'artistTypeLists'

    id = db.Column(db.Integer, primary_key=True)
    artistTypeId = db.Column(db.Integer, db.ForeignKey(
        'artistTypes.id'), nullable=False)
    artistPageId = db.Column(db.Integer, db.ForeignKey(
        'artistPages.id'), nullable=False)

    artistTypes = db.relationship('ArtistType', back_populates='artistList')
    artistPage = db.relationship('ArtistPage', back_populates='artistLists')

    def toDict(self):
        return {
            'id': self.id,
            'artistTypeId': self.artistTypeId,
            'artistPageId': self.artistPageId
        }
