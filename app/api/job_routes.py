from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Job, User, db
from app.forms import CreateJobForm, CompleteJobForm


job_routes = Blueprint('jobs', __name__)


@job_routes.route('/')
def get_all_jobs():
    jobs = Job.query.all()
    return {'jobs': [job.toDict() for job in jobs]}


@job_routes.route('/', methods=['POST'])
def create_job():
    form = CreateJobForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        job = Job(
            title = form.title.data,
            description = form.description.data,
            dueDate = form.dueDate.data,
            userId = form.userId.data,
            artistId = form.artistId.data
        )
        db.session.add(job)
        db.session.commit()
        return job.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400


@job_routes.route('/<int:id>', methods=['DELETE'])
def delete_job(id):
    job = Job.query.get(id)
    db.session.delete(job)
    db.session.commit()
    return 'Deleted'


@job_routes.route('/<int:id>/accepted', methods=['PUT'])
def accept_job(id):
    job = Job.query.get_or_404(id)
    job.accepted = True
    db.session.commit()
    return job.toDict()

@job_routes.route('/<int:id>/completed', methods=['PUT'])
def complete_job(id):
    form = CompleteJobForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        job = Job.query.get_or_404(id)
        job.completed = True
        job.completedArtwork = form.completedArtwork.data
        db.session.commit()
        return job.toDict()

@job_routes.route('/<int:id>', methods=['PUT'])
def edit_job(id):
    form = CreateJobForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        job = Job.query.get_or_404(id)
        job.title = form.title.data
        job.description = form.description.data
        job.dueDate = form.dueDate.data
        db.session.commit()
        return job.toDict()
    errors = form.errors
    return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400
