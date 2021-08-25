from flask import Blueprint, jsonify
from app.models import ArtistPage, User, db


artistPage_routes = Blueprint('artistPages', __name__)


@artistPage_routes.route('/')
def get_all_artist_pages():
    artist_pages = ArtistPage.query.join(User).all()
    return {'artistPages': [artist_page.toDict() for artist_page in artist_pages]}


@artistPage_routes.route('/<int:id>')
def get_artist_page(id):
    artist_page = ArtistPage.query.get_or_404(id)
    return artist_page.toDict()
