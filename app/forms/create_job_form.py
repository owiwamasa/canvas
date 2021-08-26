from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Job


class CreateJobForm(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    dueDate = StringField('dueDate', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    artistId = IntegerField('artistId', validators=[DataRequired()])
