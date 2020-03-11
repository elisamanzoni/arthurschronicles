var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {}
function create() {}
function update() {}

var player;
var cursors;

var cuore;
var vite;
var invulnerabile;
var velocità;
var caio;

//Spada
var isAttacking = false;
var movimentoSpada;
var attaccoCarico;

//Sfondo
var posiziones2;
var posiziones3;
//Minimappa
var posizionecaiomappa;
var posizioneplayermappa;

var livello;
var possibilità;
var checkpointAttivo;
var checkpointTime;
var checkpointCaio;
var statoPonte;

var openImage;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////COVER/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var StartState = {
    preload: function() {
        game.load.crossOrigin = 'anonymous';
        game.load.image('open', 'assets/cover.png');
        game.load.image('sin', 'assets/sin.png');
        game.load.image('singrande', 'assets/singrande.png');
        game.load.image('dx', 'assets/dx.png');
        game.load.image('dxgrande', 'assets/dxgrande.png');
        game.load.image('play', 'assets/playpiccolo.png');
        game.load.image('playgrande', 'assets/play.png');
    },

    create: function() {
        image = game.add.sprite(0, 0, 'open');
        sin = game.add.sprite(25.71, 127.63, 'sin');
        dx = game.add.sprite(832.38, 127.63, 'dx');

        sin.inputEnabled = true;
        sin.events.onInputOver.add(this.sinOver, this);
        dx.inputEnabled = true;
        dx.events.onInputOver.add(this.dxOver, this);
        play = game.add.sprite(455.5, 315, 'play');
        play.inputEnabled = true;
        play.events.onInputOver.add(this.playOver, this);
    },

    sinOver: function(pointer) {
        singrande = game.add.sprite(5.92, 122.25, 'singrande');
        sin.kill();
        singrande.inputEnabled = true;
        singrande.events.onInputDown.add(this.singrandeClick, this);
        singrande.events.onInputOut.add(this.singrandeOut, this);
    },

    singrandeOut: function(pointer) {
        singrande.kill();
        sin = game.add.sprite(25.71, 127.63, 'sin');
        sin.inputEnabled = true;
        sin.events.onInputOver.add(this.sinOver, this);

    },

    dxOver: function(pointer) {
        dxgrande = game.add.sprite(811.44, 122.25, 'dxgrande');
        dx.kill();
        dxgrande.inputEnabled = true;
        dxgrande.events.onInputDown.add(this.dxgrandeClick, this);
        dxgrande.events.onInputOut.add(this.dxgrandeOut, this);
    },

    dxgrandeOut: function(pointer) {
        dxgrande.kill();
        dx = game.add.sprite(832.38, 127.63, 'dx');
        dx.inputEnabled = true;
        dx.events.onInputOver.add(this.dxOver, this);
    },

    playOver: function(pointer) {
        playgrande = game.add.sprite(447.65, 305.41, 'playgrande');
        playgrande.inputEnabled = true;
        playgrande.events.onInputDown.add(this.playgrandeClick, this);
        playgrande.events.onInputOut.add(this.playgrandeOut, this);
    },

    playgrandeOut: function(pointer) {
        playgrande.kill();
        },

    playgrandeClick: function(pointer) {
        this.game.state.start('Intro');
    },

    singrandeClick: function(pointer) {
        this.game.state.start('Credits');
    },

    dxgrandeClick: function(pointer) {
        this.game.state.start('Autori');
    },
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////CREDITS/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CreditsState = {
  preload: function() {
      game.load.crossOrigin = 'anonymous';
      game.load.image('open', 'assets/credits.png');
      game.load.image('sin', 'assets/sincre.png');
      game.load.image('singrande', 'assets/singrandecre.png');
      game.load.image('dx', 'assets/dxcre.png');
      game.load.image('dxgrande', 'assets/dxgrandecre.png');
  },

  create: function() {
      image = game.add.sprite(0, 0, 'open');
      sin = game.add.sprite(25.71, 127.63, 'sin');
      dx = game.add.sprite(832.38, 127.63, 'dx');

      sin.inputEnabled = true;
      sin.events.onInputOver.add(this.sinOver, this);
      dx.inputEnabled = true;
      dx.events.onInputOver.add(this.dxOver, this);
    },

  sinOver: function(pointer) {
      singrande = game.add.sprite(5.92, 122.25, 'singrande');
      sin.kill();
      singrande.inputEnabled = true;
      singrande.events.onInputDown.add(this.singrandeClick, this);
      singrande.events.onInputOut.add(this.singrandeOut, this);
  },

  singrandeOut: function(pointer) {
      singrande.kill();
      sin = game.add.sprite(25.71, 127.63, 'sin');
      sin.inputEnabled = true;
      sin.events.onInputOver.add(this.sinOver, this);
  },

  dxOver: function(pointer) {
      dxgrande = game.add.sprite(811.44, 122.25, 'dxgrande');
      dx.kill();
      dxgrande.inputEnabled = true;
      dxgrande.events.onInputDown.add(this.dxgrandeClick, this);
      dxgrande.events.onInputOut.add(this.dxgrandeOut, this);
  },

  dxgrandeOut: function(pointer) {
      dxgrande.kill();
      dx = game.add.sprite(832.38, 127.63, 'dx');
      dx.inputEnabled = true;
      dx.events.onInputOver.add(this.dxOver, this);
  },

  singrandeClick: function(pointer) {
      this.game.state.start('Autori');
  },

  dxgrandeClick: function(pointer) {
      this.game.state.start('Start');
  },
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////AUTORI/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var AutoriState = {
  preload: function() {
      game.load.crossOrigin = 'anonymous';
      game.load.image('open', 'assets/autori.png');
      game.load.image('sin', 'assets/sinautori.png');
      game.load.image('singrande', 'assets/singrandeautori.png');
      game.load.image('dx', 'assets/dxautori.png');
      game.load.image('dxgrande', 'assets/dxgrandeautori.png');

  },

  create: function() {
      image = game.add.sprite(0, 0, 'open');
      sin = game.add.sprite(25.71, 127.63, 'sin');
      dx = game.add.sprite(832.38, 127.63, 'dx');

      sin.inputEnabled = true;
      sin.events.onInputOver.add(this.sinOver, this);
      dx.inputEnabled = true;
      dx.events.onInputOver.add(this.dxOver, this);
    },

  sinOver: function(pointer) {
      singrande = game.add.sprite(5.92, 122.25, 'singrande');
      sin.kill();
      singrande.inputEnabled = true;
      singrande.events.onInputDown.add(this.singrandeClick, this);
      singrande.events.onInputOut.add(this.singrandeOut, this);
  },

  singrandeOut: function(pointer) {
      singrande.kill();
      sin = game.add.sprite(25.71, 127.63, 'sin');
      sin.inputEnabled = true;
      sin.events.onInputOver.add(this.sinOver, this);
  },

  dxOver: function(pointer) {
      dxgrande = game.add.sprite(811.44, 122.25, 'dxgrande');
      dx.kill();
      dxgrande.inputEnabled = true;
      dxgrande.events.onInputDown.add(this.dxgrandeClick, this);
      dxgrande.events.onInputOut.add(this.dxgrandeOut, this);
  },

  dxgrandeOut: function(pointer) {
      dxgrande.kill();
      dx = game.add.sprite(832.38, 127.63, 'dx');
      dx.inputEnabled = true;
      dx.events.onInputOver.add(this.dxOver, this);
  },

  singrandeClick: function(pointer) {
      this.game.state.start('Start');
  },

  dxgrandeClick: function(pointer) {
      this.game.state.start('Credits');
  },
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////INTRO/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var IntroState = {
    preload: function() {
        game.load.image('render1', 'assets/render/start image_definitivo.png');
        game.load.image('testo1', 'assets/render/1-1.png');
        game.load.image('testo2', 'assets/render/1-2.png');
        game.load.image('testo3', 'assets/render/1-3.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');
    },

    create: function() {
        //render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    testo3 = game.add.sprite(205, 590, 'testo3');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        testo3.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        testo3.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 5;
    },


    update: function() {
    if (statoFlashback == 0) {
        statoFlashback = 1;
    }

    if(statoFlashback == 1) {
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
        testo3.kill();
    }
    if(statoFlashback == 4) {
        testo2.kill();
        testo3.reset(205, 590);
    }
    if (statoFlashback == 5){
        game.state.start('Comandi')
    }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO2INIZIO////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Livello2InizioState = {
    preload: function() {
        game.load.image('render1', 'assets/render/Flashback_4_def.png');
        game.load.image('testo1', 'assets/render/4-1.png');
        game.load.image('testo2', 'assets/render/4-2.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');
    },

    create: function() {
        //render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 4;
    },


    update: function() {
    if (statoFlashback == 0) {
        statoFlashback = 1;
    }

    if(statoFlashback == 1) {
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
    }
    if (statoFlashback == 4){
        game.state.start('Comandi2')
    }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO2FINE////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Livello2FineState = {
    preload: function() {
        game.load.image('render0', 'assets/render/Win-level2_1.png');
        game.load.image('render1', 'assets/render/Win-level2_2.png');
        game.load.image('testo1', 'assets/render/6-1.png');
        game.load.image('testo2', 'assets/render/6-2.png');
        game.load.image('testo3', 'assets/render/6-3.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');
    },

    create: function() {
    //render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    testo3 = game.add.sprite(205, 590, 'testo3');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        testo3.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        testo3.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();

        render0 = game.add.sprite(0, 0, 'render0');
        render0.fixedToCamera = true;
        game.time.events.add(Phaser.Timer.SECOND*2, function() {
            statoFlashback = 1;
        })


    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 5;
    },




    update: function() {
console.log(statoFlashback);
    if(statoFlashback == 1) {
        render0.kill();
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
        testo3.kill();
    }
    if(statoFlashback == 4) {
        testo2.kill();
        testo3.reset(205, 590);
    }
    if (statoFlashback == 5){
        game.state.start('Start')
    }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////GAMEOVER 1////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Gameover1State = {
    preload: function() {
        game.load.image('render1', 'assets/render/gameover1.png');
    },

    create: function() {
    //render

    render1 = game.add.sprite(0, 0, 'render1');
    render1.inputEnabled = true;
    render1.events.onInputDown.add(this.loadState, this);
    },

    loadState: function(pointer) {
        game.state.start('Livello1');
    },

    update: function() {
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////GAMEOVER 2////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Gameover2State = {
    preload: function() {
        game.load.image('render1', 'assets/render/gameover2.png');
    },

    create: function() {
    //render

    render1 = game.add.sprite(0, 0, 'render1');
    render1.inputEnabled = true;
    render1.events.onInputDown.add(this.loadState, this);
    },

    loadState: function(pointer) {
        game.state.start('Livello2');
    },

    update: function() {
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////YOUWIN 1////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Youwin1State = {
    preload: function() {
        game.load.image('render1', 'assets/render/youwin1.png');
    },

    create: function() {
    //render

    render1 = game.add.sprite(0, 0, 'render1');
    render1.inputEnabled = true;
    render1.events.onInputDown.add(this.loadState, this);
    },

    loadState: function(pointer) {
        game.state.start('Livello2Inizio');
    },

    update: function() {
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////COMANDI/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ComandiState = {
    preload: function() {
        game.load.image('render1', 'assets/render/comandi1.png');
        game.load.image('frecciadx', 'assets/render/play.png');
    },

    create: function() {
    //render

    render1 = game.add.sprite(0, 0, 'render1');

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.loadState, this);
    },

    loadState: function(pointer) {
        game.state.start('Livello1Intro');
    },

    update: function() {
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////COMANDI2/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Comandi2State = {
    preload: function() {
        game.load.image('render1', 'assets/render/comandi2.png');
        game.load.image('frecciadx', 'assets/render/play.png');
    },

    create: function() {
    //render

    render1 = game.add.sprite(0, 0, 'render1');

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.loadState, this);
    },

    loadState: function(pointer) {
        game.state.start('Livello2');
    },

    update: function() {
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO1///INTRO/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Livello1IntroState = {
    preload: function() {
        game.load.image('render1', 'assets/render/flashback1.png');
        game.load.image('testo1', 'assets/render/2-1.png');
        game.load.image('testo2', 'assets/render/2-2.png');
        game.load.image('testo3', 'assets/render/2-3.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');



        game.load.spritesheet('dude', 'assets/sprite-artu.png', 33, 52);
        game.load.tilemap('mappa', 'mappa1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'tiles_artu.png');

//Sfondo LIVELLO 1
        game.load.image('sfondo1', 'assets/sfondo1.png');
        game.load.image('sfondo2', 'assets/sfondo2.png');
        game.load.image('sfondo3', 'assets/sfondo3.png');
        game.load.image('sfondo4', 'assets/sfondo4.png');


//Oggetti
        game.load.spritesheet('bat', 'assets/bat.png', 73, 38);
        game.load.spritesheet('caio', 'assets/caio.png', 44, 52);
        game.load.image('cuore', 'assets/cuore.png');
        game.load.image('cactus', 'assets/rovi.png');
        game.load.spritesheet('potion', 'assets/sprite_pozione.png', 42, 62);
        game.load.image('mud', 'assets/mud.png');
        game.load.image('checkpoint', 'assets/checkpoint.png');
        game.load.spritesheet('lake', 'assets/sprite-lake.png', 42*32, 4*32);
        game.load.image('platformponte', 'assets/ponte.png');
        game.load.image('cordaponte', 'assets/cordaponte.png');

        game.load.spritesheet('mushroom', 'assets/sprite-mushroom.png', 128, 32);
        game.load.spritesheet('mushroom2', 'assets/sprite-mushroom2.png', 64, 32);


        game.load.image('ghiaccio2', 'assets/ghiaccio2.png');
        game.load.image('ghiaccio10', 'assets/ghiaccio10.png');

        game.load.image('tronco', 'assets/tronco.png');
        game.load.image('pietralago', 'assets/rock.png');
        game.load.image('cartellomorte', 'assets/cartellomorte.png');

        game.load.spritesheet('artucontroluce', 'assets/sprite-artu-controluce.png', 33, 52);




//Piattaforme
    game.load.image('mledge', 'assets/platform1.png');


//Mappa
    game.load.image('mappamia', 'assets/mappa.png');
    game.load.image('mappa-caio', 'assets/mappa-caio.png');
    game.load.image('mappa-player', 'assets/mappa-player.png');
    },

    create: function() {



        vite = 3;
        invulnerabile = false;
        velocità = 2;
        livello = 0;
        hitMud = false;
        possibilità = 1;
        checkpointAttivo = false;



        //Sfondo
        s1 = game.add.sprite(-500, 0, 'sfondo1');
        s2 = game.add.sprite(0, 0, 'sfondo2');
        s3 = game.add.sprite(0, -150, 'sfondo3');
        s4 = game.add.sprite(0, 0, 'sfondo4');


        luna = game.add.sprite(211*32, 6*32, 'vuoto');
        luna.width = 24*32;
        luna.height = 22*32;
        game.physics.arcade.enable(luna);
        luna.alpha=0;




        //Caio
        caio = game.add.sprite(0*32, 25*32-52, 'caio');
        game.physics.arcade.enable(caio);
        caio.body.collideWorldBounds = true;
        caio.body.gravity.y = 0;
        caio.body.immovable = true;
        caio.animations.add('caioright', [1, 2, 3, 4], 10, true);

        //Player
        createPlayer();
        //player.x=148*32;
        //player.x=209*32;


        //Tiles
        map = game.add.tilemap('mappa');
        map.addTilesetImage('terreno', 'tiles');
        layer = map.createLayer('livello1');
        map.setCollisionBetween(1, 100);

        //Vite
        vita1 = createVita(100*32, 15*32);
        vita2 = createVita(136*32, 22*32);
        vita3 = createVita(241*32, 98*32);

        //Piattaforme
        slipperyPlatform = game.add.physicsGroup();
        movingPlatformHorizontal = game.add.physicsGroup();

        tronchi = game.add.physicsGroup();

        Jplatform1 = createJumpingPlatform(25*32, 21*32, 4*32, 'mushroom');

        Splatform1 = createSlipperyPlatform(33*32, 21*32, 10*32, 'ghiaccio10');

        Jplatform2 = createJumpingPlatform(45*32, 17*32, 4*32, 'mushroom');

        MHplatform1 = createMovingPlatformHorizontal(82*32, 21*32, 5*32, 21, 80*32, 90*32, 'mledge', 100);

        Splatform2 = createSlipperyPlatform(110*32, 25*32, 2*32, 'ghiaccio2');
        Splatform3 = createSlipperyPlatform(114*32, 25*32, 2*32, 'ghiaccio2');
        Splatform4 = createSlipperyPlatform(118*32, 25*32, 2*32, 'ghiaccio2');


        Jplatform3 = createJumpingPlatform(151*32, 35*32, 2*32, 'mushroom2');

        tronco1 = createTronchi(168*32, 24.5*32, 5*32, 1*32, 'tronco');
        tronco2 = createTronchi(187*32, 24.5*32, 5*32, 1*32, 'tronco');


//Fango
        muds = game.add.physicsGroup();
        mud1 = createMud(78*32, 25*32, 12*32, 'mud');
        mud2 = createMud(139*32, 25*32, 8*32, 'mud');
//lago
        pietreLago = game.add.physicsGroup();
        createPietreLago(177*32);
        createPietreLago(182*32);
        createPietreLago(196*32);
        createPietreLago(200*32);

        game.add.sprite(162.5*32, 22.5*32, 'cartellomorte');
        lago = game.add.sprite(163*32, 25*32, 'lake');
        lago.height = 4*32;
        lago.width = 42*32;
        game.physics.arcade.enable(lago);
        lago.body.immovable = true;
        lago.animations.add('lagoAnimation', [0, 1, 2, 3, 4, 5,], 7, true);



//Pozioni
        potion1 = createPotion(67*32, 24*32);
        potion2 = createPotion(120*32, 34*32);
        potion3 = createPotion(245*32, 24*32);



//NEMICI
//Pipistrelli
        patrolEnemy1 = createPatrolEnemy(59*32, 10*32, 57*32, 66*32, 'bat');
        patrolEnemy2 = createPatrolEnemy(126*32, 23*32, 124*32, 134*32, 'bat');
        patrolEnemy3 = createPatrolEnemy(140*32, 19*32, 138*32, 146*32, 'bat');

        patrolEnemy4 = createPatrolEnemy(242*32, 23*32, 240*32, 250*32, 'bat');
        patrolEnemy5 = createPatrolEnemy(257*32, 23*32, 255*32, 265*32, 'bat');
        patrolEnemy6 = createPatrolEnemy(272*32, 23*32, 270*32, 280*32, 'bat');

//Piante spinose
        staticEnemy1 = createStaticEnemy(72*32, 24*32);
        staticEnemy2 = createStaticEnemy(100*32, 24*32);
        staticEnemy3 = createStaticEnemy(136*32, 24*32);

//Checkpoint
        checkpoint = createCheckpoint(156*32, 22*32+17);


        //ponte
        game.add.sprite(210*32, 23*32, 'cordaponte');


        platformPonte = game.add.physicsGroup();
        for (var i = 0; i < 24; i++) {
        var tilePlatformPonte = platformPonte.create(211*32+i*32, 25*32, 'platformponte');
        }
        platformPonte.setAll('body.immovable', true);



//variabili del livello
    cursors = game.input.keyboard.createCursorKeys();

    lunghezzamondo = 300*32;
    game.world.setBounds(0, 0, lunghezzamondo, 150*32);
    game.camera.follow(player);


    //render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    testo3 = game.add.sprite(205, 590, 'testo3');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        testo3.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        testo3.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 5;
    },




    update: function() {


        console.log(statoFlashback)
        if (caio.x >=1250 && caio.x <1255) {
            statoFlashback = 1;
        }

    if(statoFlashback == 1) {
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
        testo3.kill();
    }
    if(statoFlashback == 4) {
        testo2.kill();
        testo3.reset(205, 590);
    }
    if (statoFlashback == 5){
        game.state.start('Livello1')
    }

        animazionePlayer();

        invulnerablità();

        if(vite == 0) {
            respawn();
        }

        updateLuce(luna);

        lago.animations.play('lagoAnimation');
        game.physics.arcade.overlap(player, lago, function(){
            if(player.y > lago.y + 2*32){
               dannoPlayer();
                game.time.events.add(Phaser.Timer.SECOND*0.15, function() {
                    player.reset(160*32, 20*32);
                    tronco1.reset(168*32, 24.5*32);
                    tronco2.reset(187*32, 24.5*32);
                })
            }
        })

        hitPietreLago = game.physics.arcade.collide(player, pietreLago);

        tronco1.body.velocity.y = 0;
        hitTronco1 = game.physics.arcade.collide(player, tronco1, function(){
            tronco1.body.velocity.y = 400;
        })
        tronco2.body.velocity.y = 0;
        hitTronco2 = game.physics.arcade.collide(player, tronco2, function(){
            tronco2.body.velocity.y = 400;
        })


        //updateMud
        if (invulnerabile == false) {
            hitMud = game.physics.arcade.overlap(player, muds);
        }





        hitPlatformPonte = false;
        platformPonte.forEach( function(tilePlatformPonte) {
            if (tilePlatformPonte.body.immovable == true) {

            game.physics.arcade.collide(player, tilePlatformPonte, function(tilePlatformPonte){
                hitPlatformPonte = true;
                    platformPonte.forEach( function(tilePlatformPonte) {
                        if(player.x > tilePlatformPonte.x-28) {
                            tilePlatformPonte.body.gravity.y = 250;
                        }
                    })
                })
            }
        })

//updateCaio
        if (caio.position.x>6*32 && caio.position.x<100*32){
            caio.body.velocity.x = 600;
        }
        else {
            caio.body.velocity.x = 100;
        }


        if(caio.x > 7680) {
            caio.body.gravity.y = 400;
            game.physics.arcade.collide(caio, layer);
            if (caio.x >= patrolEnemy4.x-30 && caio.x < patrolEnemy4.x) {
                caio.body.velocity.y = -100;
            }
            if (caio.x >= patrolEnemy5.x-30 && caio.x < patrolEnemy5.x) {
                caio.body.velocity.y = -100;
            }
            if (caio.x >= patrolEnemy6.x-30 && caio.x < patrolEnemy6.x) {
                caio.body.velocity.y = -100;
            }
        }

        caio.animations.play('caioright');



//Vite
        updateVita(vita1);
        updateVita(vita2);
        updateVita(vita3);

//Pozioni
        updatePotionCollision(potion1);
        updatePotionCollision(potion2);
        updatePotionCollision(potion3);

//Pipistrelli
        updatePatrolEnemy(patrolEnemy1);
        updatePatrolEnemy(patrolEnemy2);
        updatePatrolEnemy(patrolEnemy3);

        updatePatrolEnemy(patrolEnemy4);
        updatePatrolEnemy(patrolEnemy5);
        updatePatrolEnemy(patrolEnemy6);



//Piante spinose
        updateStaticEnemyCollision(staticEnemy1);
        updateStaticEnemyCollision(staticEnemy2);
        updateStaticEnemyCollision(staticEnemy3);


        //Piattaforme
        var hitPlatform = game.physics.arcade.collide(player, layer);


        hitSplatform = game.physics.arcade.collide(player, slipperyPlatform, function(player, slipperyPlatform) {
            if (player.body.touching.down) {
                    player.body.velocity.x *=5;
            }
        })

        hitMplatform = game.physics.arcade.collide(player, movingPlatformHorizontal);


        updateJumpingPlatform(Jplatform1);
        updateJumpingPlatform(Jplatform2);
        updateJumpingPlatform(Jplatform3);


        updateMovingPlatformHorizontal(MHplatform1);


        updateCheckpoint(checkpoint);


        player.alpha=0;

    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO1/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


var Livello1State = {
    preload: function() {
        game.load.spritesheet('dude', 'assets/sprite-artu.png', 33, 52);
        game.load.tilemap('mappa', 'mappa1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'tiles_artu.png');

//Sfondo LIVELLO 1
        game.load.image('sfondo1', 'assets/sfondo1.png');
        game.load.image('sfondo2', 'assets/sfondo2.png');
        game.load.image('sfondo3', 'assets/sfondo3.png');
        game.load.image('sfondo4', 'assets/sfondo4.png');

        game.load.image('render1', 'assets/render/flashback2.png');
        game.load.image('testo1', 'assets/render/3-1.png');
        game.load.image('testo2', 'assets/render/3-2.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');


//Oggetti
        game.load.spritesheet('bat', 'assets/bat.png', 73, 38);
        game.load.spritesheet('caio', 'assets/caio.png', 44, 52);
        game.load.image('cuore', 'assets/cuore.png');
        game.load.image('cactus', 'assets/rovi.png');
        game.load.spritesheet('potion', 'assets/sprite_pozione.png', 42, 62);
        game.load.image('mud', 'assets/mud.png');
        game.load.image('checkpoint', 'assets/checkpoint.png');
        game.load.spritesheet('lake', 'assets/sprite-lake.png', 42*32, 4*32);
        game.load.image('platformponte', 'assets/ponte.png');
        game.load.image('cordaponte', 'assets/cordaponte.png');
        game.load.image('vuoto', 'assets/vuoto.png');


        game.load.spritesheet('mushroom', 'assets/sprite-mushroom.png', 128, 32);

        game.load.image('ghiaccio2', 'assets/ghiaccio2.png');
        game.load.image('ghiaccio10', 'assets/ghiaccio10.png');

        game.load.image('tronco', 'assets/tronco.png');
        game.load.image('pietralago', 'assets/rock.png');
        game.load.image('cartellomorte', 'assets/cartellomorte.png');

        game.load.spritesheet('artucontroluce', 'assets/sprite-artu-controluce.png', 33, 52);
        game.load.image('castellodavanti', 'assets/castello-davanti.png');
        game.load.image('castellodietro', 'assets/castello-dietro.png');




//Piattaforme
    game.load.image('mledge', 'assets/platform1.png');

//Mappa
    game.load.image('mappamia', 'assets/mappa.png');
    game.load.image('mappa-caio', 'assets/mappa-caio.png');
    game.load.image('mappa-player', 'assets/mappa-player.png');
    },

    create: function() {
        vite = 3;
        invulnerabile = false;
        velocità = 2;
        livello = 1;
        hitMud = false;
        possibilità = 1;
        checkpointAttivo = false;



        //Sfondo
        s1 = game.add.sprite(-500, 0, 'sfondo1');
        s2 = game.add.sprite(0, 0, 'sfondo2');
        s3 = game.add.sprite(0, -150, 'sfondo3');
        s4 = game.add.sprite(0, 0, 'sfondo4');


        luna = game.add.sprite(211*32, 6*32, 'vuoto');
        luna.width = 24*32;
        luna.height = 22*32;
        game.physics.arcade.enable(luna);
        luna.alpha=0;


        castellodietro = game.add.sprite(300*32-258, 5*32, 'castellodietro');


        //Caio
        caio = game.add.sprite(1200
                               , 25*32-52, 'caio');
        game.physics.arcade.enable(caio);
        caio.body.collideWorldBounds = true;
        caio.body.gravity.y = 0;
        caio.body.immovable = true;
        caio.animations.add('caioright', [1, 2, 3, 4], 10, true);

        //Player
        createPlayer();

        //Tiles
        map = game.add.tilemap('mappa');
        map.addTilesetImage('terreno', 'tiles');
        layer = map.createLayer('livello1');
        map.setCollisionBetween(1, 100);

        //Vite
        vita1 = createVita(100*32, 15*32);
        vita2 = createVita(136*32, 22*32);
        vita3 = createVita(241*32, 98*32);

        //Piattaforme
        slipperyPlatform = game.add.physicsGroup();
        movingPlatformHorizontal = game.add.physicsGroup();

        tronchi = game.add.physicsGroup();

        Jplatform1 = createJumpingPlatform(25*32, 21*32, 4*32, 'mushroom');

        Splatform1 = createSlipperyPlatform(33*32, 21*32, 10*32, 'ghiaccio10');

        Jplatform2 = createJumpingPlatform(45*32, 17*32, 4*32, 'mushroom');

        MHplatform1 = createMovingPlatformHorizontal(82*32, 21*32, 5*32, 21, 80*32, 90*32, 'mledge', 100);

        Splatform2 = createSlipperyPlatform(110*32, 25*32, 2*32, 'ghiaccio2');
        Splatform3 = createSlipperyPlatform(114*32, 25*32, 2*32, 'ghiaccio2');
        Splatform4 = createSlipperyPlatform(118*32, 25*32, 2*32, 'ghiaccio2');


        Jplatform3 = createJumpingPlatform(151*32, 35*32, 2*32, 'mushroom');

        tronco1 = createTronchi(168*32, 24.5*32, 5*32, 1*32, 'tronco');
        tronco2 = createTronchi(187*32, 24.5*32, 5*32, 1*32, 'tronco');


//Fango
        muds = game.add.physicsGroup();
        mud1 = createMud(78*32, 25*32, 12*32, 'mud');
        mud2 = createMud(139*32, 25*32, 8*32, 'mud');
//lago
        pietreLago = game.add.physicsGroup();
        createPietreLago(177*32);
        createPietreLago(182*32);
        createPietreLago(196*32);
        createPietreLago(200*32);

        game.add.sprite(162.5*32, 22.5*32, 'cartellomorte');
        lago = game.add.sprite(163*32, 25*32, 'lake');
        lago.height = 4*32;
        lago.width = 42*32;
        game.physics.arcade.enable(lago);
        lago.body.immovable = true;
        lago.animations.add('lagoAnimation', [0, 1, 2, 3, 4, 5,], 7, true);



//Pozioni
        potion1 = createPotion(67*32, 24*32);
        potion2 = createPotion(120*32, 34*32);
        potion3 = createPotion(245*32, 24*32);



//NEMICI
//Pipistrelli
        patrolEnemy1 = createPatrolEnemy(59*32, 10*32, 57*32, 66*32, 'bat');
        patrolEnemy2 = createPatrolEnemy(126*32, 23*32, 124*32, 134*32, 'bat');
        patrolEnemy3 = createPatrolEnemy(140*32, 19*32, 138*32, 146*32, 'bat');

        patrolEnemy4 = createPatrolEnemy(242*32, 23*32, 240*32, 250*32, 'bat');
        patrolEnemy5 = createPatrolEnemy(257*32, 23*32, 255*32, 265*32, 'bat');
        patrolEnemy6 = createPatrolEnemy(272*32, 23*32, 270*32, 280*32, 'bat');

//Piante spinose
        staticEnemy1 = createStaticEnemy(72*32, 24*32);
        staticEnemy2 = createStaticEnemy(100*32, 24*32);
        staticEnemy3 = createStaticEnemy(136*32, 24*32);

//Checkpoint
        checkpoint = createCheckpoint(156*32, 22*32+17);


        //ponte
        game.add.sprite(210*32, 23*32, 'cordaponte');


        platformPonte = game.add.physicsGroup();
        for (var i = 0; i < 24; i++) {
        var tilePlatformPonte = platformPonte.create(211*32+i*32, 25*32, 'platformponte');
        }
        platformPonte.setAll('body.immovable', true);
        statoPonte=1;

        castellodavanti = game.add.sprite(300*32-258, 5*32, 'castellodavanti');



//INFOGRAFICA
        createMinimappa();

// Cuori infografica
        segnavita = createSegnavita(50, 30);
        segnavita2 = createSegnavita(80, 30);
        segnavita3 = createSegnavita(110, 30);
        segnavita4 = createSegnavita(140, 30);
        segnavita5 = createSegnavita(170, 30);

//variabili del livello
    cursors = game.input.keyboard.createCursorKeys();

    lunghezzamondo = 300*32;
    game.world.setBounds(0, 0, lunghezzamondo, 150*32);
    game.camera.follow(player);

//render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();

        playerAttivaCheckpoint = 0;
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 4;
    },


    update: function() {
    //render
    if (player.x >=6585 && playerAttivaCheckpoint == 0) {
        playerAttivaCheckpoint++;
        statoFlashback = 1;
        caio.body.velocity.x = 0;
        player.body.velocity.x = 0;
    }

    if(statoFlashback == 1) {
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
    }
    if (statoFlashback == 4){
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
        render1.kill();
        //caio.body.velocity.x = 200;
    }

    if (statoFlashback == 0 || statoFlashback == 4) {
        movimentoPlayer();
    }
        animazionePlayer();
        updateInfograficaVite();
        updateMinimappa();
        invulnerablità();

        if(vite == 0) {
            respawn();
        }

        updateLuce(luna);

        lago.animations.play('lagoAnimation');
        game.physics.arcade.overlap(player, lago, function(){
            if(player.y > lago.y + 2*32){
               dannoPlayer();
                game.time.events.add(Phaser.Timer.SECOND*0.15, function() {
                    player.reset(160*32, 20*32);
                    tronco1.reset(168*32, 24.5*32);
                    tronco2.reset(187*32, 24.5*32);
                })
            }
        })

        hitPietreLago = game.physics.arcade.collide(player, pietreLago);

        tronco1.body.velocity.y = 0;
        hitTronco1 = game.physics.arcade.collide(player, tronco1, function(){
            tronco1.body.velocity.y = 400;
        })
        tronco2.body.velocity.y = 0;
        hitTronco2 = game.physics.arcade.collide(player, tronco2, function(){
            tronco2.body.velocity.y = 400;
        })


        //updateMud
        if (invulnerabile == false) {
            hitMud = game.physics.arcade.overlap(player, muds);
        }



        hitPlatformPonte = false;
        platformPonte.forEach( function(tilePlatformPonte) {
            if (tilePlatformPonte.body.immovable == true) {

            game.physics.arcade.collide(player, tilePlatformPonte, function(tilePlatformPonte){
                hitPlatformPonte = true;
                    platformPonte.forEach( function(tilePlatformPonte) {
                        if(player.x > tilePlatformPonte.x-28) {
                            tilePlatformPonte.body.gravity.y = 250;
                        }
                    })
                })
            }
        })

//updateCaio

        if (statoFlashback == 0 || statoFlashback == 4) {
        if (caio.position.x>6*32 && caio.position.x<100*32){
            caio.body.velocity.x = 600;
        }
        else if (posizionecaio/lunghezzamondo < 0.8 && posizionecaio-posizioneplayer<1200) {
            caio.body.velocity.x = 400;
        }
        else {
            caio.body.velocity.x = 100;
        }
        }

        if (caio.position.x> lunghezzamondo - 100) {
            morte();
        }
        if(caio.x > 7680) {
            caio.body.gravity.y = 400;
            game.physics.arcade.collide(caio, layer);
            if (caio.x >= patrolEnemy4.x-100 && caio.x < patrolEnemy4.x) {
                caio.body.velocity.y = -300;
            }
            if (caio.x >= patrolEnemy5.x-100 && caio.x < patrolEnemy5.x) {
                caio.body.velocity.y = -300;
            }
            if (caio.x >= patrolEnemy6.x-100 && caio.x < patrolEnemy6.x) {
                caio.body.velocity.y = -300;
            }
        }

        caio.animations.play('caioright');
        game.physics.arcade.overlap(player, caio, function(player, caio) {

            vittoria();
            caio.kill();
        })


//Sfondo
        posiziones2 = -200*(posizioneplayer/lunghezzamondo);
        posiziones3 = -400*(posizioneplayer/lunghezzamondo);
        posiziones4 = -600*(posizioneplayer/lunghezzamondo);

        s2.x = posiziones2;
        s3.x = posiziones3;
        s4.x = posiziones4;

//Vite
        updateVita(vita1);
        updateVita(vita2);
        updateVita(vita3);

//Pozioni
        updatePotionCollision(potion1);
        updatePotionCollision(potion2);
        updatePotionCollision(potion3);

//Pipistrelli
        updatePatrolEnemy(patrolEnemy1);
        updatePatrolEnemy(patrolEnemy2);
        updatePatrolEnemy(patrolEnemy3);

        updatePatrolEnemy(patrolEnemy4);
        updatePatrolEnemy(patrolEnemy5);
        updatePatrolEnemy(patrolEnemy6);



//Piante spinose
        updateStaticEnemyCollision(staticEnemy1);
        updateStaticEnemyCollision(staticEnemy2);
        updateStaticEnemyCollision(staticEnemy3);

//Buco
        if(player.y > 1200) {
            dannoPlayer();
            if (vite > 0) {
            //game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                player.reset(posizioneplayer - 200, 250);
            //})
            }
        }

        //Piattaforme
        var hitPlatform = game.physics.arcade.collide(player, layer);


        hitSplatform = game.physics.arcade.collide(player, slipperyPlatform, function(player, slipperyPlatform) {
            if (player.body.touching.down) {
                    player.body.velocity.x *=5;
            }
        })

        hitMplatform = game.physics.arcade.collide(player, movingPlatformHorizontal);


        updateJumpingPlatform(Jplatform1);
        updateJumpingPlatform(Jplatform2);
        updateJumpingPlatform(Jplatform3);


        updateMovingPlatformHorizontal(MHplatform1);


        updateCheckpoint(checkpoint);


        //Salto
        if (cursors.up.isDown && hitMud == false && (player.body.onFloor() || (player.body.touching.down && (hitTronco1 || hitTronco2 || hitPietreLago || hitSplatform || hitMplatform||hitPlatformPonte)))) {

            player.body.velocity.y = -450;
        }
        else if (cursors.up.isDown && hitMud) {
            player.body.velocity.y = -40;
        }

    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO 2/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Livello2State = {

preload: function() {
    game.load.image('dude', 'assets/vuoto.png');
    game.load.spritesheet('artuspada', 'assets/artuspada.png', 67, 52);

    game.load.tilemap('mappa', 'mappa2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'tiles_artu.png');

//Sfondo
    game.load.image('sfondo5', 'assets/sfondo5.png');
    game.load.image('sfondo6', 'assets/sfondo6.png');


        game.load.image('render1', 'assets/render/flashback5.png');
        game.load.image('testo1', 'assets/render/5-1.png');
        game.load.image('testo2', 'assets/render/5-2.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');


//Oggetti
    game.load.spritesheet('ghost', 'assets/ghost.png', 38, 57);
    game.load.image('cuore', 'assets/cuore.png');
    game.load.image('tenagliaup', 'assets/tenaglia_up.png');
    game.load.image('tenagliadown', 'assets/tenaglia_down.png');
    game.load.spritesheet('potion', 'assets/potion.png', 42, 62);
    game.load.image('potion2', 'assets/potion2.png');
    game.load.spritesheet('sprite-rocce', 'assets/sprite-rocce.png', 64, 64);
    game.load.spritesheet('sprite-lava', 'assets/sprite-lava.png', 81*32, 320);

//Piattaforme
    game.load.image('blocco', 'assets/blocco.png');

    game.load.image('platform8', 'assets/platform8.png');
    game.load.image('platform6', 'assets/platform6.png');
    game.load.image('platform4', 'assets/platform4.png');
    game.load.image('platform2', 'assets/platform2.png');

    game.load.image('pa2', 'assets/platform-appuntita-02.png');
    game.load.image('pa4', 'assets/platform-appuntita-04.png');
    game.load.image('pa10', 'assets/platform-appuntita-10.png');

    game.load.image('ps15', 'assets/ps15.png');
    game.load.image('ps3', 'assets/ps3.png');
    game.load.image('ps4', 'assets/ps4.png');
    game.load.image('ps5', 'assets/ps5.png');
    game.load.image('ps6', 'assets/ps6.png');

    game.load.image('po7', 'assets/po7.png');
    game.load.image('po8', 'assets/po8.png');

    game.load.image('tenagliasx', 'assets/tenagliasx.png');
    game.load.image('tenagliadx', 'assets/tenagliadx.png');

    game.load.image('checkpoint', 'assets/porta.png');
    game.load.image('porta', 'assets/porta.png');

    game.load.image('cartello-giu', 'assets/cartello-giu.png');

//Mappa
    game.load.image('mappamia', 'assets/minimappa2.png');
    game.load.image('mappa-caio', 'assets/mappa-caio.png');
    game.load.image('mappa-player', 'assets/mappa-player.png');

    game.load.image('timer', 'assets/timer.png');

    game.load.image('fireball', 'assets/fireball.png');
    game.load.spritesheet('dragon', 'assets/sprite-drago.png', 600, 347);

    game.load.image('fireballdrago', 'assets/fireballdrago.png');
    game.load.image('lampadario', 'assets/lampadario.png');
    game.load.image('dragobackground', 'assets/dragobackground.png');
    game.load.image('dragoforeground', 'assets/dragoforeground.png');
    game.load.image('merlino', 'assets/merlino.png');
},

create: function() {

    vite = 3;
    invulnerabile = false;
    velocità = 2;
    livello = 2;
    possibilità = 1;
    checkpointAttivo = false;

    game.add.sprite(270*32, 0*32, 'dragobackground');


//Sfondo
    s5 = game.add.sprite(0, 0, 'sfondo5');
    s6 = game.add.sprite(230*32, 0, 'sfondo6');


//Piattaforme

    movingPlatformHorizontal = game.add.physicsGroup();
    passaSottoPlatform = game.add.physicsGroup();
    hitPSPlatform = false;

    patrolEnemy5 = createPatrolEnemy(233*32, 117*32, 232*32, 235*32, 'ghost');

    bloccoTenagliaTorreSinistra = createBlocco(227*32+10, 116.5*32, 6*32, 14.5*32, 'tenagliasx');
    bloccoTenagliaTorreDestra = createBlocco(243*32-20, 116.5*32, 6*32, 14.5*32, 'tenagliadx');
    bloccoTenagliaTorreDestra.body.velocity.x = 32*6;
    bloccoTenagliaTorreSinistra.body.velocity.x = 32*6;

    game.add.sprite(194*32+15, 12*32, 'cartello-giu');

        lava2 = game.add.sprite(292*32, 16*32, 'sprite-lava');
      game.physics.arcade.enable(lava2);
      lava2.body.immovable = true;
      lava2.animations.add('animazioneLava', [0, 1, 2, 3, 4, 5], 8, true);

//Tiles
    map = game.add.tilemap('mappa');
    map.addTilesetImage('terreno', 'tiles')
    layer = map.createLayer('livello1');
    map.setCollisionBetween(1, 100);

//Player
    createPlayer();


//Spada
    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    isAttacking = false;
    movimentoSpada = false;
    attaccoCarico = true;

    nemicoTorre = createPatrolEnemy(232*32, 94*32, 231*32, 245*32, 'ghost');


//Vite
    vita1 = createVita(103*32, 9*32);
    vita2 = createVita(178*32, 9*32-10);
    vita3 = createVita(241*32, 98*32);
    vita4 = createVita(280*32, 13*32);


//Pozioni
    potion1 = createPotion(110*32, 13*32);
    //potion3 = createPotion(3372,770);


//NEMICI
//Pipistrelli
    patrolEnemy1 = createPatrolEnemy(60*32, 12*32, 58*32, 68*32, 'ghost');
    patrolEnemy2 = createPatrolEnemy(77*32, 15*32, 76*32, 80*32, 'ghost');
    patrolEnemy3 = createPatrolEnemy(95*32, 9*32, 90*32, 102*32, 'ghost');
    patrolEnemy4 = createPatrolEnemy(235*32, 131*32, 232*32, 243*32, 'ghost');

    patrolEnemy6 = createPatrolEnemy(235*32, 102*32, 232*32, 243*32, 'ghost');



//Piattaforme
//piattaforme mobili inizio torre
    MHplatform1 = createMovingPlatformHorizontal(244*32, 143*32, 8*32, 21, 238*32, 246*32, 'platform8', 100);
    MHplatform2 = createMovingPlatformHorizontal(229*32, 140*32, 8*32, 21, 223*32, 231*32, 'platform8', 100);
    MHplatform3 = createMovingPlatformHorizontal(244*32, 137*32, 8*32, 21, 238*32, 246*32, 'platform8', 100);
//piattaforme mobili prima del drago
    MHplatform4 = createMovingPlatformHorizontal(227*32, 104*32, 6*32, 21, 224*32, 246*32, 'platform6', 100);
    MHplatform5 = createMovingPlatformHorizontal(243*32, 100*32, 6*32, 21, 224*32, 246*32, 'platform6', 100);
//piataforme mobili dopo drago
    MHplatform6 = createMovingPlatformHorizontal(230*32, 75*32, 4*32, 21, 228*32, 231*32, 'platform4', 100);
    MHplatform7 = createMovingPlatformHorizontal(238*32, 75*32, 2*32, 21, 236*32, 239*32, 'platform2', 100);
    MHplatform8 = createMovingPlatformHorizontal(244*32, 75*32, 4*32, 21, 242*32, 245*32, 'platform4', 100);



    MHplatformKill1 = createMovingPlatformHorizontal(230*32, 67*32, 10*32, 1*32, 221*32, 231*32, 'pa10', 120);
    MHplatformKill2 = createMovingPlatformHorizontal(245*32, 62*32, 10*32, 1*32, 236*32, 246*32, 'pa10', 120);



    MHplatform9 = createMovingPlatformHorizontal(229*32, 55*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform10 = createMovingPlatformHorizontal(242*32, 55*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform11 = createMovingPlatformHorizontal(228*32, 53*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform12 = createMovingPlatformHorizontal(241*32, 53*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform13 = createMovingPlatformHorizontal(227*32, 51*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform14 = createMovingPlatformHorizontal(240*32, 51*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform15 = createMovingPlatformHorizontal(228*32, 49*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform16 = createMovingPlatformHorizontal(241*32, 49*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform17 = createMovingPlatformHorizontal(229*32, 47*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform18 = createMovingPlatformHorizontal(242*32, 47*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform19 = createMovingPlatformHorizontal(230*32, 45*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform20 = createMovingPlatformHorizontal(243*32, 45*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform21 = createMovingPlatformHorizontal(229*32, 43*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform22 = createMovingPlatformHorizontal(242*32, 43*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform23 = createMovingPlatformHorizontal(228*32, 41*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform24 = createMovingPlatformHorizontal(239*32, 41*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform25 = createMovingPlatformHorizontal(227*32, 39*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform26 = createMovingPlatformHorizontal(240*32, 39*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    //lasciare 14/15
    MHplatformKill3 = createMovingPlatformHorizontal(230*32, 25*32, 4*32, 32, 228*32, 231*32, 'pa4', 100);
    MHplatformKill4 = createMovingPlatformHorizontal(238*32, 25*32, 2*32, 32, 236*32, 239*32, 'pa2', 100);
    MHplatformKill5 = createMovingPlatformHorizontal(244*32, 25*32, 4*32, 32, 242*32, 245*32, 'pa4', 100);

    platformPassaSotto1 = createPlatformPassaSotto(231*32, 133*32, 15*32, 'ps15');
    platformPassaSotto2 = createPlatformPassaSotto(240*32, 130*32, 6*32, 'ps6');
    platformPassaSotto3 = createPlatformPassaSotto(243*32, 126*32, 3*32, 'ps3');
    platformPassaSotto4 = createPlatformPassaSotto(241*32, 122*32, 5*32, 'ps5');
    platformPassaSotto5 = createPlatformPassaSotto(231*32, 119*32, 5*32, 'ps5');
    platformPassaSotto6 = createPlatformPassaSotto(241*32, 116*32, 4*32, 'ps4');
    platformPassaSotto7 = createPlatformPassaSotto(243*32, 112*32, 3*32, 'ps3');
    platformPassaSotto8 = createPlatformPassaSotto(231*32, 108*32, 15*32, 'ps15');
    platformPassaSotto9 = createPlatformPassaSotto(231*32, 96*32, 15*32, 'ps15');
    platformPassaSotto10 = createPlatformPassaSotto(231*32, 16*32, 15*32, 'ps15');


    blocco1 = createBlocco(30*32, 7*32, 32*2, 32*2, 'blocco');
    blocco2 = createBlocco(34*32, 7*32, 32*2, 32*2, 'blocco');
    blocco3 = createBlocco(38*32, 7*32, 32*2, 32*2, 'blocco');
    blocco4 = createBlocco(42*32, 7*32, 32*2, 32*2, 'blocco');
    blocco5 = createBlocco(46*32, 7*32, 32*2, 32*2, 'blocco');
    blocco6 = createBlocco(50*32, 7*32, 32*2, 32*2, 'blocco');

    bloccoGrande1 = createBlocco(71*32, 6*32, 32*3, 32*3, 'blocco');
    bloccoGrande2 = createBlocco(82*32, 6*32, 32*3, 32*3, 'blocco');

    blocco1Random = game.rnd.integerInRange(1, 2);
    blocco2Random = game.rnd.integerInRange(1, 2);
    blocco3Random = game.rnd.integerInRange(1, 2);
    blocco4Random = game.rnd.integerInRange(1, 2);
    blocco5Random = game.rnd.integerInRange(1, 2);
    blocco6Random = game.rnd.integerInRange(1, 2);

    bloccoTenagliaSopra = createBlocco(16*32, 5*32, 3*32, 6*32, 'tenagliaup');
    bloccoTenagliaSotto = createBlocco(16*32, 11*32, 3*32, 3*32, 'tenagliadown');

    tweenTenagliaSopra = game.add.tween(bloccoTenagliaSopra).to( { y: 1*32 }, 480, "Linear", true, 2000, -1);
    tweenTenagliaSopra.yoyo(true, 900);
    tweenTenagliaSotto = game.add.tween(bloccoTenagliaSotto).to( { y: 13*32 }, 480, "Linear", true, 2000, -1);
    tweenTenagliaSotto.yoyo(true, 900);

    fireballs = game.add.physicsGroup();
    game.physics.arcade.enable(fireballs);
    fireballs.immovable = true;
    game.time.events.loop(Phaser.Timer.SECOND*3.5, createRocce, this);

    fireballs2 = game.add.physicsGroup();
    game.physics.arcade.enable(fireballs2);
    fireballs2.immovable = true;

    createFireballVerticale();
    //createLava
      lava = game.add.sprite(113*32, 19*32, 'sprite-lava');
      game.physics.arcade.enable(lava);
      lava.body.immovable = true;
      lava.animations.add('animazioneLava', [0, 1, 2, 3, 4, 5], 8, true);


    porta = game.add.sprite(214*32, 29*32+15, 'porta');
    porta.height = 81;
    porta.width = 47;
    game.physics.arcade.enable(porta);
    porta.immovable = true;

    porta2 = game.add.sprite(248*32, 13*32+15, 'porta');
    porta2.height = 81;
    porta2.width = 47;
    game.physics.arcade.enable(porta2);
    porta2.immovable = true;


    checkpoint = createCheckpoint(235*32, 143*32+15);

    pozioneVolo = game.add.sprite(236*32, 95*32-25, 'potion2');
    game.physics.arcade.enable(pozioneVolo);
    volo = false;



    drago = game.add.sprite(265*32-300, 6*32, 'dragon');
    game.physics.arcade.enable(drago);
    drago.body.immovable = true;
    drago.animations.add('animazioneDrago', [0, 1, 2, 3], 10, true);
    drago.alpha = 0;



    weapon = game.add.weapon(3, 'fireballdrago');
    weapon.bullets.setAll('body.immovable', true);
    weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    weapon.bulletKillDistance = 1000;
    weapon.fireAngle = 30;
    weapon.bulletAngleVariance = 35;
    weapon.bulletSpeed = 400;
    weapon.trackSprite(drago, 600, 225);
    weapon.fireRate = 30;

    lampadario = game.add.sprite(345*32, -1*32, 'lampadario');
    lampadario.width = 10*32;
    lampadario.height = 6*32;
    game.physics.arcade.enable(lampadario);
    lampadario.body.immovable = true;

    merlino = game.add.sprite(368*32, 10*32, 'merlino');
    game.physics.arcade.enable(merlino);
    merlino.body.immovable = true;

    game.add.sprite(270*32, 0*32, 'dragoforeground');

//variabili del livello
    cursors = game.input.keyboard.createCursorKeys();

    lunghezzamondo = 12000;
    game.world.setBounds(0, 0, lunghezzamondo, 150*32);
    game.camera.follow(player);

    createMinimappa();

    //Timer
    time = 150;
    timerimg = game.add.sprite(900, 25, 'timer');
    timerimg.fixedToCamera = true;
    textTimer = game.add.text(935, 30, " ", { font: "22px Arial", fill: "#000", align: "right" });
    textTimer.fixedToCamera = true;
    timer = game.time.events.loop(1000, timeCounter);

    // Cuori infografica
    segnavita = createSegnavita(50, 30);
    segnavita2 = createSegnavita(80, 30);
    segnavita3 = createSegnavita(110, 30);
    segnavita4 = createSegnavita(140, 30);
    segnavita5 = createSegnavita(170, 30);

//render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();

        playerAttivaCheckpoint = 0;
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 4;
    },




    update: function() {
    //render

    if(statoFlashback == 1) {
        timerimg.kill();
        textTimer.kill();
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
        player.body.velocity.x = 0;
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
        player.body.velocity.x = 0;

    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
        player.body.velocity.x = 0;

    }
    if (statoFlashback == 4){
        game.state.start('Livello2Drago');
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
        render1.kill();
    }

    if (statoFlashback == 0 || statoFlashback == 4) {
        movimentoPlayer();
    }

    animazionePlayer();
    updateInfograficaVite();
    updateTimer();

    if(vite == 0) {
        respawn();
    }

    updateMinimappa();

    game.physics.arcade.overlap(player, merlino, function(){
        vittoria();
    })

//Spada
    function attacco() {
        isAttacking = true;
        movimentoSpada = true;
        attaccoCarico = false;
    }


//Animazione attacco spada
    if (movimentoSpada == true && cursors.left.isDown == false) {
        artuspada.frame = 18;
    }
    else if (movimentoSpada == true && cursors.left.isDown) {
        artuspada.frame = 0;
    }
//Spada
    if (spacebar.isDown && attaccoCarico == true) {
        attacco();
        game.time.events.add(Phaser.Timer.SECOND*0.16, function() {isAttacking = false; movimentoSpada = false;})
        game.time.events.add(Phaser.Timer.SECOND*1, function() {attaccoCarico = true})
    }


    var hitPlatform = game.physics.arcade.collide(player, layer);
    invulnerablità();


//updateLava
lava.animations.play('animazioneLava');
  game.physics.arcade.collide(player, lava, function(){
    dannoPlayer();
    player.reset(posizioneplayer - 200, 250);
  })
lava2.animations.play('animazioneLava');
  game.physics.arcade.collide(player, lava2, function(){
    dannoPlayer();
    player.reset(posizioneplayer - 200, 250);
  })

    updateVita(vita1);
    updateVita(vita2);
    updateVita(vita3);
    updateVita(vita4);

//Pipistrelli
    updatePatrolEnemy(patrolEnemy1);
    updatePatrolEnemy(patrolEnemy2);
    updatePatrolEnemy(patrolEnemy3);
    updatePatrolEnemy(patrolEnemy4);
    updatePatrolEnemy(patrolEnemy5);
    updatePatrolEnemy(patrolEnemy6);


//pozioni
    updatePotionCollision(potion1);


//Piattaforme
    updateMovingPlatformHorizontal(MHplatform1);
    updateMovingPlatformHorizontal(MHplatform2);
    updateMovingPlatformHorizontal(MHplatform3);
    updateMovingPlatformHorizontal(MHplatform4);
    updateMovingPlatformHorizontal(MHplatform5);
    updateMovingPlatformHorizontal(MHplatform6);
    updateMovingPlatformHorizontal(MHplatform7);
    updateMovingPlatformHorizontal(MHplatform8);
    updateMovingPlatformHorizontal(MHplatform9);
    updateMovingPlatformHorizontal(MHplatform10);
    updateMovingPlatformHorizontal(MHplatform11);
    updateMovingPlatformHorizontal(MHplatform12);
    updateMovingPlatformHorizontal(MHplatform13);
    updateMovingPlatformHorizontal(MHplatform14);
    updateMovingPlatformHorizontal(MHplatform15);
    updateMovingPlatformHorizontal(MHplatform16);
    updateMovingPlatformHorizontal(MHplatform17);
    updateMovingPlatformHorizontal(MHplatform18);
    updateMovingPlatformHorizontal(MHplatform19);
    updateMovingPlatformHorizontal(MHplatform20);
    updateMovingPlatformHorizontal(MHplatform21);
    updateMovingPlatformHorizontal(MHplatform22);
    updateMovingPlatformHorizontal(MHplatform23);
    updateMovingPlatformHorizontal(MHplatform24);
    updateMovingPlatformHorizontal(MHplatform25);
    updateMovingPlatformHorizontal(MHplatform26);


    updateMovingPlatformHorizontal(MHplatformKill1);
    updateMovingPlatformHorizontal(MHplatformKill2);
    updateMovingPlatformHorizontal(MHplatformKill3);
    updateMovingPlatformHorizontal(MHplatformKill4);
    updateMovingPlatformHorizontal(MHplatformKill5);


    updateMHplatformKill(MHplatformKill1);
    updateMHplatformKill(MHplatformKill2);
    updateMHplatformKill(MHplatformKill3);
    updateMHplatformKill(MHplatformKill4);
    updateMHplatformKill(MHplatformKill5);


    hitMplatform = game.physics.arcade.collide(player, movingPlatformHorizontal);


    if (blocco1Random == 1) {updateBloccoCadeSotto(blocco1);}
    else { updateBloccoCadePrima(blocco1);}

    if (blocco2Random == 1) {updateBloccoCadeSotto(blocco2);}
    else { updateBloccoCadePrima(blocco2);}

    if (blocco3Random == 1) {updateBloccoCadeSotto(blocco3);}
    else { updateBloccoCadePrima(blocco3);}

    if (blocco4Random == 1) {updateBloccoCadeSotto(blocco4);}
    else { updateBloccoCadePrima(blocco4);}

    if (blocco5Random == 1) {updateBloccoCadeSotto(blocco5);}
    else { updateBloccoCadePrima(blocco5);}

    if (blocco6Random == 1) {updateBloccoCadeSotto(blocco6);}
    else { updateBloccoCadePrima(blocco6);}

    updatebloccoGrande(bloccoGrande1);
    updatebloccoGrande(bloccoGrande2);

    updateBloccoTenaglia(bloccoTenagliaSopra);
    updateBloccoTenaglia(bloccoTenagliaSotto);

    yTenagliaSotto = bloccoTenagliaSotto.y;
    yTenagliaSopra = bloccoTenagliaSopra.y + bloccoTenagliaSopra.height;
    distanzaTenaglie = yTenagliaSotto - yTenagliaSopra;
    xInizioTenaglie = bloccoTenagliaSopra.x;
    xFineTenaglie = xInizioTenaglie + bloccoTenagliaSopra.width;
    if (distanzaTenaglie < player.height && xInizioTenaglie < player.x && player.x < xFineTenaglie && invulnerabile == false) {
        dannoPlayer();
    }


    updatebloccoTenagliaTorre();


    updatePlatformPassaSotto(platformPassaSotto1);
    updatePlatformPassaSotto(platformPassaSotto2);
    updatePlatformPassaSotto(platformPassaSotto3);
    updatePlatformPassaSotto(platformPassaSotto4);
    updatePlatformPassaSotto(platformPassaSotto5);
    updatePlatformPassaSotto(platformPassaSotto6);
    updatePlatformPassaSotto(platformPassaSotto7);
    updatePlatformPassaSotto(platformPassaSotto8);
    updatePlatformPassaSotto(platformPassaSotto9);
    updatePlatformPassaSotto(platformPassaSotto10);


    passaSottoPlatform.forEach( function(platform) {
        if(player.y + player.height <= platform.y)
            hitPSPlatform = game.physics.arcade.collide(player, platform);
    })



    game.physics.arcade.overlap(player, pozioneVolo, function (){
        volo = true;
        pozioneVolo.kill();
    })
    if (volo == true) {
        player.body.velocity.y = -350;
    }
    if (player.y<5*32) {
        volo = false;
    }


//Buco
    if(player.y > 1200 && player.x<220*32) {
        vite = vite - 1;
        if (vite > 0) {
            //game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                player.reset(posizioneplayer - 200, 250);
            //})
        }
    }

//Salto
    if (cursors.up.isDown && (player.body.onFloor() || (player.body.touching.down && hitMplatform || hitPSPlatform))) {
        player.body.velocity.y = -450;
    }


//updateRocce

    game.physics.arcade.collide(fireballs, layer);
    //if (invulnerabile == false) {
        game.physics.arcade.overlap(fireballs, player, function() {
            dannoPlayer();
        })
    //}

    fireballs.forEach( function(fireball) {
        fireball.animations.play('animazioneRocce')
    })

// updateFireballVerticale
    //sistemare togliendo invulnerabile, dovrebbe bastare da dannoPlayer();
    game.physics.arcade.collide(fireballs2, layer);
    if (invulnerabile == false) {
        game.physics.arcade.overlap(fireballs2, player, function() {
            dannoPlayer();
        })
    }

// updatePorta
    game.physics.arcade.overlap(player, porta, function() {
        player.x = 235*32;
        player.y = 143*32;
    })
    game.physics.arcade.overlap(player, porta2, function() {
        player.x = 272*32;
        player.y = 13*32;
        statoFlashback = 1;
    })

    updateCheckpoint(checkpoint);

    if (volo == false) {updatePatrolEnemy(nemicoTorre)};
    updateNemicoTorre(nemicoTorre);

    if (hitMplatform && player.x<231*32) {
        player.x = 231*32
    }
    if (hitMplatform && player.x>246*32-player.width) {
        player.x = 246*32-player.width;
    }

    updateDrago(drago);
    updateLampadario(lampadario);
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LIVELLO 2 DRAGO//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Livello2DragoState = {

preload: function() {
    game.load.image('dude', 'assets/vuoto.png');
    game.load.spritesheet('artuspada', 'assets/artuspada.png', 67, 52);

    game.load.tilemap('mappa', 'mappa2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'tiles_artu.png');

//Sfondo
    game.load.image('sfondo5', 'assets/sfondo5.png');
    game.load.image('sfondo6', 'assets/sfondo6.png');


        game.load.image('render1', 'assets/render/flashback5.png');
        game.load.image('testo1', 'assets/render/5-1.png');
        game.load.image('testo2', 'assets/render/5-2.png');
        game.load.image('skip', 'assets/render/skip.png');
        game.load.image('frecciadx', 'assets/render/freccia-dx.png');
        game.load.image('frecciasx', 'assets/render/freccia-sx.png');


//Oggetti
    game.load.spritesheet('ghost', 'assets/ghost.png', 38, 57);
    game.load.image('cuore', 'assets/cuore.png');
    game.load.image('tenagliaup', 'assets/tenaglia_up.png');
    game.load.image('tenagliadown', 'assets/tenaglia_down.png');
    game.load.spritesheet('potion', 'assets/potion.png', 42, 62);
    game.load.image('potion2', 'assets/potion2.png');
    game.load.spritesheet('sprite-rocce', 'assets/sprite-rocce.png', 64, 64);
    game.load.spritesheet('sprite-lava', 'assets/sprite-lava.png', 81*32, 320);

//Piattaforme
    game.load.image('blocco', 'assets/blocco.png');

    game.load.image('platform8', 'assets/platform8.png');
    game.load.image('platform6', 'assets/platform6.png');
    game.load.image('platform4', 'assets/platform4.png');
    game.load.image('platform2', 'assets/platform2.png');

    game.load.image('pa2', 'assets/platform-appuntita-02.png');
    game.load.image('pa4', 'assets/platform-appuntita-04.png');
    game.load.image('pa10', 'assets/platform-appuntita-10.png');

    game.load.image('ps15', 'assets/ps15.png');
    game.load.image('ps3', 'assets/ps3.png');
    game.load.image('ps4', 'assets/ps4.png');
    game.load.image('ps5', 'assets/ps5.png');
    game.load.image('ps6', 'assets/ps6.png');

    game.load.image('po7', 'assets/po7.png');
    game.load.image('po8', 'assets/po8.png');

    game.load.image('tenagliasx', 'assets/tenagliasx.png');
    game.load.image('tenagliadx', 'assets/tenagliadx.png');

    game.load.image('checkpoint', 'assets/porta.png');
    game.load.image('porta', 'assets/porta.png');

    game.load.image('cartello-giu', 'assets/cartello-giu.png');

//Mappa
    game.load.image('mappamia', 'assets/minimappa2.png');
    game.load.image('mappa-caio', 'assets/mappa-caio.png');
    game.load.image('mappa-player', 'assets/mappa-player.png');

    game.load.image('timer', 'assets/timer.png');

    game.load.image('fireball', 'assets/fireball.png');
    game.load.spritesheet('dragon', 'assets/sprite-drago.png', 600, 347);

    game.load.image('fireballdrago', 'assets/fireballdrago.png');
    game.load.image('lampadario', 'assets/lampadario.png');
    game.load.image('dragobackground', 'assets/dragobackground.png');
    game.load.image('dragoforeground', 'assets/dragoforeground.png');
    game.load.image('merlino', 'assets/merlino.png');

},

create: function() {

    vite = 3;
    invulnerabile = false;
    velocità = 2;
    livello = 3;
    possibilità = 1;
    checkpointAttivo = false;

    game.add.sprite(270*32, 0*32, 'dragobackground');


//Sfondo
    s5 = game.add.sprite(0, 0, 'sfondo5');
    s6 = game.add.sprite(230*32, 0, 'sfondo6');


//Piattaforme

    movingPlatformHorizontal = game.add.physicsGroup();
    passaSottoPlatform = game.add.physicsGroup();
    hitPSPlatform = false;

    patrolEnemy5 = createPatrolEnemy(233*32, 117*32, 232*32, 235*32, 'ghost');

    bloccoTenagliaTorreSinistra = createBlocco(227*32+10, 116.5*32, 6*32, 14.5*32, 'tenagliasx');
    bloccoTenagliaTorreDestra = createBlocco(243*32-20, 116.5*32, 6*32, 14.5*32, 'tenagliadx');
    bloccoTenagliaTorreDestra.body.velocity.x = 32*6;
    bloccoTenagliaTorreSinistra.body.velocity.x = 32*6;

    game.add.sprite(194*32+15, 12*32, 'cartello-giu');

        lava2 = game.add.sprite(292*32, 17*32, 'sprite-lava');
      game.physics.arcade.enable(lava2);
      lava2.body.immovable = true;
      lava2.animations.add('animazioneLava', [0, 1, 2, 3, 4, 5], 8, true);

//Tiles
    map = game.add.tilemap('mappa');
    map.addTilesetImage('terreno', 'tiles')
    layer = map.createLayer('livello1');
    map.setCollisionBetween(1, 100);

//Player
    createPlayer();


//Spada
    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    isAttacking = false;
    movimentoSpada = false;
    attaccoCarico = true;

    nemicoTorre = createPatrolEnemy(232*32, 94*32, 231*32, 245*32, 'ghost');

//Vite
    vita1 = createVita(103*32, 9*32);
    vita2 = createVita(178*32, 9*32-10);
    vita3 = createVita(241*32, 98*32);
    vita4 = createVita(280*32, 13*32);


//Pozioni
    potion1 = createPotion(110*32, 13*32);
    //potion3 = createPotion(3372,770);


//NEMICI
//Pipistrelli
    patrolEnemy1 = createPatrolEnemy(60*32, 12*32, 58*32, 68*32, 'ghost');
    patrolEnemy2 = createPatrolEnemy(77*32, 15*32, 76*32, 80*32, 'ghost');
    patrolEnemy3 = createPatrolEnemy(95*32, 9*32, 90*32, 102*32, 'ghost');
    patrolEnemy4 = createPatrolEnemy(235*32, 131*32, 232*32, 243*32, 'ghost');

    patrolEnemy6 = createPatrolEnemy(235*32, 102*32, 232*32, 243*32, 'ghost');

//Piattaforme
//piattaforme mobili inizio torre
    MHplatform1 = createMovingPlatformHorizontal(244*32, 143*32, 8*32, 21, 238*32, 246*32, 'platform8', 100);
    MHplatform2 = createMovingPlatformHorizontal(229*32, 140*32, 8*32, 21, 223*32, 231*32, 'platform8', 100);
    MHplatform3 = createMovingPlatformHorizontal(244*32, 137*32, 8*32, 21, 238*32, 246*32, 'platform8', 100);
//piattaforme mobili prima del drago
    MHplatform4 = createMovingPlatformHorizontal(227*32, 104*32, 6*32, 21, 224*32, 246*32, 'platform6', 100);
    MHplatform5 = createMovingPlatformHorizontal(243*32, 100*32, 6*32, 21, 224*32, 246*32, 'platform6', 100);
//piataforme mobili dopo drago
    MHplatform6 = createMovingPlatformHorizontal(230*32, 75*32, 4*32, 21, 228*32, 231*32, 'platform4', 100);
    MHplatform7 = createMovingPlatformHorizontal(238*32, 75*32, 2*32, 21, 236*32, 239*32, 'platform2', 100);
    MHplatform8 = createMovingPlatformHorizontal(244*32, 75*32, 4*32, 21, 242*32, 245*32, 'platform4', 100);



    MHplatformKill1 = createMovingPlatformHorizontal(230*32, 67*32, 10*32, 1*32, 221*32, 231*32, 'pa10', 120);
    MHplatformKill2 = createMovingPlatformHorizontal(245*32, 62*32, 10*32, 1*32, 236*32, 246*32, 'pa10', 120);



    MHplatform9 = createMovingPlatformHorizontal(229*32, 55*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform10 = createMovingPlatformHorizontal(242*32, 55*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform11 = createMovingPlatformHorizontal(228*32, 53*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform12 = createMovingPlatformHorizontal(241*32, 53*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform13 = createMovingPlatformHorizontal(227*32, 51*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform14 = createMovingPlatformHorizontal(240*32, 51*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform15 = createMovingPlatformHorizontal(228*32, 49*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform16 = createMovingPlatformHorizontal(241*32, 49*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform17 = createMovingPlatformHorizontal(229*32, 47*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform18 = createMovingPlatformHorizontal(242*32, 47*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform19 = createMovingPlatformHorizontal(230*32, 45*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform20 = createMovingPlatformHorizontal(243*32, 45*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform21 = createMovingPlatformHorizontal(229*32, 43*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform22 = createMovingPlatformHorizontal(242*32, 43*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform23 = createMovingPlatformHorizontal(228*32, 41*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform24 = createMovingPlatformHorizontal(239*32, 41*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    MHplatform25 = createMovingPlatformHorizontal(227*32, 39*32, 8*32, 2*32, 225*32, 231*32, 'po8', 100);
    MHplatform26 = createMovingPlatformHorizontal(240*32, 39*32, 7*32, 2*32, 238*32, 244*32, 'po7', 100);

    //lasciare 14/15
    MHplatformKill3 = createMovingPlatformHorizontal(230*32, 25*32, 4*32, 32, 228*32, 231*32, 'pa4', 100);
    MHplatformKill4 = createMovingPlatformHorizontal(238*32, 25*32, 2*32, 32, 236*32, 239*32, 'pa2', 100);
    MHplatformKill5 = createMovingPlatformHorizontal(244*32, 25*32, 4*32, 32, 242*32, 245*32, 'pa4', 100);

    platformPassaSotto1 = createPlatformPassaSotto(231*32, 133*32, 15*32, 'ps15');
    platformPassaSotto2 = createPlatformPassaSotto(240*32, 130*32, 6*32, 'ps6');
    platformPassaSotto3 = createPlatformPassaSotto(243*32, 126*32, 3*32, 'ps3');
    platformPassaSotto4 = createPlatformPassaSotto(241*32, 122*32, 5*32, 'ps5');
    platformPassaSotto5 = createPlatformPassaSotto(231*32, 119*32, 5*32, 'ps5');
    platformPassaSotto6 = createPlatformPassaSotto(241*32, 116*32, 4*32, 'ps4');
    platformPassaSotto7 = createPlatformPassaSotto(243*32, 112*32, 3*32, 'ps3');
    platformPassaSotto8 = createPlatformPassaSotto(231*32, 108*32, 15*32, 'ps15');
    platformPassaSotto9 = createPlatformPassaSotto(231*32, 96*32, 15*32, 'ps15');
    platformPassaSotto10 = createPlatformPassaSotto(231*32, 16*32, 15*32, 'ps15');


    blocco1 = createBlocco(30*32, 7*32, 32*2, 32*2, 'blocco');
    blocco2 = createBlocco(34*32, 7*32, 32*2, 32*2, 'blocco');
    blocco3 = createBlocco(38*32, 7*32, 32*2, 32*2, 'blocco');
    blocco4 = createBlocco(42*32, 7*32, 32*2, 32*2, 'blocco');
    blocco5 = createBlocco(46*32, 7*32, 32*2, 32*2, 'blocco');
    blocco6 = createBlocco(50*32, 7*32, 32*2, 32*2, 'blocco');

    bloccoGrande1 = createBlocco(71*32, 6*32, 32*3, 32*3, 'blocco');
    bloccoGrande2 = createBlocco(82*32, 6*32, 32*3, 32*3, 'blocco');

    blocco1Random = game.rnd.integerInRange(1, 2);
    blocco2Random = game.rnd.integerInRange(1, 2);
    blocco3Random = game.rnd.integerInRange(1, 2);
    blocco4Random = game.rnd.integerInRange(1, 2);
    blocco5Random = game.rnd.integerInRange(1, 2);
    blocco6Random = game.rnd.integerInRange(1, 2);

    bloccoTenagliaSopra = createBlocco(16*32, 5*32, 3*32, 6*32, 'tenagliaup');
    bloccoTenagliaSotto = createBlocco(16*32, 11*32, 3*32, 3*32, 'tenagliadown');

    tweenTenagliaSopra = game.add.tween(bloccoTenagliaSopra).to( { y: 1*32 }, 480, "Linear", true, 2000, -1);
    tweenTenagliaSopra.yoyo(true, 900);
    tweenTenagliaSotto = game.add.tween(bloccoTenagliaSotto).to( { y: 13*32 }, 480, "Linear", true, 2000, -1);
    tweenTenagliaSotto.yoyo(true, 900);

    fireballs = game.add.physicsGroup();
    game.physics.arcade.enable(fireballs);
    fireballs.immovable = true;
    game.time.events.loop(Phaser.Timer.SECOND*3.5, createRocce, this);

    fireballs2 = game.add.physicsGroup();
    game.physics.arcade.enable(fireballs2);
    fireballs2.immovable = true;

    createFireballVerticale();
    //createLava
      lava = game.add.sprite(113*32, 19*32, 'sprite-lava');
      game.physics.arcade.enable(lava);
      lava.body.immovable = true;
      lava.animations.add('animazioneLava', [0, 1, 2, 3, 4, 5], 8, true);


    porta = game.add.sprite(214*32, 29*32+15, 'porta');
    porta.height = 81;
    porta.width = 47;
    game.physics.arcade.enable(porta);
    porta.immovable = true;

    porta2 = game.add.sprite(248*32, 13*32+15, 'porta');
    porta2.height = 81;
    porta2.width = 47;
    game.physics.arcade.enable(porta2);
    porta2.immovable = true;

    checkpoint = createCheckpoint(235*32, 143*32+15);

    pozioneVolo = game.add.sprite(236*32, 95*32-25, 'potion2');
    game.physics.arcade.enable(pozioneVolo);
    volo = false;

    drago = game.add.sprite(265*32-300, 6*32, 'dragon');
    game.physics.arcade.enable(drago);
    drago.body.immovable = true;
    drago.animations.add('animazioneDrago', [0, 1, 2, 3], 10, true);
    drago.alpha = 0;

    weapon = game.add.weapon(3, 'fireballdrago');
    weapon.bullets.setAll('body.immovable', true);
    weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    weapon.bulletKillDistance = 1000;
    weapon.fireAngle = 30;
    weapon.bulletAngleVariance = 35;
    weapon.bulletSpeed = 400;
    weapon.trackSprite(drago, 600, 225);
    weapon.fireRate = 30;

    lampadario = game.add.sprite(345*32, -1*32, 'lampadario');
    lampadario.width = 10*32;
    lampadario.height = 6*32;
    game.physics.arcade.enable(lampadario);
    lampadario.body.immovable = true;

    merlino = game.add.sprite(368*32, 10*32, 'merlino');
    game.physics.arcade.enable(merlino);
    merlino.body.immovable = true;

    game.add.sprite(270*32, 0*32, 'dragoforeground');

//variabili del livello
    cursors = game.input.keyboard.createCursorKeys();

    lunghezzamondo = 12000;
    game.world.setBounds(0, 0, lunghezzamondo, 150*32);
    game.camera.follow(player);

    createMinimappa();


    // Cuori infografica
    segnavita = createSegnavita(50, 30);
    segnavita2 = createSegnavita(80, 30);
    segnavita3 = createSegnavita(110, 30);
    segnavita4 = createSegnavita(140, 30);
    segnavita5 = createSegnavita(170, 30);

//render

    statoFlashback = 0;

    render1 = game.add.sprite(0, 0, 'render1');
    testo1 = game.add.sprite(205, 590, 'testo1');
    testo2 = game.add.sprite(205, 590, 'testo2');
    skip = game.add.sprite(850, 65, 'skip');
    skip.inputEnabled = true;
    skip.events.onInputDown.add(this.skip, this);


    frecciasx = game.add.sprite(25, 580, 'frecciasx');
    frecciasx.inputEnabled = true;
    frecciasx.events.onInputDown.add(this.diminuisciStatoFlashback, this);

    frecciadx = game.add.sprite(850, 580, 'frecciadx');
    frecciadx.inputEnabled = true;
    frecciadx.events.onInputDown.add(this.aumentaStatoFlashback, this);

        render1.fixedToCamera = true;
        testo1.fixedToCamera = true;
        testo2.fixedToCamera = true;
        frecciasx.fixedToCamera = true;
        frecciadx.fixedToCamera = true;
        skip.fixedToCamera = true;

        render1.kill();
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();

        playerAttivaCheckpoint = 0;
    },
    aumentaStatoFlashback: function(pointer) {
        statoFlashback++;
    },
    diminuisciStatoFlashback: function(pointer) {
        statoFlashback--;
    },
    skip: function(pointer) {
        statoFlashback = 4;
    },

    update: function() {
    //render

    if(statoFlashback == 1) {
        timerimg.kill();
        textTimer.kill();
        render1.reset(0, 0);
        frecciadx.reset(850, 580);
        skip.reset(850, 65);
        player.body.velocity.x = 0;
    }
    if(statoFlashback == 2) {
        testo1.reset(205, 590);
        frecciasx.kill();
        testo2.kill();
        player.body.velocity.x = 0;

    }
    if(statoFlashback == 3) {
        testo1.kill();
        testo2.reset(205, 590);
        frecciasx.reset(25, 580);
        player.body.velocity.x = 0;

    }
    if (statoFlashback == 4){
        testo1.kill();
        testo2.kill();
        skip.kill();
        frecciasx.kill();
        frecciadx.kill();
        render1.kill();
    }


    movimentoPlayer();


    animazionePlayer();
    updateInfograficaVite();

    if(vite == 0) {
        game.state.restart();
    }

    updateMinimappa();

    game.physics.arcade.overlap(player, merlino, function(){
        vittoria();
    })

//Spada
    function attacco() {
        isAttacking = true;
        movimentoSpada = true;
        attaccoCarico = false;
    }


//Animazione attacco spada
    if (movimentoSpada == true && cursors.left.isDown == false) {
        artuspada.frame = 18;
    }
    else if (movimentoSpada == true && cursors.left.isDown) {
        artuspada.frame = 0;
    }
//Spada
    if (spacebar.isDown && attaccoCarico == true) {
        attacco();
        game.time.events.add(Phaser.Timer.SECOND*0.16, function() {isAttacking = false; movimentoSpada = false;})
        game.time.events.add(Phaser.Timer.SECOND*1, function() {attaccoCarico = true})
    }


    var hitPlatform = game.physics.arcade.collide(player, layer);
    invulnerablità();


//updateLava
lava.animations.play('animazioneLava');
  game.physics.arcade.collide(player, lava, function(){
    dannoPlayer();
    player.reset(posizioneplayer - 200, 250);
  })
lava2.animations.play('animazioneLava');
  game.physics.arcade.collide(player, lava2, function(){
    dannoPlayer();
    player.reset(posizioneplayer - 200, 250);
  })

    updateVita(vita1);
    updateVita(vita2);
    updateVita(vita3);
    updateVita(vita4);

//Pipistrelli
    updatePatrolEnemy(patrolEnemy1);
    updatePatrolEnemy(patrolEnemy2);
    updatePatrolEnemy(patrolEnemy3);
    updatePatrolEnemy(patrolEnemy4);
    updatePatrolEnemy(patrolEnemy5);
    updatePatrolEnemy(patrolEnemy6);


//pozioni
    updatePotionCollision(potion1);
    //updatePotionCollision(potion3);


//Piattaforme
    updateMovingPlatformHorizontal(MHplatform1);
    updateMovingPlatformHorizontal(MHplatform2);
    updateMovingPlatformHorizontal(MHplatform3);
    updateMovingPlatformHorizontal(MHplatform4);
    updateMovingPlatformHorizontal(MHplatform5);
    updateMovingPlatformHorizontal(MHplatform6);
    updateMovingPlatformHorizontal(MHplatform7);
    updateMovingPlatformHorizontal(MHplatform8);
    updateMovingPlatformHorizontal(MHplatform9);
    updateMovingPlatformHorizontal(MHplatform10);
    updateMovingPlatformHorizontal(MHplatform11);
    updateMovingPlatformHorizontal(MHplatform12);
    updateMovingPlatformHorizontal(MHplatform13);
    updateMovingPlatformHorizontal(MHplatform14);
    updateMovingPlatformHorizontal(MHplatform15);
    updateMovingPlatformHorizontal(MHplatform16);
    updateMovingPlatformHorizontal(MHplatform17);
    updateMovingPlatformHorizontal(MHplatform18);
    updateMovingPlatformHorizontal(MHplatform19);
    updateMovingPlatformHorizontal(MHplatform20);
    updateMovingPlatformHorizontal(MHplatform21);
    updateMovingPlatformHorizontal(MHplatform22);
    updateMovingPlatformHorizontal(MHplatform23);
    updateMovingPlatformHorizontal(MHplatform24);
    updateMovingPlatformHorizontal(MHplatform25);
    updateMovingPlatformHorizontal(MHplatform26);


    updateMovingPlatformHorizontal(MHplatformKill1);
    updateMovingPlatformHorizontal(MHplatformKill2);
    updateMovingPlatformHorizontal(MHplatformKill3);
    updateMovingPlatformHorizontal(MHplatformKill4);
    updateMovingPlatformHorizontal(MHplatformKill5);


    updateMHplatformKill(MHplatformKill1);
    updateMHplatformKill(MHplatformKill2);
    updateMHplatformKill(MHplatformKill3);
    updateMHplatformKill(MHplatformKill4);
    updateMHplatformKill(MHplatformKill5);


    hitMplatform = game.physics.arcade.collide(player, movingPlatformHorizontal);


    if (blocco1Random == 1) {updateBloccoCadeSotto(blocco1);}
    else { updateBloccoCadePrima(blocco1);}

    if (blocco2Random == 1) {updateBloccoCadeSotto(blocco2);}
    else { updateBloccoCadePrima(blocco2);}

    if (blocco3Random == 1) {updateBloccoCadeSotto(blocco3);}
    else { updateBloccoCadePrima(blocco3);}

    if (blocco4Random == 1) {updateBloccoCadeSotto(blocco4);}
    else { updateBloccoCadePrima(blocco4);}

    if (blocco5Random == 1) {updateBloccoCadeSotto(blocco5);}
    else { updateBloccoCadePrima(blocco5);}

    if (blocco6Random == 1) {updateBloccoCadeSotto(blocco6);}
    else { updateBloccoCadePrima(blocco6);}

    updatebloccoGrande(bloccoGrande1);
    updatebloccoGrande(bloccoGrande2);

    updateBloccoTenaglia(bloccoTenagliaSopra);
    updateBloccoTenaglia(bloccoTenagliaSotto);

    yTenagliaSotto = bloccoTenagliaSotto.y;
    yTenagliaSopra = bloccoTenagliaSopra.y + bloccoTenagliaSopra.height;
    distanzaTenaglie = yTenagliaSotto - yTenagliaSopra;
    xInizioTenaglie = bloccoTenagliaSopra.x;
    xFineTenaglie = xInizioTenaglie + bloccoTenagliaSopra.width;
    if (distanzaTenaglie < player.height && xInizioTenaglie < player.x && player.x < xFineTenaglie && invulnerabile == false) {
        dannoPlayer();
    }


    updatebloccoTenagliaTorre();


    updatePlatformPassaSotto(platformPassaSotto1);
    updatePlatformPassaSotto(platformPassaSotto2);
    updatePlatformPassaSotto(platformPassaSotto3);
    updatePlatformPassaSotto(platformPassaSotto4);
    updatePlatformPassaSotto(platformPassaSotto5);
    updatePlatformPassaSotto(platformPassaSotto6);
    updatePlatformPassaSotto(platformPassaSotto7);
    updatePlatformPassaSotto(platformPassaSotto8);
    updatePlatformPassaSotto(platformPassaSotto9);
    updatePlatformPassaSotto(platformPassaSotto10);


    passaSottoPlatform.forEach( function(platform) {
        if(player.y + player.height <= platform.y)
            hitPSPlatform = game.physics.arcade.collide(player, platform);
    })



    game.physics.arcade.overlap(player, pozioneVolo, function (){
        volo = true;
        pozioneVolo.kill();
    })
    if (volo == true) {
        player.body.velocity.y = -350;
    }
    if (player.y<5*32) {
        volo = false;
    }

//Buco
    if(player.y > 1200 && player.x<220*32) {
        vite = vite - 1;
        if (vite > 0) {
            //game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                player.reset(posizioneplayer - 200, 250);
            //})
        }
    }

//Salto
    if (cursors.up.isDown && (player.body.onFloor() || (player.body.touching.down && hitMplatform || hitPSPlatform))) {
        player.body.velocity.y = -450;
    }


//updateRocce

    game.physics.arcade.collide(fireballs, layer);
    //if (invulnerabile == false) {
        game.physics.arcade.overlap(fireballs, player, function() {
            dannoPlayer();
        })
    //}

    fireballs.forEach( function(fireball) {
        fireball.animations.play('animazioneRocce')
    })

// updateFireballVerticale
    //sistemare togliendo invulnerabile, dovrebbe bastare da dannoPlayer();
    game.physics.arcade.collide(fireballs2, layer);
    if (invulnerabile == false) {
        game.physics.arcade.overlap(fireballs2, player, function() {
            dannoPlayer();
        })
    }

// updatePorta
    game.physics.arcade.overlap(player, porta, function() {
        player.x = 233*32;
        player.y = 143*32;
    })
    game.physics.arcade.overlap(player, porta2, function() {
        player.x = 272*32;
        player.y = 13*32;
        statoFlashback = 1;
    })

    updateCheckpoint(checkpoint);

    if (volo == false) {updatePatrolEnemy(nemicoTorre)};
    updateNemicoTorre(nemicoTorre);

    if (hitMplatform && player.x<231*32) {
        player.x = 231*32
    }
    if (hitMplatform && player.x>246*32-player.width) {
        player.x = 246*32-player.width;
    }

    updateDrago(drago);
    updateLampadario(lampadario);
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNZIONI///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateDrago(d) {
    if (player.x > 282*32 && livello==2 && statoFlashback == 4) {
        game.add.tween(d).to( { alpha: 1 }, 500, "Linear", true, 0, 0);
        weaponfire();
        d.animations.play('animazioneDrago');
        game.physics.arcade.collide(player, d, function(p, d) {
            dannoPlayer();
            d.x -= 250;
        })

        d.body.velocity.x = 210;

        if(player.body.velocity.x > 200) {
            d.body.velocity.x = player.body.velocity.x;
        }
    }
    if (player.x > 282*32 && livello==3) {
        game.add.tween(d).to( { alpha: 1 }, 500, "Linear", true, 0, 0);
        weaponfire();
        d.animations.play('animazioneDrago');
        game.physics.arcade.collide(player, d, function(p, d) {
            dannoPlayer();
            d.x -= 250;
        })

        d.body.velocity.x = 210;

        if(player.body.velocity.x > 200) {
            d.body.velocity.x = player.body.velocity.x;
        }
    }
}
function weaponfire() {
    game.physics.arcade.overlap(player, weapon.bullets, function(p, w) {
            w.kill();
            dannoPlayer();
        })
    if(drago.alive == true) {
        weapon.autofire = true;
    }
    else {
        weapon.autofire = false;
    }
}
function updateLampadario(l) {
    game.physics.arcade.collide(l, layer, function(l) {
        game.add.tween(l).to( { alpha: 0 }, 400, "Linear", true, 0, 0);
    });

    if (l.x <= drago.x+drago.width) {
        l.body.gravity.y = 400;
    }
    game.physics.arcade.overlap(l, drago, function(l, d) {
        //drago.body.immovable = false;
        game.add.tween(drago).to( { alpha: 0 }, 400, "Linear", true, 0, 0);
        game.time.events.add(Phaser.Timer.SECOND*0.5, function() {
            drago.kill();
        })
    })
}

function createPlayer() {
    if (livello == 0) {
        player = game.add.sprite(32, 25*32-52, 'dude');
        playercontroluce = player.addChild(game.make.sprite(0, 0, 'artucontroluce'));
    }
    else if (livello == 1) {
        player = game.add.sprite(32, 22*32, 'dude');
        playercontroluce = player.addChild(game.make.sprite(0, 0, 'artucontroluce'));
    }
    else if (livello == 2) {
        player = game.add.sprite(32, 100, 'dude');
        artuspada = player.addChild(game.make.sprite(0, 0, 'artuspada'));
        artuspada.animations.add('artuspadaleft', [1, 2, 3, 4, 5, 6, 7, 8], 17, true);
        artuspada.animations.add('artuspadaright', [10, 11, 12, 13, 14, 15, 16, 17], 17, true);
        game.physics.arcade.enable(artuspada);
        artuspada.pivot.x = 20;
    }
    else if (livello == 3) {
        player = game.add.sprite(272*32, 13*32, 'dude');
        artuspada = player.addChild(game.make.sprite(0, 0, 'artuspada'));
        artuspada.animations.add('artuspadaleft', [1, 2, 3, 4, 5, 6, 7, 8], 17, true);
        artuspada.animations.add('artuspadaright', [10, 11, 12, 13, 14, 15, 16, 17], 17, true);
        game.physics.arcade.enable(artuspada);
        artuspada.pivot.x = 20;
    }
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.05;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 17, true);
    player.animations.add('right', [9, 10, 11, 12, 13, 14, 15, 16], 17, true);
}

function movimentoPlayer() {
    player.body.velocity.x = 0;

    //Velocità cambia se nel fango o con pozione
    if (livello == 1 && hitMud) {
        velocità = 1;
    }
    else if (invulnerabile == true) {
        velocità = 3;
    }
    else {velocità = 2}


    if (cursors.left.isDown && velocità == 1)
    {
        player.body.velocity.x = -50;
    }
    else if (cursors.left.isDown && velocità == 2)
    {
        player.body.velocity.x = -200;
    }
    else if (cursors.left.isDown && velocità == 3)
    {
        player.body.velocity.x = -350;
    }
    else if (cursors.right.isDown && velocità == 1)
    {
        player.body.velocity.x = 50;
    }
    else if (cursors.right.isDown && velocità == 2)
    {
        player.body.velocity.x = 200;
    }
    else if (cursors.right.isDown && velocità == 3)
    {
        player.body.velocity.x = 350;
    }
    else
    {
        if (livello == 1) {
            player.animations.stop();
            player.frame = 8;
        }

        else if (livello == 2 || livello == 3) {
            artuspada.animations.stop();
            artuspada.frame = 9;
        }
    }
}
function animazionePlayer() {
    if(livello == 1) { playercontroluce.frame = player.frame; }
//Player e spada cambiano direzione
    if (cursors.left.isDown) {
            if (livello == 1) {player.animations.play('left')}
            if (livello == 2 || livello == 3) {
                artuspada.animations.play('artuspadaleft');
            }
        }
    else if (cursors.right.isDown) {
        if (livello == 1) { player.animations.play('right')}
        if (livello == 2 || livello == 3) {
            artuspada.animations.play('artuspadaright');
        }
    }
}
function createMinimappa() {
    minimappa = game.add.sprite(353, 20, 'mappamia');
    minimappa.fixedToCamera = true;

    if (livello == 1) {
        minimappacaio = game.add.sprite(150, 28, 'mappa-caio');
        minimappacaio.fixedToCamera = true;
        minimappacaio.cameraOffset = {x:150, y:28};
    }

    minimappaplayer = game.add.sprite(0, 28, 'mappa-player');
    minimappaplayer.fixedToCamera = true;
    minimappaplayer.cameraOffset = {x:150, y:28};
}

function updateMinimappa() {
    posizioneplayer = player.position.x;
    posizioneplayermappa = 353+285*(posizioneplayer/lunghezzamondo);
    minimappaplayer.cameraOffset.x = posizioneplayermappa;

    if (livello == 1) {
        posizionecaio = caio.position.x;
        posizionecaiomappa = 353+285*(posizionecaio/lunghezzamondo);
        minimappacaio.cameraOffset.x = posizionecaiomappa;
    }
}

function updateInfograficaVite() {
    if (vite == 5) {
        segnavita.alpha = 1;
        segnavita2.alpha = 1;
        segnavita3.alpha = 1;
        segnavita4.alpha = 1;
        segnavita5.alpha = 1;
    }
    else if (vite == 4) {
        segnavita.alpha = 1;
        segnavita2.alpha = 1;
        segnavita3.alpha = 1;
        segnavita4.alpha = 1;
        segnavita5.alpha = 0;
    }
    else if (vite == 3) {
        segnavita.alpha = 1;
        segnavita2.alpha = 1;
        segnavita3.alpha = 1;
        segnavita4.alpha = 0;
        segnavita5.alpha = 0;
    }
    else if (vite == 2) {
        segnavita.alpha = 1;
        segnavita2.alpha = 1;
        segnavita3.alpha = 0;
        segnavita4.alpha = 0;
        segnavita5.alpha = 0;
    }
    else if (vite == 1) {
        segnavita.alpha = 1;
        segnavita2.alpha = 0;
        segnavita3.alpha = 0;
        segnavita4.alpha = 0;
        segnavita5.alpha = 0;
    }
    else if (vite == 0) {
        segnavita.alpha = 0;
        segnavita2.alpha = 0;
        segnavita3.alpha = 0;
        segnavita4.alpha = 0;
        segnavita5.alpha = 0;
    }
}

function updateTimer() {
// colore testo timer
    if (time > 30) {
        textTimer.fill = "#000"
    }
    else if (time <= 30 && time > 10) {
        textTimer.fill = "#C30";
    }
    else if (time <= 10) {
        textTimer.fill = "#F00";
    }
    if (time == 0) {
        game.time.events.remove(timer);
        morte();
    }
}

function timeCounter() {
    if(statoFlashback == 0){
        time = time - 1;
        textTimer.setText(time);
    }
}

function createVita(x,y) {
     cv = game.add.sprite(x, y, 'cuore');
    //ridimensionare
     cv.width = 40; cv.height = 40;
     game.physics.arcade.enable(cv);
     return cv;
}

function updateVita(vita) {
    if( vite >= 5) {
        vita.alpha = 0.5;
        game.physics.arcade.overlap(player, vita);
    }
    else if (vite < 5) {
        vita.alpha = 1;
        game.physics.arcade.overlap(player, vita, function(player, vita) {
            vite = vite +1;
            vita.kill();
        })
    }
}

function morte() {
    if(livello == 1){
        game.state.start('Gameover1');
    }
    if(livello == 2) {
        game.state.start('Gameover2');
    }
}

function dannoPlayer() {
    if (invulnerabile == false) {
    invulnerabile = true;
    vite -= 1;
    if (vite == 0) {
      respawn();
    }
    game.time.events.add(Phaser.Timer.SECOND*1, function() {
        invulnerabile = false;
    })
    }
}
function invulnerablità() {
    if (invulnerabile == true) {
        player.alpha = 0.5;
    }
    else {
        player.alpha = 1;
    }
}
function createCheckpoint(x, y) {
    g = game.add.sprite(x, y,'checkpoint');
    game.physics.arcade.enable(g);
    g.width = 47;
    g.height = 81;
    g.body.immovable = true;
    return g;
}

function updateCheckpoint(checkpoint) {
    game.physics.arcade.overlap(player, checkpoint, function(player, checkpoint){
        checkpointAttivo = true;
        checkpoint.alpha = 0.5;
        if (livello == 1) {
            checkpointCaio = caio.x;
        }
        else if (livello == 2) {
            checkpointTime = time;
        }
    })
}

function respawn() {
    if (livello == 3) {
            game.state.restart();
        }
    if (checkpointAttivo == true && possibilità == 1) {
        player.reset(checkpoint.x, checkpoint.y);
        possibilità = 2;
        vite = 2;
        if (livello == 1) {
            caio.x = checkpointCaio;
            caio.body.gravity.y=0;
            potion3.reset(245*32, 23*32);
            tronco1.reset(168*32, 24.5*32);
            tronco2.reset(187*32, 24.5*32);
            if (statoPonte == 1){
                for (var i = 0; i < 24; i++) {
                var tilePlatformPonte = platformPonte.create(211*32+i*32, 25*32, 'platformponte');
                platformPonte.setAll('body.immovable', true);
                statoPonte = 2;
            }
            }

        }
        if (livello == 2 && statoFlashback == 0) {
            volo=false;
            pozioneVolo.reset(236*32, 95*32-25);
            if (checkpointTime > 60) {
                checkpointTime = time;
            }
            else { time = 60 }
        }

    }
    else {
        morte();
    }
}

function vittoria() {
    if(livello == 1){
        game.state.start('Youwin1');
    }
    if(livello == 2 || livello == 3) {
        game.state.start('Livello2Fine');
    }
}

function createSegnavita(x,y) {
    csv = game.add.sprite(x, y, 'cuore');
    csv.width = 30; csv.height = 30;
    csv.fixedToCamera = true;
    return csv;
}

function createPatrolEnemy(x,y,leftLimit, rightLimit, immagine) {
  g = game.add.sprite(x,y, immagine);
  //g.width = 85; g.height = 45;
  game.physics.arcade.enable(g);
  g.body.velocity.x = 100;
  g.leftLimit = leftLimit;
  g.rightLimit = rightLimit;
    g.immagine = immagine;
    if(immagine == 'bat'){
        g.animations.add('batleft', [0, 1, 2, 3, 4], 10, true);
        g.animations.add('batright', [5, 6, 7, 8, 9], 10, true);
    }
    else if(immagine == 'ghost'){
        g.animations.add('ghostleft', [0, 1, 2, 3], 10, true);
        g.animations.add('ghostright', [4, 5, 6, 7], 10, true);
    }
  return g;
}

function updatePatrolEnemy(enemy) {
    if(enemy.x <= enemy.leftLimit) {
        enemy.body.velocity.x = 100;
    }

    else if (enemy.x >= enemy.rightLimit) {
        enemy.body.velocity.x = -100;
    }


    if (enemy.body.velocity. x >= 0) {
        if(enemy.immagine == 'bat'){
            enemy.animations.play('batright');
        }
        else if(enemy.immagine == 'ghost') {
                enemy.animations.play('ghostright');
        }
    }
    else {
        if(enemy.immagine == 'bat') {
            enemy.animations.play('batleft');
        }
        else if(enemy.immagine == 'ghost') {
            enemy.animations.play('ghostleft');
        }
    }

    if (isAttacking == false) {
        game.physics.arcade.overlap(player, enemy, function(player, enemy) {
            dannoPlayer();
        })
    }
    else if (isAttacking == true) {
        game.physics.arcade.overlap(artuspada, enemy, function(artuspada, enemy) {
            enemy.kill();
        })
    }

}

function updateStaticEnemyCollision (staticEnemy) {
//collisione con nemico toglie una vita
    if (invulnerabile == false) {
        game.physics.arcade.overlap(player, staticEnemy, function(player, staticEnemy) {
            dannoPlayer();
        })
    }
}

function createStaticEnemy(x,y) {
  g = game.add.sprite(x,y-10,'cactus');
  g.width = 40; g.height = 50;
  game.physics.arcade.enable(g);
  return g;
}

function createPotion(x,y) {
    g = game.add.sprite(x,y-25,'potion');
    game.physics.arcade.enable(g);
    g.animations.add('potionAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 12, true);
    return g;
}


function updatePotionCollision (potion) {
    potion.animations.play('potionAnimation');

    if (invulnerabile == false) {
        game.physics.arcade.overlap(player, potion, function(player, potion) {
            potion.kill();
            invulnerabile = true;
            game.time.events.add(Phaser.Timer.SECOND*5, function() {
                invulnerabile = false;
            })
        })
    }
}

function createMud(x,y,width, immagine) {
    g = muds.create(x, y-4, immagine);
    game.physics.arcade.enable(g);
    g.height = 36;
    g.width = width;
    g.body.immovable = true;
    return g;
}

//Piattaforme
function createMovingPlatformHorizontal(x, y, width, height, leftLimit, rightLimit, immagine, velocita) {
    g = movingPlatformHorizontal.create(x,y,immagine);
    game.physics.arcade.enable(g);
    g.leftLimit = leftLimit;
    g.rightLimit = rightLimit;
    g.width = width;
    g.height = height;
    g.body.immovable = true;
    g.body.velocity.x = velocita;
    g.velocita = velocita;
    return g;
}

function updateMovingPlatformHorizontal(Mledge) {
    if(Mledge.x <= Mledge.leftLimit) {
        Mledge.body.velocity.x = Mledge.velocita;
    }
    else if (Mledge.x >= Mledge.rightLimit) {
    Mledge.body.velocity.x = -1 * Mledge.velocita;
    }
}
function createMovingPlatformVertical(x, y, width, height, topLimit, bottomLimit) {
    g = game.add.sprite(x,y,'mledge');
    game.physics.arcade.enable(g);
    g.topLimit = topLimit;
    g.bottomLimit = bottomLimit;
    g.width = width;
    g.height = height;
    g.body.immovable = true;
    g.body.velocity.y = -100;
    return g;
}

function updateMovingPlatformVertical(Mledge) {

    hitMVplatform = game.physics.arcade.collide(player, Mledge);

    if(Mledge.y <= Mledge.topLimit) {
    Mledge.body.velocity.y = 100;
    }
    else if (Mledge.y >= Mledge.bottomLimit) {
    Mledge.body.velocity.y = -100;
    }
}

function createDisappearingPlatform(x, y) {
    g = game.add.sprite(x,y,'dledge');
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    g.scale.setTo(1.3, 1);
    g.alpha = 1;
    return g;
}

function updateDisappearingPlatform(Dledge) {

    //if (Dledge.alpha > 0) {
        hitDplatform = game.physics.arcade.collide(player, Dledge, function(player, Dledge) {
            game.time.events.add(Phaser.Timer.SECOND*0.3, function() {
                Dledge.alpha = 0.6;
            })
            game.time.events.add(Phaser.Timer.SECOND*0.6, function() {
                Dledge.alpha = 0.3;
            })
            game.time.events.add(Phaser.Timer.SECOND*1, function() {
                Dledge.alpha = 0;
                Dledge.kill();
            })
        });
    game.physics.arcade.collide(caio, Dledge, function(player, Dledge) {
            game.time.events.add(Phaser.Timer.SECOND*0.3, function() {
                Dledge.alpha = 0.6;
            })
            game.time.events.add(Phaser.Timer.SECOND*0.6, function() {
                Dledge.alpha = 0.3;
            })
            game.time.events.add(Phaser.Timer.SECOND*2, function() {
                Dledge.alpha = 0;
                Dledge.kill();
            })
        });
    }
//}



function createSlipperyPlatform(x, y, width, immagine) {
    g = slipperyPlatform.create(x , y, immagine);
    g.width = width;
    g.height = 32;
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    return g;
}

function updateSlipperyPlatform(sLedge) {
    hitSplatform = game.physics.arcade.collide(player, sLedge, function(player, sLedge) {
        player.body.velocity.x *=5;
    })
}

function createJumpingPlatform(x, y, width, immagine) {
    g = game.add.sprite(x , y, immagine);
    g.width = width;
    g.height = 32;
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    immagine = g.immagine;
    //if(g.immagine == 'mushroom'){
        g.animations.add('animazionefungo', [0, 1, 2, 3, 4, 5], 10, true);
    //}
    return g;
}

function updateJumpingPlatform(jLedge) {

    hitJplatform = game.physics.arcade.collide(player, jLedge, function(player, jLedge) {
        if(player.body.touching.down) {
            player.body.velocity.y = -650;
            jLedge.animations.play('animazionefungo');

            game.time.events.add(Phaser.Timer.SECOND*1.5, function() {
                jLedge.animations.stop();
            })
        }
    })
}

function createLuce (x, y, larghezza, altezza) {
    g = game.add.sprite(x,y,'light');
    game.physics.arcade.enable(g);
    g.width = larghezza;
    g.height = altezza;
    g.body.immovable = true;
    g.alpha = 1;
    return g;
}

function updateLuce(luce) {
    playercontroluce.alpha = 0;
    controluce = game.physics.arcade.overlap(player, luce, function() {
        playercontroluce.alpha = 1;
    });
}

function createBlocco (x, yIniziale, width, height, immagine) {

    g = game.add.sprite(x, yIniziale,immagine);
    game.physics.arcade.enable(g);
    yInizialeBlocco = yIniziale;
    g.width = width;
    g.height = height;
    g.body.immovable = true;
    return g;
}

function updateBloccoCadeSotto (blocco) {
    var posizioneBlocco = blocco.x;
    if (posizioneplayer >= posizioneBlocco) {
        blocco.body.velocity.y = 250;
    }
    game.physics.arcade.overlap(player, blocco, function(player, blocco) {
        if (invulnerabile == false) {dannoPlayer();}
    })
    game.physics.arcade.collide(layer, blocco);
    return blocco;
}

function updateBloccoCadePrima (blocco) {
    var posizioneBloccoPrima = blocco.x - 64;
    if (posizioneplayer >= posizioneBloccoPrima) {
        blocco.body.velocity.y = 350;
        game.time.events.add(Phaser.Timer.SECOND*1, function() {
                blocco.body.velocity.y = -500;
            })
        }
    game.physics.arcade.overlap(player, blocco, function(player, blocco) {
        if (invulnerabile == false) {dannoPlayer();}
    })
    game.physics.arcade.collide(layer, blocco);
}

var statoBloccoGrande = 0;

function updatebloccoGrande(bloccoGrande) {
    if (invulnerabile == false) {
        game.physics.arcade.overlap(player, bloccoGrande, function (player, bloccoGrande){
            dannoPlayer();
        })
    }

    game.physics.arcade.collide(bloccoGrande, layer);

    if (statoBloccoGrande == 0) {
        bloccoGrande.body.velocity.y = 800;
        game.time.events.add(Phaser.Timer.SECOND*0.8, function() {
            statoBloccoGrande = 1;
        })
    }
    else if (statoBloccoGrande == 1) {
        bloccoGrande.body.velocity.y = -600;
        game.time.events.add(Phaser.Timer.SECOND*0.8, function() {
            statoBloccoGrande = 2;
        })
    }
    else if (statoBloccoGrande == 2) {
        bloccoGrande.body.velocity.y = 0;
        game.time.events.add(Phaser.Timer.SECOND*0.6, function() {
            statoBloccoGrande = 0;
        })
    }
}

function updatebloccoTenagliaTorre() {
    hitBloccoTenagliaTorreSinistra = game.physics.arcade.collide(bloccoTenagliaTorreSinistra, player)
    hitBloccoTenagliaTorreDestra = game.physics.arcade.collide(bloccoTenagliaTorreDestra, player)

    if(bloccoTenagliaTorreSinistra.body.velocity.x > 0 && hitBloccoTenagliaTorreSinistra) {
        player.body.velocity.x = bloccoTenagliaTorreSinistra.body.velocity.x;
    }
    if(bloccoTenagliaTorreDestra.body.velocity.x < 0 && hitBloccoTenagliaTorreDestra) {
        player.body.velocity.x = bloccoTenagliaTorreDestra.body.velocity.x;
    }


    if (bloccoTenagliaTorreSinistra.x <= 225*32) {
        bloccoTenagliaTorreDestra.body.velocity.x = 0;
        bloccoTenagliaTorreSinistra.body.velocity.x = 0;
        //console.log('1')
        game.time.events.add(Phaser.Timer.SECOND*1, function() {
            bloccoTenagliaTorreDestra.body.velocity.x = 32*3;
            bloccoTenagliaTorreSinistra.body.velocity.x = 32*3;
        })
    }
    else if (bloccoTenagliaTorreSinistra.x >= 231*32) {
        bloccoTenagliaTorreDestra.body.velocity.x = 0;
        bloccoTenagliaTorreSinistra.body.velocity.x = 0;
        //console.log('2')

        game.time.events.add(Phaser.Timer.SECOND*1, function() {
            bloccoTenagliaTorreDestra.body.velocity.x = -32*3;
            bloccoTenagliaTorreSinistra.body.velocity.x = -32*3;
        })
    }
}

function updateBloccoTenaglia(bloccoTenaglia) {
    hitTenaglia = game.physics.arcade.collide(bloccoTenaglia, player);
    game.physics.arcade.collide(player, bloccoTenaglia);
}

function createRocce() {
    var fireball = fireballs.create(211*32, 5*32, 'sprite-rocce');
    fireball.body.velocity.x = -300;
    fireball.body.gravity.y = 300;
    fireball.body.bounce.y = 0.4;
    fireball.animations.add('animazioneRocce', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 16, true);
}

function createFireballVerticale() {
    for (var i = 0; i < 25; i++) {
        var fireball2 = fireballs2.create(115*32+i*96, 22*32, 'fireball');
    }

    fireballs2.forEach( function(fireball2) {
        if(game.rnd.integerInRange(1, 6) == 1){
            fireball2.y = 9*32;
            tweenFireballVerticale = game.add.tween(fireball2).to( { y: 19*32 }, 1000, Phaser.Easing.Exponential.InOut, true, 0, -1);
            tweenFireballVerticale.yoyo(true, 900);
        }
        else { fireball2.kill();}
    })
}
function createFireballDrago() {
    var fireballDrago = fireballs2.create(drago.x, drago.y, 'fireball');
    fireballDrago.body.velocity.x = 400;
}

function createPlatformPassaSotto(x, y, width, immagine) {
    g = passaSottoPlatform.create(x , y, immagine);
    g.width = width;
    g.height = 32;
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    g.alpha = 0.6;
    return g;
}

function updatePlatformPassaSotto(platform) {
    if(player.y + player.height <= platform.y) {
        //hitPSPlatform = game.physics.arcade.collide(player, platform);
        platform.alpha = 1;
    }
    else {
        platform.alpha = 0.6;
    }
}

function updateNemicoTorre(g) {
     if (volo == true) {
        //g.alpha = 1;

        game.time.events.add(Phaser.Timer.SECOND*0.5, function() {
            g.body.velocity.y = player.body.velocity.y+20;
        })

         //insegue dx-sx il player
        if (player.x < g.x) {
            g.body.velocity.x = -50;
        }
        else if (player.x > g.x) {
            g.body.velocity.x = 50;
        }
        else {g.body.velocity.x = 0;}

        //if (player.y +100 = )
        hitNemicoTorre = game.physics.arcade. collide(player, g, function(){
            dannoPlayer();
            nemicoTorre.position.y += 100;
        })

        if(g.y <= 550) {
            g.kill();
        }
      }
    return g;
 }

function updateMHplatformKill(platform) {
    game.physics.arcade.collide(player, platform, function(){
        dannoPlayer();
        platform.kill();
    })
}

function createTronchi(x, y, width, height, immagine) {
    g = tronchi.create(x , y, immagine);
    g.width = width;
    g.height = height;
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    return g;
}

function updateTronco(tronco) {
    if (game.physics.arcade.collide(player, tronco)) {
        tronco.body.velocity.y = 20;
    }
}

function createPietreLago(x) {
    g = pietreLago.create(x, 24.5*32, 'pietralago');
    g.width = 32;
    g.height = 32;
    game.physics.arcade.enable(g);
    g.body.immovable = true;
    return g;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
game.state.add('Start', StartState);
game.state.add('Credits', CreditsState);
game.state.add('Autori', AutoriState);
game.state.add('Intro', IntroState);
game.state.add('Comandi', ComandiState);
game.state.add('Comandi2', Comandi2State);
game.state.add('Livello1', Livello1State);
game.state.add('Livello2', Livello2State);
game.state.add('Livello1Intro', Livello1IntroState);
game.state.add('Livello2Inizio', Livello2InizioState);
game.state.add('Youwin1', Youwin1State);
game.state.add('Livello2Fine', Livello2FineState);
game.state.add('Gameover1', Gameover1State);
game.state.add('Gameover2', Gameover2State);
game.state.add('Livello2Drago', Livello2DragoState);

game.state.start('Start');

function restart() {
    this.game.state.restart();
}
function youwinClick() {
    if(livello == 1) {
        game.state.start('Livello2');
    }
    if(livello == 2) {
        game.state.start('Livello1');
    }
}
