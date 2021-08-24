from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='Demo@email.com', password='password', profilePic='https://img.icons8.com/ios/452/artist.png')
    banksy = User(
        username='Banksy', email='Banksy@email.com', password='password', isArtist=True, profilePic='https://sothebys-com.brightspotcdn.com/74/98/f4ad821547df928be67569aa1202/gettyimages-501590118.jpg')
    basquiat = User(
        username='Basquiat', email='Basquiat@email.com', password='password', isArtist=True, profilePic='https://stillwerise.uk/wp-content/uploads/2020/10/jmbmain.jpg')
    davidChoe = User(
        username='DavidChoe', email='DavidChoe@email.com', password='password', isArtist=True, profilePic='https://i.ytimg.com/vi/XhKMn7tiIpc/maxresdefault.jpg')
    samFlores = User(
        username='SamFlores', email='SamFlores@email.com', password='password', isArtist=True, profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRsnHhK9WI_7iI47HqtX4AKSR59qtZ43PHg&usqp=CAU')
    picasso = User(
        username='Picasso', email='Picasso@email.com', password='password', isArtist=True, profilePic='https://www.biography.com/.image/t_share/MTY2NTIzNTAyNjgwMDg5ODQy/pablo-picasso-at-his-home-in-cannes-circa-1960-photo-by-popperfoto_getty-images.jpg')
    keithHaring = User(
        username='KeithHaring', email='KeithHaring@email.com', password='password', isArtist=True, profilePic='https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/14/52/549d7abeccc4c_-_04-keith-haring-portrait.jpg?fill=320:390&resize=480:*')
    fridaKahlo = User(
        username='FridaKahlo', email='FridaKahlo@email.com', password='password', isArtist=True, profilePic='https://ta-images.condecdn.net/image/Z0MrnO5kOKJ/crop/1800/f/homepage.jpg')
    charlesSchulz = User(
        username='CharlesSchulz', email='CharlesSchulz@email.com', password='password', isArtist=True, profilePic='https://www.legacy.com/wp-content/uploads/2020/02/charles-schulz-1600x500-1-1200x675.jpg')
    rhymez = User(
        username='RhymezLikeDimez', email='RhymezLikeDimez@email.com', password='password', isArtist=True, profilePic='https://pbs.twimg.com/profile_images/1155118900000022529/Flt51evY_400x400.jpg')
    missVan = User(
        username='MissVan', email='MissVan@email.com', password='password', isArtist=True, profilePic='https://mag.citizensofhumanity.com/wp-content/uploads/2017/06/Miss-Van-Featured-Resized.gif')

    db.session.add(demo)
    db.session.add(banksy)
    db.session.add(basquiat)
    db.session.add(davidChoe)
    db.session.add(samFlores)
    db.session.add(picasso)
    db.session.add(keithHaring)
    db.session.add(fridaKahlo)
    db.session.add(charlesSchulz)
    db.session.add(rhymez)
    db.session.add(missVan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
