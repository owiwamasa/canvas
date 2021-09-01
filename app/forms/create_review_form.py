from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CreateReviewForm(FlaskForm):

    review = StringField('review', validators=[DataRequired(), Length(min=1, max=1000, message='Must be less than 1000 characters')])
    userId = IntegerField('userId', validators=[DataRequired()])
    jobId = IntegerField('jobId', validators=[DataRequired()])
