const Users = [
    {firstName: 'Dan', lastName: 'Gutt', profileImg: 'https://s3.amazonaws.com/photos.geni.com/p13/33/ed/18/dc/5344483cf795bb4f/sit48gaj_medium.jpg', email: 'Dgutt@email.com', password: '12345', userType: 'user'},
    {firstName: 'Shaheed', lastName: 'Shamsi', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnSapKSXYPoVZz9KGvCQx5NLz-zMd0qcxVXOzIyx87Vu8SAoz', email: 'sshamsi@email.com', password: '12345', userType: 'user'},
    {firstName: 'Minh', lastName: 'Nguyen', profileImg: 'https://s.hswstatic.com/gif/eastwood-rule-orig.jpg', email: 'mnguyen@email.com', password: '12345', userType: 'user'},
    {firstName: 'Chris', lastName: 'Jones', profileImg: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2012/08/BadandUgly.jpg', email: 'cjones@email.com', password: '12345', userType: 'user'},
    {firstName: 'Jess', lastName: 'Peter', profileImg: 'https://cap.stanford.edu/profiles/viewImage?profileId=47087&type=square&ts=1509496136819', email: 'jpeter@gmail.com', password: '12345', userType: 'user'},
    {firstName: 'Mary', lastName: 'Susan', profileImg: 'https://s-s.huffpost.com/contributors/lisa-copeland/headshot.jpg', email: 'jkWahaaa@gmail.com', password: '12345', userType: 'user'},
    {firstName: 'John', lastName: 'Dumby', profileImg: 'http://fcnaija.com/uploads/2017/01/arsene-wenger.jpg', email: 'pp444@yahoo.com', password: '12345', userType: 'user'},
    {firstName: 'Laura', lastName: 'Antler', profileImg: 'http://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png', email: 'antler62@gmail.com', password: '12345', userType: 'user'},
    {firstName: 'Caleb', lastName: 'Pop', email: 'poprules@hotmail.com', password: '12345', userType: 'user'},
    {firstName: 'Joanna', lastName: 'Person', email: 'JoannaLives@gmail.com', password: '12345', userType: 'user'},
    {firstName: 'Stef', lastName: 'Porc', email: 'stepppphy@gmail.com', password: '12345', userType: 'user'},
    {firstName: 'Ned', lastName: 'Waka', email: 'cubsplaybaseballteam@aol.com', password: '12345', userType: 'user'},
    {firstName: 'Teeth', lastName: 'Johnson', email: 'myteethmyteeth@aol.gom', password: 'teethman', userType: 'user'},
    {firstName: 'Paul', lastName: 'Stuff', email: 'hisTeethAre@gmail.com', password: 'toothy', userType: 'user'},
    {firstName: 'Jenny', lastName: 'Teeth', email: 'whatteeth@gmail.com', password: 'hoggagagag', userType: 'user'},
]
const Posts = [
    {latitude: 41.904207, longitude: -87.644676, mediaType: "image", title: "Hangin at Target", text: "I love Target! Bought me a cart", mediaLink: 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2013/targetjustic.jpg', categoryId: 1, userId: 5},
    {latitude: 41.903959, longitude: -87.634353, mediaType: "image", title: "PIZZA", text: "", mediaLink: 'https://www.mercurynews.com/wp-content/uploads/2018/05/sjm-l-pizza-0610-22.jpg?w=620', categoryId: 1, userId: 5},
    {latitude: 41.914644, longitude: -87.625527, mediaType: "image", title: "Beach with the folks", text: "Sometimes I go to the beach", mediaLink: 'https://urbangreenberg.files.wordpress.com/2008/10/img_0831.jpg', categoryId: 1, userId: 5},
    {latitude: 41.910233, longitude: -87.626470, mediaType: "image", title: "INTERNATIONAL MUSEUM OF SURGICAL SCIENCE!!", text: "Always wanted to see this! Chicago rules!!", mediaLink: 'https://wired.jp/wp-content/gallery/151228surgery/surgery03.jpg', categoryId: 1, userId: 6},
    {latitude: 41.905444, longitude: -87.626600, mediaType: "image", title: "Parks rule", text: "", mediaLink: 'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX10230668.jpg', categoryId: 1, userId: 6},
    {latitude: 41.905444, longitude: -87.626600, mediaType: "image", title: "Parks are ok", text: "Washington Square park! Chicago! Screw you New York!", mediaLink: 'http://2.bp.blogspot.com/-EqPmbtuIwz8/T-B0_pYYThI/AAAAAAAAuYE/IiwK3isQrvE/s1600/LI-archi-bug-001b.jpg', categoryId: 2, userId: 6},
    {latitude: 41.896734, longitude: -87.639368, mediaType: "image", title: "Parks RULE", text: "Park number 560, the 560th best park in Chicago", mediaLink: 'https://yakimaparks.com//assets/Gilbert-Open-Space_2.jpg', categoryId: 2, userId: 7},
    {latitude: 41.890290, longitude: -87.623640, mediaType: "image", title: "Wrigley Building", text: "One time when I was a little boy/girl I went to the zoo!", mediaLink: 'http://photos.wikimapia.org/p/00/02/25/17/30_big.jpg', categoryId: 2, userId: 7},
    {latitude: 41.887550, longitude: -87.628747, mediaType: "image", title: "YEEE HAW", text: "Yo check out this river", mediaLink: 'http://s3.amazonaws.com/architecture-org/files/pages/tour-riverwalk-west-03-3.jpg', categoryId: 1, userId: 7},
    {latitude: 41.893312, longitude: -87.631118, mediaType: "image", title: "Portillos", text: "Hot Dogs - how do they work?", mediaLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDExn02jnuKdktOjo9Jc0sbSDfIxFIxcDiztQPRFBoC1Ju7bcq0w', categoryId: 1, userId: 7},
    {latitude: 41.893695, longitude: -87.631043, mediaType: "image", title: "At Walgreens with the bros", text: "Did you ever stop and think about transit?", mediaLink: 'https://s3-media3.fl.yelpcdn.com/bphoto/DCFvRa5HBov3GEL_QGoEVQ/ls.jpg', categoryId: 1, userId: 8},
    {latitude: 41.896993, longitude: -87.633253, mediaType: "image", title: "Moody", text: "God is a moody god", mediaLink: 'https://www-images.christianitytoday.com/images/80517.jpg?w=700', categoryId: 2, userId: 8},
    {latitude: 41.827246, longitude: -87.652631, mediaType: "image", title: "Come to Nate's studio we're making stuff", text: "Zach's Angry", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36644181_100617604194807_4044659178969497600_n.jpg?_nc_cat=0&oh=f14dc04d302ba99f3d86cad40b962a79&oe=5BDAD9E7', categoryId: 1, userId: 4},
    {latitude: 41.827203, longitude: -87.652791, mediaType: "image", title: "Seriously come", text: "Look, Perry's in a box with a melodica", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36649164_100617474194820_1752073793200717824_n.jpg?_nc_cat=0&oh=b4c64a47e80851d5d147df87c68c9a41&oe=5BE56868', categoryId: 1, userId: 4},
    {latitude: 41.885142, longitude: -87.629799, mediaType: "image", title: "Goodman Theatre", text: "Lights", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36730172_100617417528159_7087022606238351360_n.jpg?_nc_cat=0&oh=0a823345c7178eada932a0d84bb1b909&oe=5BDEE214', categoryId: 1, userId: 4},
    {latitude: 41.897377, longitude: -87.692196, mediaType: "image", title: "Band photo", text: "An attempt", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36706329_100617490861485_4760107628477022208_n.jpg?_nc_cat=0&oh=f0339b18f6d8e2839e4c2ac20b173b7e&oe=5BA4554C', categoryId: 1, userId: 4},
    {latitude: 41.912774, longitude: -87.719892, mediaType: "image", title: "Bonfire at Maureen & Colin's right now", text: "Chop that wood", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36694060_100617177528183_6687815128471044096_n.jpg?_nc_cat=0&oh=370501c2f34a5e5d5b100f19481ae8f9&oe=5BD5BAAD', categoryId: 1, userId: 4},
    {latitude: 41.912209, longitude: -87.690468, mediaType: "image", title: "Charmaine's Names from LA", text: "Mojo Cave", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36641630_100617174194850_820875882146037760_n.jpg?_nc_cat=0&oh=088b3423bfddce50eaa03a139efbb5b6&oe=5BA2FCE0', categoryId: 1, userId: 4},
    {latitude: 41.888768, longitude: -87.630480, mediaType: "image", title: "Eating outside", text: "by the river", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36656365_100617697528131_8409689207022288896_n.jpg?_nc_cat=0&oh=c9475e90d93497e6ea8275957f4a99d3&oe=5BA4CB8E', categoryId: 1, userId: 2},
    {latitude: 41.831129, longitude: -87.634526, mediaType: "image", title: "Sox Astros", text: "", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36660491_100617294194838_5278389909135032320_n.jpg?_nc_cat=0&oh=3e6dcc1888dbecf1027a848e53129543&oe=5BDA984D', categoryId: 1, userId: 2},
    {latitude: 41.830594, longitude: -87.633362, mediaType: "image", title: "Sox Astros", text: "Baseball is geometry", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36644784_100617660861468_3247840456620376064_n.jpg?_nc_cat=0&oh=6790e96ebb532de18826fe16fc7b8e9c&oe=5BD7B63B', categoryId: 1, userId: 2},
    {latitude: 41.912240, longitude: -87.690466, mediaType: "image", title: "Cooking out", text: "Come by", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36694054_100617157528185_1237110942441930752_n.jpg?_nc_cat=0&oh=737cff44265dde5ef1a28ab6bbc4c4a1&oe=5BE9A2BD', categoryId: 1, userId: 3},
    {latitude: 41.939511, longitude: -87.719167, mediaType: "image", title: "New recording studio coming", text: "in YOUR neighborhood. Meet Blake the engineer", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36659444_100617770861457_5049311265692844032_n.jpg?_nc_cat=0&oh=f5b37c2dffa29591d067e14dbdf6cb7f&oe=5BD6CA81', categoryId: 1, userId: 4},
    {latitude: 41.890349, longitude: -87.646194, mediaType: "image", title: "Blue line", text: "Is it? It it? It it? It it?", mediaLink: 'https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/36669884_100617570861477_311157972434681856_n.jpg?_nc_cat=0&oh=87aec882b4b320e92a4fc4893624aedf&oe=5BAAC86F', categoryId: 1, userId: 6},
    

]

const Categories = [
    {title: 'News'},
    {title: 'Commercial'},
    {title: 'Entertainment'},
]

const CommentsData = [
    {content: "This app is great!", userId: 1, postId: 1},
    {content: "Buckbunny is a transformational film!!", userId: 2, postId: 1},
    {content: "Best movie of the year!", userId: 3, postId: 1},
    {content: "A truly profound take on the bunny genre", userId: 4, postId: 1},
    {content: "This app is great!", userId: 1, postId: 1},
    {content: "Buckbunny is a transformational film!!", userId: 2, postId: 1},
    {content: "Best movie of the year!", userId: 3, postId: 1},
    {content: "A truly profound take on the bunny genre", userId: 4, postId: 1},
    {content: "This app is great!", userId: 1, postId: 1},
    {content: "Buckbunny is a transformational film!!", userId: 2, postId: 1},
    {content: "Best movie of the year!", userId: 3, postId: 1},
    {content: "A truly profound take on the bunny genre", userId: 4, postId: 1},
    {content: "This app is great!", userId: 1, postId: 1},
    {content: "Buckbunny is a transformational film!!", userId: 2, postId: 1},
    {content: "Best movie of the year!", userId: 3, postId: 1},
    {content: "A truly profound take on the bunny genre", userId: 4, postId: 1},
    {content: "This app is great!", userId: 1, postId: 1},
    {content: "Buckbunny is a transformational film!!", userId: 2, postId: 1},
    {content: "Best movie of the year!", userId: 3, postId: 1},
    {content: "A truly profound take on the bunny genre", userId: 4, postId: 1},
    {content: "The beer here is so good!", userId: 1, postId: 2},
    {content: "I can't wait to try the sauerkraut", userId: 2, postId: 2},
    {content: "Best party of the year!!", userId: 3, postId: 2},
    {content: "A truly profound take on beer", userId: 4, postId: 2},
    {content: "The beer here is so good!", userId: 1, postId: 2},
    {content: "I can't wait to try the sauerkraut", userId: 2, postId: 2},
    {content: "Best party of the year!!", userId: 3, postId: 2},
    {content: "A truly profound take on beer", userId: 4, postId: 2},
    {content: "The beer here is so good!", userId: 1, postId: 2},
    {content: "I can't wait to try the sauerkraut", userId: 2, postId: 2},
    {content: "Best party of the year!!", userId: 3, postId: 2},
    {content: "A truly profound take on beer", userId: 4, postId: 2},
    {content: "The beer here is so good!", userId: 1, postId: 2},
    {content: "I can't wait to try the sauerkraut", userId: 2, postId: 2},
    {content: "Best party of the year!!", userId: 3, postId: 2},
    {content: "A truly profound take on beer", userId: 4, postId: 2},
    {content: "The beer here is so good!", userId: 1, postId: 2},
    {content: "I can't wait to try the sauerkraut", userId: 2, postId: 2},
    {content: "Best party of the year!!", userId: 3, postId: 2},
    {content: "A truly profound take on beer", userId: 4, postId: 2},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 14},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 14},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 14},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 3},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 5, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 5, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 4},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 8},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 8},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 8},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 8},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 9},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 9},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 9},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 9},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 5},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 10},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 10},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 10},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 10},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 11},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 11},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 11},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 11},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 12},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 12},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 12},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 12},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 6},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 13},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 13},
    {content: "lorem ipsum dolor sit amet", userId: 1, postId: 13},
    {content: "lorem ipsum dolor sit amet", userId: 2, postId: 14},
    {content: "lorem ipsum dolor sit amet", userId: 3, postId: 14},
    {content: "lorem ipsum dolor sit amet", userId: 4, postId: 14},
]




module.exports = {Posts, Categories, CommentsData, Users}