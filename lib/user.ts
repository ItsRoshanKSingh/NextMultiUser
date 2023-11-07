const movie_db = [
    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/07/05/06/46/superman-8107578_1280.jpg",
        "name": "Superman",
        "overview": "Just before the destruction of the planet Krypton, scientist Jor-El (Marlon Brando) sends his infant son Kal-El on a spaceship to Earth. Raised by kindly farmers Jonathan (Glenn Ford) and Martha Kent (Phyllis Thaxter), young Clark (Christopher Reeve) discovers the source of his superhuman powers and moves to Metropolis to fight evil. As Superman, he battles the villainous Lex Luthor (Gene Hackman), while, as novice reporter Clark Kent, he attempts to woo co-worker Lois Lane (Margot Kidder)",
        "releaseDate": "2017",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/6a5c/3765/9672/4934-982e-0d8bcd4d76a6/77b57d1c-0e7f-40bd-ad30-fd1fde66ea2c_video_900_audio_aaclc_128.mp4"
    },

    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/06/04/09/32/ai-generated-8039227_1280.jpg",
        "name": "Spiderwomen",
        "overview": "Spider-Woman (Jessica Drew) is a fictional character appearing in American comic books published by Marvel Comics. Created by Archie Goodwin and Marie Severin, the character first appeared in Marvel Spotlight #32. 50 issues of an ongoing series titled Spider-Woman followed.",
        "releaseDate": "2017",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/6a5c/3765/9672/4934-982e-0d8bcd4d76a6/77b57d1c-0e7f-40bd-ad30-fd1fde66ea2c_video_900_audio_aaclc_128.mp4"
    },

    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/06/28/19/34/ai-generated-8095071_1280.png",
        "name": "Spider",
        "overview": "Spider-Woman (Jessica Drew) is a fictional character appearing in American comic books published by Marvel Comics. Created by Archie Goodwin and Marie Severin, the character first appeared in Marvel Spotlight #32. 50 issues of an ongoing series titled Spider-Woman followed.",
        "releaseDate": "2017",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/26d9/ad70/7185/4e55-aa4b-7f2475b3c941/773a371c-9993-4ca3-885e-fec3f7301e17_video_6000_audio_aaclc_128.mp4"
    },

    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/05/20/09/49/ai-generated-8006208_1280.jpg",
        "name": "Black Widow",
        "overview": "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
        "releaseDate": "2021",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-dub-2.cf.trailer.row.aiv-cdn.net/34eb/d62b/3a24/4909-bc72-f4ad85528cdc/479f0800-87fd-4e81-9ab2-e5bef6f943c2_video_6000_audio_aaclc_128.mp4"
    },

    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/06/29/08/22/ai-generated-8095915_1280.png",
        "name": "Captain America",
        "overview": "Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940 by Timely Comics, a corporate predecessor to Marvel.",
        "releaseDate": "2012",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/bbcf/3474/9b15/4906-b65c-d620757533a2/a4581fe1-0492-41af-925a-2d9ac709f3f5_video_6000_audio_aaclc_128.mp4"
    },
    {
        "genre": "Action",
        "imageUrl": "https://cdn.pixabay.com/photo/2023/07/05/06/46/ai-generated-8107577_1280.jpg",
        "name": "Super Girl",
        "overview": "SUPERGIRL is an action-adventure about Kara Zor-El, Superman’s cousin who, after 12 years of keeping her powers a secret on Earth, decides to finally embrace her superhuman abilities and become the hero she was always meant to be. Though Kara will need to find a way to manage her newfound powers with her very human relationships, her heart soars as she takes to the skies to fight crime.",
        "releaseDate": "2006",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-ww.cf.videorolls.row.aiv-cdn.net/3a54/5380/ee26/4224-b043-85451d081376/42a8d7d7-9066-48ac-97af-4cdfcc76266d_video_720p_6Mbps_audio_aaclc_128kbps.mp4"
    },
    {
        "genre": "Action,Drama",
        "imageUrl": "https://cdn.pixabay.com/photo/2022/10/26/08/56/bollywood-7547855_1280.png",
        "name": "Pathan",
        "overview": "Indian RAW agent “Pathaan” (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own. With the doomsday clock ticking away and an agent Rubai (Deepika Padukone) his only possible ally, Pathaan must fight countless betrayals and deal with destruction as he takes on Jim.",
        "releaseDate": "2023",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/4b95/6905/efe0/4442-a2a3-73dbe2124bf6/99573d52-1a1b-44d8-936a-45483ee474a7_video_6000_audio_aaclc_128.mp4"
    },

    {
        "genre": "Comedy",
        "imageUrl": "https://cdn.pixabay.com/photo/2021/12/10/16/58/fashion-6860967_1280.jpg",
        "name": "Mean Girl",
        "overview": "Cady thinks she understands “survival of the fittest.” However, the law of the wild takes a whole new meaning when the homeschooled 16-year-old enters public high school for the first time.",
        "releaseDate": "2024",
        "runtime": { "$numberLong": "2" },
        "trailerUrl": "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/0b4f/1150/7164/4eb3-9d44-3fa1b34fb61e/ae7491f4-abbe-483e-932e-22af0d97a6e9_video_6000_audio_aaclc_128.mp4"
    }
]