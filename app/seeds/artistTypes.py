from app.models import db, ArtistType


def seed_artistTypes():
    a1 = ArtistType(title='Illustrator', image='https://images.wisegeek.com/fashion-designer-sketching-close-up.jpg')
    a2 = ArtistType(title='Cartoonist', image='https://i.pinimg.com/originals/d8/97/16/d8971603af2fc359cf88c31bcd89dad1.png')
    a3 = ArtistType(title='Muralist', image='https://sightlinesmag.org/wp-content/uploads/2020/04/WritingontheWalls-Bjornson-0492.jpg')
    a4 = ArtistType(title='Painter', image='https://media.npr.org/assets/img/2016/08/22/bobearly1_custom-370196c6c7ccc113e242096bb8e7164e96af78f9.jpg')
    a5 = ArtistType(title='Graffiti Artist', image='https://offthebeatenpagetravel.files.wordpress.com/2015/01/img_3909.jpg?w=640')
    a6 = ArtistType(title='Graphic Designer', image='http://www.loudegg.com/wp-content/uploads/2020/09/Graphic-Designer-Artist.png')
    a7 = ArtistType(title='Logo Designer', image='https://images.solecollector.com/complex/image/upload/fqdi6wlg68ziewamrhwm.jpg')
    a8 = ArtistType(title='Clothing Designer', image='http://www.birminghamtimes.com/wp-content/uploads/2020/12/BHM_Fashion_DSC00573.jpg')
    a9 = ArtistType(title='Sculptor', image='https://www.superprof.com/blog/wp-content/uploads/2019/08/igor-ferreira-IgVO4R3AlaU-unsplash-1060x596.jpg')
    a10 = ArtistType(title='Animator', image='https://i.pinimg.com/originals/72/b7/2e/72b72ee2791b734c72a66c5e2aa627c2.jpg')

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
    db.session.execute('TRUNCATE "artistTypes" RESTART IDENTITY CASCADE;')
    db.session.commit()
