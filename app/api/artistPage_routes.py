from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import ArtistPage, User, db, Post, ArtistTypeList
from app.forms import CreateArtistPageForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


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

    if "headerImage" not in request.files:
        return jsonify(['Header image is required']), 400
    headerImage = request.files['headerImage']

    if not allowed_file(headerImage.filename):
        return jsonify(['Header image file type is not permitted']), 400

    headerImage.filename = get_unique_filename(headerImage.filename)
    upload = upload_file_to_s3(headerImage)

    if "url" not in upload:
        return upload, 400
    url = upload["url"]

    if form.validate_on_submit():
        artist = ArtistPage(
            biography=form.biography.data,
            headerImage=url,
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
    posts = Post.query.filter(Post.artistPageId == id).all()
    for post in posts:
        db.session.delete(post)
    db.session.commit()
    tags = ArtistTypeList.query.filter(ArtistTypeList.artistPageId == id).all()
    for tag in tags:
        db.session.delete(tag)
    db.session.commit()
    artistPage = ArtistPage.query.get(id)
    db.session.delete(artistPage)
    db.session.commit()
    return 'Deleted'


@artistPage_routes.route('/<int:id>', methods=['PUT'])
def edit_artist_page(id):
    form = CreateArtistPageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "headerImage" in request.files:
        headerImage = request.files['headerImage']

        if not allowed_file(headerImage.filename):
            return jsonify(['Header image file type is not permitted']), 400

        headerImage.filename = get_unique_filename(headerImage.filename)
        upload = upload_file_to_s3(headerImage)

        if "url" not in upload:
            return upload, 400
        url = upload["url"]

    if form.validate_on_submit():
        artist = ArtistPage.query.get_or_404(id)
        artist.biography = form.biography.data
        if "headerImage" in request.files:
            artist.headerImage = url
        db.session.commit()
        return artist.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
