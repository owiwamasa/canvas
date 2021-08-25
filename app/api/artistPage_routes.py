from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import ArtistPage, User, db
from app.forms import CreateArtistPageForm


artistPage_routes = Blueprint('artistPages', __name__)


@artistPage_routes.route('/')
def get_all_artist_pages():
    artist_pages = ArtistPage.query.join(User).all()
    return {'artistPages': [artist_page.toDict() for artist_page in artist_pages]}


@artistPage_routes.route('/<int:id>')
def get_artist_page(id):
    artist_page = ArtistPage.query.get_or_404(id)
    return artist_page.toDict()


@artistPage_routes.route('/', methods=['POST'])
def create_artist_page():
    form = CreateArtistPageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        artist = ArtistPage(
            biography=form.biography.data,
            headerImage=form.headerImage.data,
            userId=current_user.id
        )
        db.session.add(artist)
        db.session.commit()
        return artist.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400


@artistPage_routes.route('/<int:id>', methods=['DELETE'])
def delete_artist_page(id):
    artistPage = ArtistPage.query.get(id)
    db.session.delete(artistPage)
    db.session.commit()
    return 'Deleted'
