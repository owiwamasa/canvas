from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length
from app.models import ArtistPage


class CreateArtistPageForm(FlaskForm):

    biography = StringField('biography', validators=[DataRequired(), Length(min=1, max=500, message='Must be less than 500 characters')])
    headerImage = StringField('headerImage', validators=[DataRequired()])
