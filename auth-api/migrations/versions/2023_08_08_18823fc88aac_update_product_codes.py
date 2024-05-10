"""update_product_codes

Revision ID: 18823fc88aac
Revises: 27d53abf3f48
Create Date: 2023-08-08 16:18:52.498957

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '18823fc88aac'
down_revision = '27d53abf3f48'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product_codes', sa.Column('need_system_admin', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###
    op.execute("UPDATE product_codes "
               "SET need_review=false, need_system_admin=true "
               "WHERE code='NDS'")
    op.execute("UPDATE product_codes "
               "SET need_system_admin=false "
               "WHERE code!='NDS'")


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('product_codes', 'need_system_admin')
    # ### end Alembic commands ###
    op.execute("UPDATE product_codes "
               "SET need_review=true "
               "WHERE code='NDS'")
