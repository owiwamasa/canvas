from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class CreateArtistTypeListForm(FlaskForm):

    artistTypeId = IntegerField('artistTypeId', validators=[DataRequired()])
    artistPageId = IntegerField('artistPageId', validators=[DataRequired()])
