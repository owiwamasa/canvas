"""altered dueDate to string

Revision ID: 07ae75ff72d7
Revises: b14e594f1ebd
Create Date: 2021-09-04 14:38:32.168319

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07ae75ff72d7'
down_revision = 'b14e594f1ebd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('jobs', 'dueDate')
    op.add_column('jobs', sa.Column('dueDate', sa.String(length=100), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('jobs', 'dueDate')
    # ### end Alembic commands ###
