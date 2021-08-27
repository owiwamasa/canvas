from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import Post


class CreatePostForm(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
    artistPageId = IntegerField('artistPageId', validators=[DataRequired()])
