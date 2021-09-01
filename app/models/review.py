from .db import db
import datetime


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(1000), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    jobId = db.Column(db.Integer, db.ForeignKey('jobs.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='reviews')
    job = db.relationship('Job', back_populates='review')

    def toDict(self):
        return {
            'id': self.id,
            'review': self.review,
            'userId': self.userId,
            'jobId': self.jobId,
            'createdAt': self.createdAt
        }
