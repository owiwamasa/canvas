from flask.cli import AppGroup
from .users import seed_users, undo_users
from .artistPages import seed_artistPages, undo_artistPages
from .posts import seed_posts, undo_posts
from .artistTypes import seed_artistTypes, undo_artistTypes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_artistPages()
    seed_posts()
    seed_artistTypes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_artistTypes()
    undo_users()
    undo_artistPages()
    undo_posts()
    # Add other undo functions here
