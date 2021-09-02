from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class CreateConversationForm(FlaskForm):

    userId = IntegerField('userId', validators=[DataRequired()])
    artistId = IntegerField('artistId', validators=[DataRequired()])
