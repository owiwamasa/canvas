from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/completed', methods=['PUT'])
def user_edit_completed(id):
    user = User.query.get(id)
    user.numCompletedJobs = user.numCompletedJobs + 1
    db.session.commit()
    users = User.query.order_by(User.id).all()
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['PUT'])
def user_edit(id):
    user = User.query.get(id)
    if user.isArtist:
        user.isArtist = False
        db.session.commit()

        users = User.query.order_by(User.id).all()
        return user.to_dict()
    else:
        user.isArtist = True
        db.session.commit()

        users = User.query.order_by(User.id).all()
        return user.to_dict()
