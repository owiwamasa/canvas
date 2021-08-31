from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Post


class CreatePostForm(FlaskForm):

    title = StringField('title', validators=[DataRequired(), Length(min=1, max=200, message='Must be less than 200 characters')])
    description = StringField('description', validators=[DataRequired(), Length(min=1, max=1000, message='Must be less than 1000 characters')])
    image = StringField('image', validators=[DataRequired(), Length(min=1, max=1000, message='Must be less than 1000 characters')])
    artistPageId = IntegerField('artistPageId', validators=[DataRequired()])
