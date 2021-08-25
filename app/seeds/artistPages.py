from app.models import db, ArtistPage


def seed_artistPages():
    banksy = ArtistPage(
        biography='Banksy is a pseudonymous England-based street artist, political activist, and film director whose real name and identity remain unconfirmed and the subject of speculation. Active since the 1990s, his satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique. His works of political and social commentary have appeared on streets, walls, and bridges throughout the world.', headerImage='https://artsy-media-uploads.s3.amazonaws.com/8XHw3cywjGpGZiF1fEW4Gw%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o+2.jpg', userId=2)
    basquiat = ArtistPage(biography='Jean-Michel Basquiat is an American artist. Regarded as one of the most influential artists of the 20th century, he rose to success during the 1980s as part of the Neo-expressionism movement. Basquiat first achieved fame as part of SAMO, a graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s, where rap, punk, and street art coalesced into early hip-hop music culture. By the early 1980s, his paintings were being exhibited in galleries and museums internationally.',
                          headerImage='https://www.illuminationsmedia.co.uk/new-site/wp-content/uploads/2017/08/Basquiat-header-748x350.jpg', userId=3)
    davidChoe = ArtistPage(biography='David Choe is an American artist, musician, and former journalist and podcast host from Los Angeles. Choe\'s work appears in a wide variety of urban culture and entertainment contexts. He has illustrated and written for magazines including Hustler, Ray Gun and Vice.',
                           headerImage='https://cdn.shopify.com/s/files/1/0155/7453/collections/david-choe.jpg?v=1398888279', userId=4)
    samFlores = ArtistPage(biography='Sam Flores is a self-taught American artist, illustrator and muralist, primarily creating urban- and graffiti-inspired modern art. His work has an art nouveau style and often plays with proportion. Flores grew up writing graffiti, reading comic books, listening to hip hop music and skateboarding, and he reflects these formative subcultures in his work.',
                           headerImage='https://mymodernmet.com/wp/wp-content/uploads/archive/jHkQock9-D4wfoFVmdtE_1082057995.jpeg', userId=5)
    picasso = ArtistPage(biography='Pablo Ruiz Picasso is a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.',
                         headerImage='http://graphics8.nytimes.com/images/2013/06/02/t-magazine/02lookout-picasso/02lookout-picasso-custom4.jpg', userId=6)
    keithHaring = ArtistPage(biography='Keith Allen Haring is an American artist whose pop art emerged from the New York City graffiti subculture of the 1980s. His animated imagery has "become a widely recognized visual language". Much of his work includes sexual allusions that turned into social activism by using the images to advocate for safe sex and AIDS awareness.',
                             headerImage='https://64.media.tumblr.com/3b5491ef9c4dae40d76f6da3e710ab18/tumblr_pktxb9KFCN1udsvzvo3_1280.png', userId=7)
    fridaKahlo = ArtistPage(biography='Frida Kahlo is a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\'s popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy.',
                            headerImage='https://observer.com/wp-content/uploads/sites/2/2015/01/kahlo.jpg?quality=80', userId=8)
    charlesSchulz = ArtistPage(biography='Charles Monroe "Sparky" Schulz is an American cartoonist and creator of the comic strip Peanuts (which featured the characters Charlie Brown and Snoopy, among others). He is widely regarded as one of the most influential cartoonists of all time, cited by cartoonists including Jim Davis, Bill Watterson, Matt Groening, and Dav Pilkey.',
                               headerImage='https://cdn.shopify.com/s/files/1/0558/2081/articles/Peanuts-Hockey_Poster_Blog-Header_1920x640_89e80b3e-9ecc-4f3d-b072-b66046c1a2a4_1920x640_crop_center.progressive.jpg?v=1625151154', userId=9)
    rhymez = ArtistPage(biography='Combining both his passion for music and visuals, he started the project called Rhymezlikedimez, which quickly grew into a worldwide brand. Best known for providing visuals for music icons like Anderson.Paak, Bruno Mars and Lil Uzi Vert, he creates a magical universe where the powers of music and illustrations collide. Besides music, Robin mainly draws inspiration from hip-hop, pop culture and positive vibes. With the main focus on keeping the highest level of quality, he creates a powerful timeless aesthetic that resonates with people all over the world.', headerImage='https://www.nftculture.com/wp-content/uploads/2021/03/Rhymezlikedimez-NFT-Artist-profile.png', userId=10)
    missVan = ArtistPage(biography='Miss Van, also known as Vanessa Alice Bensimon, was born in 1973 in Toulouse, France. She started wall-painting at the age of 20, in 1993, in the streets of her hometown. She is now considered one of the best known painters of the graffiti scene, initiating the feminine street art movement.',
                         headerImage='https://urban-nation.com/wp-content/uploads/Miss-Van.jpg', userId=11)

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


def undo_artistPages():
    db.session.execute('TRUNCATE artistPages RESTART IDENTITY CASCADE;')
    db.session.commit()
