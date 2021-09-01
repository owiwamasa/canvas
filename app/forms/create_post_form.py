from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Post


class CreatePostForm(FlaskForm):

    title = StringField('title', validators=[DataRequired(), Length(min=1, max=200, message='Must be less than 200 characters')])
    description = StringField('description', validators=[DataRequired(), Length(min=1, max=500, message='Must be less than 500 characters')])
    image = StringField('image', validators=[DataRequired()])
    artistPageId = IntegerField('artistPageId', validators=[DataRequired()])
