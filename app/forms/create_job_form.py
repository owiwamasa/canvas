from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Job


class CreateJobForm(FlaskForm):

    title = StringField('title', validators=[DataRequired(), Length(min=1, max=200, message='Title must be less than 200 characters')])
    description = StringField('description', validators=[DataRequired(), Length(min=1, max=1000, message='Title must be less than 1000 characters')])
    dueDate = StringField('dueDate', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    artistId = IntegerField('artistId', validators=[DataRequired()])
