from app.models import db, ArtistType


def seed_artistTypes():
    a1 = ArtistType(title='Illustrator')
    a2 = ArtistType(title='Cartoonist')
    a3 = ArtistType(title='Muralist')
    a4 = ArtistType(title='Painter')
    a5 = ArtistType(title='Graffiti Artist')
    a6 = ArtistType(title='Graphic Designer')
    a7 = ArtistType(title='Logo Designer')
    a8 = ArtistType(title='Clothing Designer')
    a9 = ArtistType(title='Sculptor')
    a10 = ArtistType(title='Animator')

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.add(a4)
    db.session.add(a5)
    db.session.add(a6)
    db.session.add(a7)
    db.session.add(a8)
    db.session.add(a9)
    db.session.add(a10)
    db.session.commit()


def undo_artistTypes():
    db.session.execute('TRUNCATE artistTypes RESTART IDENTITY CASCADE;')
    db.session.commit()
