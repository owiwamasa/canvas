from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from app.models import ArtistPage


class CreateArtistPageForm(FlaskForm):

    biography = StringField('biography', validators=[DataRequired()])
    headerImage = StringField('headerImage', validators=[DataRequired()])
