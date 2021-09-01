from .db import db


class ArtistPage(db.Model):
    __tablename__ = 'artistPages'

    id = db.Column(db.Integer, primary_key=True)
    biography = db.Column(db.String(500), nullable=False)
    headerImage = db.Column(db.String(2000), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates="artistPage")
    artistLists = db.relationship(
        'ArtistTypeList', back_populates='artistPage')
    posts = db.relationship('Post', back_populates='artistPage')

    def toDict(self):
        return {
            'id': self.id,
            'biography': self.biography,
            'headerImage': self.headerImage,
            'userId': self.userId,
            'username': self.user.username,
            'profilePic': self.user.profilePic
        }
