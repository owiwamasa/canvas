from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import ArtistTypeList, db
from app.forms import CreateArtistTypeListForm


artistTypeList_routes = Blueprint('artistTypeLists', __name__)


@artistTypeList_routes.route('/')
def get_artist_type_lists():
    type_lists = ArtistTypeList.query.all()
    return {'artistTypeLists': [type_list.toDict() for type_list in type_lists]}


@artistTypeList_routes.route('/', methods=['POST'])
def create_artist_type_list():
    form = CreateArtistTypeListForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        type_list = ArtistTypeList(
            artistTypeId=form.artistTypeId.data,
            artistPageId=form.artistPageId.data
        )
        db.session.add(type_list)
        db.session.commit()
        return type_list.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400


@artistTypeList_routes.route('/<int:id>', methods=['DELETE'])
def delete_artist_type_list(id):
    type_list = ArtistTypeList.query.get_or_404(id)
    db.session.delete(type_list)
    db.session.commit()
    return 'Deleted'
