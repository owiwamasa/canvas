from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from app.models import Job


class CompleteJobForm(FlaskForm):

    completedArtwork = StringField('completedArtwork', validators=[DataRequired()])
