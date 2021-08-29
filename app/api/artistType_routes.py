from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import ArtistType, db


artistType_routes = Blueprint('artistTypes', __name__)


@artistType_routes.route('/')
def get_all_artist_types():
    artist_types = ArtistType.query.all()
    return {'artistTypes': [artist_type.toDict() for artist_type in artist_types]}
