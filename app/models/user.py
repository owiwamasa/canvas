from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    isArtist = db.Column(db.Boolean, default=False)
    profilePic = db.Column(db.String(1000), nullable=True)

    artistPage = db.relationship('ArtistPage', back_populates='user')
    inbox = db.relationship('Inbox', back_populates='user')
    jobs = db.relationship('Job', back_populates='user',
                           foreign_keys='Job.userId')
    jobs = db.relationship('Job', back_populates='artist',
                           foreign_keys='Job.artistId')
    messages = db.relationship('Message', back_populates='user')
    reviews = db.relationship('Review', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'isArtist': self.isArtist,
            'profilePic': self.profilePic
        }
