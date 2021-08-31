from flask import Blueprint, jsonify, request
from app.models import Post, ArtistPage, db
from app.forms import CreatePostForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
def get_all_posts():
    posts = Post.query.join(ArtistPage).all()
    return {'posts': [post.toDict() for post in posts]}


@post_routes.route('/', methods=['POST'])
def create_post():
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "image" not in request.files:
        return jsonify(['Image is required']), 400
    image = request.files['image']

    if not allowed_file(image.filename):
        return jsonify(['Image file type is not permitted']), 400

    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400
    url = upload["url"]

    if form.validate_on_submit():
        post = Post(
            image=url,
            title=form.title.data,
            description=form.description.data,
            artistPageId=form.artistPageId.data
        )
        db.session.add(post)
        db.session.commit()
        return post.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400


@post_routes.route('/<int:id>', methods=['DELETE'])
def delete_post(id):
    post = Post.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return 'Deleted'


@post_routes.route('/<int:id>', methods=['PUT'])
def edit_post(id):
    post = Post.query.get_or_404(id)
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post.title = form.title.data
        post.description = form.description.data
        db.session.commit()
        return post.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
