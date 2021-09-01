from flask import Blueprint, jsonify, request
from app.models import Review, Job, db
from app.forms import CreateReviewForm


review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.toDict() for review in reviews]}


@review_routes.route('/', methods=['POST'])
def create_review():
    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            review=form.review.data,
            userId=form.userId.data,
            jobId=form.jobId.data
        )
        db.session.add(review)
        db.session.commit()
        return review.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
