from .db import db
import datetime


class Job(db.Model):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    dueDate = db.Column(db.DateTime, nullable=False)
    accepted = db.Column(db.Boolean, default=False)
    completed = db.Column(db.Boolean, default=False)
    completedArtwork = db.Column(db.String(2000), nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    artistId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='jobs',
                           foreign_keys='Job.userId')
    artist = db.relationship(
        'User', back_populates='jobs', foreign_keys='Job.artistId')
    review = db.relationship('Review', back_populates='job')

    def toDict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'dueDate': self.dueDate,
            'accepted': self.accepted,
            'completed': self.completed,
            'completedArtwork': self.completedArtwork,
            'userId': self.userId,
            'artistId': self.artistId,
            'createdAt': self.createdAt
        }
