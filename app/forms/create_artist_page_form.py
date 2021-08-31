from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length
from app.models import ArtistPage


class CreateArtistPageForm(FlaskForm):

    biography = StringField('biography', validators=[DataRequired(), Length(min=1, max=1000, message='Biography must be less than 1000 characters')])
    headerImage = StringField('headerImage', validators=[DataRequired(), Length(min=1, max=1000, message='Header Image File must be less than 1000 characters')])
