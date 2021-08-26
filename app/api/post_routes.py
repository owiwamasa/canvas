from flask import Blueprint, jsonify, request
from app.models import Post, ArtistPage, db


post_routes = Blueprint('posts', __name__)


@post_routes.route('/')
def get_all_posts():
    posts = Post.query.join(ArtistPage).all()
    return {'posts': [post.toDict() for post in posts]}
