from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, Length


class MessageForm(FlaskForm):

    message = StringField('message', validators=[DataRequired(), Length(min=1, max=500, message='Message must be less than 500 characters')])
    conversationId = IntegerField('conversationId', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
