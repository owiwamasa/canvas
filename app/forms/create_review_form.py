from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class CreateReviewForm(FlaskForm):

    review = StringField('review', validators=[DataRequired(), Length(min=1, max=500, message='Must be less than 500 characters')])
    userId = IntegerField('userId', validators=[DataRequired()])
    jobId = IntegerField('jobId', validators=[DataRequired()])
