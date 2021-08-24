from app.models import db, Post


def seed_posts():
    a1 = Post(image='https://artsy-media-uploads.s3.amazonaws.com/8XHw3cywjGpGZiF1fEW4Gw%2Fcustom-Custom_Size___2840632113_d56b9fb20f_o+2.jpg', title='Girl w/ Balloon',
              description='Girl with Balloon (also, Balloon Girl or Girl and Balloon) is a 2002-started London series of stencil murals by the graffiti artist Banksy, depicting a young girl with her hand extended toward a red heart-shaped balloon carried away by the wind.', artistPageId=1)
    a2 = Post(image='https://www.myartbroker.com/wp-content/uploads/2020/11/1231_Banksy_Napalm_ScreenPrint_UnsignedPrint_2004-13c902b744b21e5bb420a5495d39e513.jpg', title='Napalm',
              description='One of Banksy’s most harrowing motifs is an image of Mickey Mouse and Ronald McDonald happily skipping along while flanking a naked, crying young girl. The figure here is a familiar one—even if many viewers might not immediately place her as the subject of a 1972 photograph from the Vietnam War.', artistPageId=1)
    a3 = Post(image='https://images.fineartamerica.com/images-medium-large-5/banksy-flower-thrower-in-east-jerusalem-arik-bennado.jpg', title='Love is in the Air',
              description='Banksy first executed this work in Jerusalem in 2003, painting it on the city’s West Bank barrier wall that separates Israel from its Occupied Territories. The image—which has been endlessly replicated since—depicts a protestor, sometimes referred to as “the masked thug,” caught in the act of hurling…a bouquet of colorful flowers, not a Molotov cocktail.', artistPageId=1)
    a4 = Post(image='https://i.pinimg.com/736x/00/de/88/00de883b9bd6392c9c2e95207e8d4315.jpg',
              title='Basquiat being “stopped-and-frisked” outside the Barbican Centre', description='Banksy’s samplings from the art-historical canon are rare, but astute. For a 2018 piece in Paris, for instance, he pilfered a motif from Jacques-Louis David’s painting Napoleon Crossing the Alps (1800–01). And at the Barbican Centre in 2017, he threw up this biting mural, showing a man and his dog, borrowed from Jean-Michel Basquiat’s 1982 work Boy and Dog in a Johnnypump.', artistPageId=1)
    a5 = Post(image='https://sothebys-com.brightspotcdn.com/dims4/default/17f5e7b/2147483647/strip/true/crop/1800x1800+0+900/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F8f%2Fcd%2F387d61724c5da3914c515934de1b%2Fbanksy-love-is-in-the-bin.jpg', title='Love is in the Bin',
              description='Banksy has been recycling the motif of a Girl with Balloon regularly since the early 2000s. The composition is dead simple—a young child gesturing toward a heart-shaped balloon floating away from her. It’s not clear whether the girl has released the balloon on purpose, or has let go of the string by accident.', artistPageId=1)
    b1 = Post(image='https://www.kazoart.com/blog/wp-content/uploads/2018/12/dusthead-basquiat-1982-1024x882.jpg', title='Dusthead',
              description='His first works show a rather surprising interest in death, which became a central part of his art for the entirety of his career. His depictions are not soothing but thought provoking. There’s an obvious violent streak that is conveyed through bright colours imposed on dark and gloomy backgrounds.', artistPageId=2)
    b2 = Post(image='https://www.kazoart.com/blog/wp-content/uploads/2018/12/basquiat_untitled-1981.jpg', title='Untitled Skull 1981',
              description='Playing with the dichotomy of the interior and exterior, his art often depicts both the inside and outside of a face. Unlike in Dusthead (above), in his Skull depictions, Basquiat’s use of colour lies principally in the background and the darkness found in the jumbled scrawls on the head denotes the idea of death.', artistPageId=2)
    b3 = Post(image='https://www.kazoart.com/blog/wp-content/uploads/2018/12/untitled-skull-1982.jpg',
              title='Untitled Skull 1982', description='This 1.8 by 1.73 metre canvas reached a record high at Sotheyby’s New York in 2017 by selling at $110.5 million after over ten minutes of bidding. The estimate was originally set at $57 million.', artistPageId=2)
    b4 = Post(image='https://www.kazoart.com/blog/wp-content/uploads/2018/12/basquiat-untitled-boxer-1982-1024x839.jpg', title='Untitled Boxer',
              description='African-American and Carribean culture is a predominant theme in Basquiat’s art. He did not try to obscure the political messages therein and proudly promoted his Creole heritage. His works also highlight legendary figures in African-American history such as Cassius Clay (Mohamed Ali), Sugar Ray Robinson and Malcom X.', artistPageId=2)
    b5 = Post(image='https://www.kazoart.com/blog/wp-content/uploads/2018/12/warhol-Basquiat-WIN-s-1984-1024x597.jpg', title='Win $1,000,000',
              description='We couldn’t talk about Jean-Michel Basquiat without mentioning his life-long friend and mentor, Andy Warhol. Their friendship was explosive and from their collaboration, we have around a hundred works. This partnership was uncommon since their styles and worlds were seemingly opposite at the time.', artistPageId=2)
    c1 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/ADMRCAAA4EA7IAIAAAAABYIB6QA7777774AAAAAA2ACQYBQA.jpg', title='Hug Ambassadors',
              description='“HUG AMBASSADORS” – is my newest print, based off a watercolor I did inspired by my trip to Afghanistan. BTW those aren’t real guns, they are customized super soakers loaded with love juice it’s my most hippiest piece to date.', artistPageId=3)
    c2 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/ABHBAAAARAA7IAIAAAAABCAB6QA7777774AAAAAA24AVQAQA.jpg', title='Blanket',
              description='It\'s of a watercolor of a sleeping beauty wrapped in a reality distortion force field. Giclee print on Hahnemuhle photorag satin archival paper,I\'ve painted additional watercolors on every single one of the prints so no two are alike.', artistPageId=3)
    c3 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/AC5A2AAA6QAXOAIAAAAAB5ABO4A7777774AAAAAALABMEAIA.jpg',
              title='Toxic LA Sunsets And The Dirty Moon Hangs Like A Filthy Fingernail', description='Ok don’t ever say I didn’t do anything for you. I was gonna save this bad boy for next year, but due to all your incessant whining childish demands, I give in to your pressure. This is a 7 by 10 foot painting on canvas titled “toxic la sunsets and the dirty moon hangs like a filthy fingernail.” I used acrylic, latex paint , oil paint, oil stick, and spray paint', artistPageId=3)
    c4 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/AAWAGAAA6QA7IAIAAAAAB5AB6QA7777774AAAAAA5AB6QAYA.jpg', title='Tokyo Girl',
              description='for those of you who couldnt make it to my show in tokyo, dont worry they banned me from my own show in japan ,so i didnt get to go either:( but that didnt stop me from enjoying pictures and news of how awesome the show went and all how awesome all the japanese fans were! thanks guys!!!', artistPageId=3)
    c5 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/ACAAEAAAUMA7IAIAAAAABIYB6QA7777774AAAAAA6QAVIAQA.jpg', title='Ignored Prayers',
              description='my newest print IGNORED PRAYERS will be released tonight, first come first served. it’s from the painting that looks better backwards, have fun as you try to count all the faces and different schizo personalities that live inside my head, have fun as you try to count all the blackheads.', artistPageId=3)
    d1 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/AB4UAAAA6QAXQAIAAAAAB5ABPAA7777774AAAAAALABMGAIA.jpg', title='Follow Me',
              description='We are all different in many ways, but the path remains the same. It is so easy to loose your way or veer off the path. We all can use help and friend to guild us where we need to go.', artistPageId=4)
    d2 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/AB5EAAAA6QAZ4AIAAAAAB5ABTYA7777774AAAAAALABPCAIA.jpg', title='Innocent When We Dream',
              description='And that\'s what innocence is. It\'s simple and trusting like a child, not judgmental and committed to one narrow point of view. If you are locked into a pattern of thinking and responding, your creativity gets blocked. You miss the freshness and magic of the moment. Learn to be innocent again, and that freshness never fades.', artistPageId=4)
    d3 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/AAWQ6AAAO4A7IAIAAAAAA5YB6QA7777774AAAAAAYIAVQAQA.jpg', title='Jungle Baby',
              description='Surrounded by lush flowers, birds and butterflies, Sam Flores signature female character is offset by vibrant pinks and greens that contrast with the gray and black background.', artistPageId=4)
    d4 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/ACFSUAAA6QA7IAIAAAAAB5AB6QA7777774AAAAAALABFQAQA.png',
              title='Heads', description='Colorful print of two sisters sharing a blanket.', artistPageId=4)
    d5 = Post(image='https://www.artcollectorz.com/assets/managed/images/cache/ACHCUAAA6QA7IAIAAAAAB5AB6QA7777774AAAAAALABFQAQA.jpg',
              title='Boombox Face', description='A tribute to my love of hip-hop music and culture', artistPageId=4)
    e1 = Post(image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_833,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200122162735-04-picasso-famous-paintings.jpg', title='The Old Guitarist',
              description='"The Old Guitarist" has to be one of the most sorrowful paintings to ever capture the art world\'s imagination. The figure depicted -- gaunt and cross-legged -- appears exhausted as he slumps over his brown guitar.', artistPageId=5)
    e2 = Post(image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_833,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200122163136-06-picasso-famous-paintings.jpg', title='Garçon à la Pipe',
              description='With "Garçon à la Pipe (Boy With a Pipe)," we move from Picasso\'s blue period to the more lively rose period. And while the figure in the oil-on-canvas portrait is clothed in blue, the background features happier shades of ochre and pink.', artistPageId=5)
    e3 = Post(image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_833,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200122162451-02-picasso-famous-paintings.jpg', title='Les Demoiselles d\'Avignon',
              description='Everything about "Les Demoiselles d\'Avignon" was shocking to the art world when it was finally shown in 1916, almost a decade after Picasso had finished it. From the subject matter (women in a brothel) to the early cubist style that contorts their bodies and how their eyes directly meet the gaze of its viewers, the effect was incendiary.', artistPageId=5)
    e4 = Post(image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_833,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200122162354-01-picasso-famous-paintings.jpg', title='Guernica',
              description='"Guernica" is not only Picasso\'s best-known work, it\'s one of the most famous (and Google-searched) paintings in the world. Its depiction of an aerial bombing raid on the Basque town of Guernica in April 1937, during the Spanish Civil War, was an eerie visual prelude to the coming atrocities of World War II.', artistPageId=5)
    e5 = Post(image='https://www.researchgate.net/profile/Sander-Van-De-Cruys/publication/228108062/figure/fig4/AS:302186769731587@1449058348372/Weeping-Woman-1937-Pablo-Picasso_Q640.jpg', title='The Weeping Woman',
              description='In today\'s cinematic terms, think of "The Weeping Woman" as something of a sequel to "Guernica." Whereas "Guernica" depicts the fresh and full sweep of destruction, "Weeping Woman" examines the emotional aftermath of war, tightly focused on one woman plucked from the original painting.', artistPageId=5)
    f1 = Post(image='https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/05/14710632704_8ac1abdf3c_k.jpg', title='Crack is Wack',
              description='One of Haring’s most famous works is a public mural painted on a handball court on 128th Street and 2nd Avenue. Painted in 1986, Crack is Wack was a direct response to the crack epidemic that swept New York City in the 1980s.', artistPageId=6)
    f2 = Post(image='https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/05/768px-keith_haring_berlin-tiergarten.jpg', title='Boxers',
              description='Considered one of the artist’s most influential sculptures, Boxers (1988) was created in Germany where it remains in front of the Grand Hyatt Hotel on Potsdamer Platz.', artistPageId=6)
    f3 = Post(image='https://www.theartist.me/wp-content/uploads/2021/03/andy-mouse-1986.jpg', title='Andy Mouse',
              description='Andy Mouse was made in the year 1986 which is the fusion between Disney’s Mickey Mouse, a favorite character of Haring’s from his childhood, and Andy Warhol, Haring’s close friend and a leading Pop Art artist.', artistPageId=6)
    f4 = Post(image='https://www.theartist.me/wp-content/uploads/2021/03/lucky-strike-19871.jpg', title='Lucky Strike',
              description='Lucky Strike was made in the year 1987. This painting is one of the Famous Paintings created by Keith Haring for the cigarette company lucky strike as an advertisement. Keith Haring’s work responded to the New York City street culture of the 1980s by expressing concepts of birth, death, sexuality, and war. ', artistPageId=6)
    f5 = Post(image='https://www.theartist.me/wp-content/uploads/2021/03/best-buddies-1990.jpgLarge.jpg', title='Best Buddies',
              description='Best Buddies was made in the year 1990. This was one of his final print series before he dies of AIDS-related complications. This artwork depicts two figures hugging, with rays emanating from their embrace.', artistPageId=6)
    g1 = Post(image='https://www.fridakahlo.org/images/paintings/self-portrait-with-necklace-of-thorns.jpg', title='Self-Portrait with Thorn Necklace and Hummingbird.',
              description='Kahlo completed this piece in 1940, one year after her tumultuous divorce from Mexican muralist Diego Rivera. Given the timing of its creation, Self-Portrait with Thorn Necklace and Hummingbird is widely believed to be a reflection of her emotional state following the couple\'s split.', artistPageId=7)
    g2 = Post(image='https://www.fridakahlo.org/images/paintings/the-two-fridas.jpg', title='The Two Fridas',
              description='In this piece, Kahlo explores two sides of herself. On the left, she depicts herself as a broken-hearted woman clad in a traditionally European gown. On the right, her heart is whole, and she is wearing a modern Mexican dress—a style she adopted while married to Rivera.', artistPageId=7)
    g3 = Post(image='https://artanddesigninspiration.com/wp-content/uploads/2016/06/Frida-Kahlo-Self-Portrait-with-Cropped-Hair.jpg', title='Self Portrait with Cropped Hair',
              description='Seated on a bright yellow chair with scissors in hand and locks of hair surrounding her, the artist is shown with a short haircut and clad in a man\'s suit. Above her floats a pertinent lyric from a Mexican folk song.', artistPageId=7)
    g4 = Post(image='https://uploads1.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-along-the-boarder-line-between-mexico-and-the-united-states-1932.jpg!Large.jpg', title='Self-Portrait on the Borderline Between Mexico and the United States',
              description='Self-Portrait on the Borderline Between Mexico and the United States depicts Kahlo\'s dislike for the industrial and capitalist culture of the U.S. as well as her longing for the agrarian lifestyle of Mexico.', artistPageId=7)
    g5 = Post(image='https://www.fridakahlo.org/images/paintings/my-grandparents-my-parents-and-me.jpg', title='My Grandparents, My Parents, And I',
              description='My Grandparents, My Parents, and I is one of two family tree paintings Kahlo ever created. It documents her mixed-race heritage, with her Mexican mother and Mexican maternal grandparents on the left, and her German father and German grandparents on the right.', artistPageId=7)
    h1 = Post(image='https://cdn.theatlantic.com/thumbor/6YkcrRBiYGvcWgXMt5Ub2KPOP8s=/445x55:3715x2507/1200x900/media/img/2015/09/BOB_Boxer_Peanuts_Opener_HP/original.jpg',
              title='Snoopy\'s House', description='Classic drawing of Snoopy sitting on top of his house', artistPageId=8)
    h2 = Post(image='https://www.ctswholesalesunglasses.com/product_images/uploaded_images/joe-cool.jpg',
              title='Joe Cool', description='Drawing of Snoopy as Joe Cool', artistPageId=8)
    h3 = Post(image='https://i.pinimg.com/originals/a4/66/7a/a4667a74aa5836149db255f1a0fd8a94.jpg',
              title='The Peanuts Gang', description='Original drawing of the Peanuts gang together', artistPageId=8)
    h4 = Post(image='https://cdn.shopify.com/s/files/1/0558/2081/files/Peanuts_Sigh_Sm-S_1024x1024.jpg?v=1574276382',
              title='Baseball Comic', description='Snoopy is a baseball hero, while Charlie Brown nearly lost the game.', artistPageId=8)
    h5 = Post(image='https://miro.medium.com/max/1200/1*NjW6ysmoDiHA0zyTea_Zbw.jpeg',
              title='Charlie Brown Christmas', description='Charlie and his tiny Christmas tree.', artistPageId=8)
    i1 = Post(image='https://64.media.tumblr.com/8c175542598f90b9eecd2e108f172af5/tumblr_pc4iggZmiL1upmw66o1_1280.jpg',
              title='Kids See Ghosts', description='Kanye and Kid Cudi ride away on a ghost.', artistPageId=9)
    i2 = Post(image='http://www.artnet.com/WebServices/images/ll1712099llgONkR3CfDrCWBHBAD/rhymezlikedimez-tyler-the-creator.jpg',
              title='Tyler the Creator', description='Artwork for Tyler\'s album Flower Boy.', artistPageId=9)
    i3 = Post(image='https://admin.itsnicethat.com/images/YH9bbZqqAWhX3qQaWfN98f6m114=/150343/width-1440/5b1024a97fa44ca50600092f.jpg',
              title='Lyk Dis', description='Music Video for Anderson Paak\'s Lyk Dis.', artistPageId=9)
    i4 = Post(image='https://pbs.twimg.com/media/EQrJu0gXUAEhynV.jpg', title='Mac Miller',
              description='Tribute to the legend Mac Miller', artistPageId=9)
    i5 = Post(image='https://www.hungertv.com/wp-content/uploads/2019/01/Solo-Frank-Ocean-by-RhymezLikeDimez.png',
              title='Frank Ocean', description='Artwork for Frank Ocean\'s album Channel Orange.', artistPageId=9)
    j1 = Post(image='https://missvan.com/wp-content/uploads/2021/04/PaleMoonlight-Muse_miss-van_2021_print6.jpg', title='PaleMoonlight Muse V',
              description='I’m delighted to release these two prints for my upcoming show “Pale Moonlight Muses “ at Dorothy Circus Gallery in London , opening on April 15th till May 15th 2021 ', artistPageId=10)
    j2 = Post(image='https://missvan.com/wp-content/uploads/2021/04/Tiny-Muse_miss-van_2021_print5.jpg', title='Tiny Muse VI ',
              description='I’m delighted to release these two prints for my upcoming show “Pale Moonlight Muses “ at Dorothy Circus Gallery in London , opening on April 15th till May 15th 2021 ', artistPageId=10)
    j3 = Post(image='https://missvan.com/wp-content/uploads/2020/05/IMG_2888.jpg', title='Pale Moonlight Muse I',
              description='I am especially happy to release “Pale Moonlight Muse I” , a limited edition print , as we finally see the light , after these difficult times confined , in quarantine .', artistPageId=10)
    j4 = Post(image='https://i.pinimg.com/550x/0e/1d/19/0e1d19bb172e9c7c63d905d91a9f477d.jpg',
              title='Bikini Girl', description='Graffiti created bikini girl.', artistPageId=10)
    j5 = Post(image='https://www.streetartbio.com/wp-content/uploads/2020/03/452188_98e571dba0d2494ca30241856f51219b.jpg',
              title='Goddess Mural', description='Mural created in England using spraypaint/ graffiti techniques.', artistPageId=10)

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.add(a4)
    db.session.add(a5)
    db.session.add(b1)
    db.session.add(b2)
    db.session.add(b3)
    db.session.add(b4)
    db.session.add(b5)
    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    db.session.add(c5)
    db.session.add(d1)
    db.session.add(d2)
    db.session.add(d3)
    db.session.add(d4)
    db.session.add(d5)
    db.session.add(e1)
    db.session.add(e2)
    db.session.add(e3)
    db.session.add(e4)
    db.session.add(e5)
    db.session.add(f1)
    db.session.add(f2)
    db.session.add(f3)
    db.session.add(f4)
    db.session.add(f5)
    db.session.add(g1)
    db.session.add(g2)
    db.session.add(g3)
    db.session.add(g4)
    db.session.add(g5)
    db.session.add(h1)
    db.session.add(h2)
    db.session.add(h3)
    db.session.add(h4)
    db.session.add(h5)
    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(j1)
    db.session.add(j2)
    db.session.add(j3)
    db.session.add(j4)
    db.session.add(j5)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
