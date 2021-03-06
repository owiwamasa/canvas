"""made headerImage not null

Revision ID: 440cd56f9e2d
Revises: d33d367bf09b
Create Date: 2021-08-30 21:28:51.016065

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '440cd56f9e2d'
down_revision = 'd33d367bf09b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('artistPages', 'headerImage',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('artistPages', 'headerImage',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
    # ### end Alembic commands ###
