// ============================================
//  ГЕРОИ: ХРОНИКИ ЭМОДЗИ — Основной движок
//  Использует спрайты из sprites.js
// ============================================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const msgEl = document.getElementById("message");

const COLS = 15, ROWS = 15, TILE = 32, W = 480, H = 480;

const T = { GRASS:0, DIRT:1, STONE:2, WATER:3, FOREST:4, MOUNTAIN:5, SAND:6, SWAMP:7 };

const worldMap = [
    [0,0,0,0,0,0,1,1,0,0,5,0,0,0,0],
    [0,4,4,0,0,0,1,0,0,0,5,5,0,4,0],
    [0,4,4,0,0,1,0,0,0,0,0,5,0,0,0],
    [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
    [6,6,0,0,0,0,3,3,3,3,0,0,0,0,0],
    [6,6,0,0,0,0,0,3,3,0,0,0,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,2,2,2,0],
    [0,0,2,2,0,0,0,0,0,4,4,0,0,0,0],
    [0,0,2,0,0,0,0,0,4,4,0,0,0,0,5],
    [7,7,0,0,0,0,0,0,0,0,0,0,0,5,5],
    [7,7,0,0,0,5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,5,5,0,0,0,0,0,6,6,0,0],
    [0,0,0,0,0,0,0,0,0,0,6,6,0,0,0],
    [0,4,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,5,0,0,0,0,0,0,0,0,0],
];

let hero = {
    x:7, y:7, gold:100, hp:120, maxHp:120,
    level:1, exp:0, expToNext:60, kills:0,
    animFrame:0, direction:0
};

let objects = {};
objects["7,7"] = {type:"castle",name:"Стартовый замок"};
objects["14,14"] = {type:"castle",name:"Цитадель тьмы"};
objects["0,0"] = {type:"castle",name:"Форт света"};

const enemyPositions = [
    [2,1],[5,3],[10,2],[3,6],[8,4],[12,5],[4,9],[9,8],[13,10],[1,12],
    [6,11],[11,13],[2,14],[8,0],[14,3]
];
const enemyTypes = ["goblin","skeleton","orc","slime","bandit"];

enemyPositions.forEach(([x,y]) => {
    let type = enemyTypes[Math.floor(Math.random()*enemyTypes.length)];
    objects[y+","+x] = createEnemy(type,x,y);
});

for (let i=0; i<20; i++) {
    let x=Math.floor(Math.random()*COLS), y=Math.floor(Math.random()*ROWS);
    if (!objects[y+","+x] && worldMap[y][x]!==T.WATER && worldMap[y][x]!==T.MOUNTAIN) {
        objects[y+","+x] = {type:"treasure",gold:20+Math.floor(Math.random()*80),name:"Сокровище"};
    }
}

for (let i=0; i<10; i++) {
    let x=Math.floor(Math.random()*COLS), y=Math.floor(Math.random()*ROWS);
    if (!objects[y+","+x] && worldMap[y][x]!==T.WATER && worldMap[y][x]!==T.MOUNTAIN) {
        objects[y+","+x] = {type:"potion",heal:25+Math.floor(Math.random()*30),name:"Зелье"};
    }
}

function createEnemy(type,x,y) {
    let stats = {
        goblin:{hp:30,atk:8,def:2,gold:40,xp:25,name:"Гоблин"},
        skeleton:{hp:40,atk:10,def:3,gold:50,xp:35,name:"Скелет"},
        orc:{hp:55,atk:14,def:5,gold:70,xp:50,name:"Орк"},
        slime:{hp:20,atk:5,def:1,gold:20,xp:15,name:"Слизень"},
        bandit:{hp:45,atk:11,def:3,gold:60,xp:40,name:"Бандит"},
    };
    let s=stats[type];
    return {type:"enemy",enemyType:type,name:s.name,hp:s.hp,maxHp:s.hp,atk:s.atk,def:s.def,gold:s.gold,xp:s.xp};
}

let camera={x:0,y:0};

function updateCamera() {
    camera.x=hero.x*TILE-W/2+TILE/2;
    camera.y=hero.y*TILE-H/2+TILE/2;
    camera.x=Math.max(0,Math.min(camera.x,COLS*TILE-W));
    camera.y=Math.max(0,Math.min(camera.y,ROWS*TILE-H));
}

function drawWorld() {
    let sc=Math.floor(camera.x/TILE), ec=Math.min(COLS,sc+Math.ceil(W/TILE)+1);
    let sr=Math.floor(camera.y/TILE), er=Math.min(ROWS,sr+Math.ceil(H/TILE)+1);
    
    for (let r=sr;r<er;r++) {
        for (let c=sc;c<ec;c++) {
            let sx=c*TILE-camera.x, sy=r*TILE-camera.y;
            let tile=worldMap[r][c];
            
            switch(tile) {
                case T.GRASS: SPRITES.tiles.grass(ctx,sx,sy); break;
                case T.DIRT: SPRITES.tiles.dirt(ctx,sx,sy); break;
                case T.STONE: SPRITES.tiles.stone(ctx,sx,sy); break;
                case T.WATER: SPRITES.tiles.water(ctx,sx,sy); break;
                case T.FOREST: SPRITES.tiles.forest(ctx,sx,sy); break;
                case T.MOUNTAIN: SPRITES.tiles.mountain(ctx,sx,sy); break;
                case T.SAND: SPRITES.tiles.sand(ctx,sx,sy); break;
                case T.SWAMP: SPRITES.tiles.swamp(ctx,sx,sy); break;
            }
            
            let key=r+","+c, obj=objects[key];
            if (obj && !(c===hero.x && r===hero.y)) {
                let cx=sx+TILE/2, cy=sy+TILE/2;
                if (obj.type==="castle") SPRITES.objects.castle(ctx,cx-16,cy-12);
                else if (obj.type==="enemy") {
                    if (SPRITES.enemies[obj.enemyType]) {
                        SPRITES.enemies[obj.enemyType](ctx,cx-16,cy-16,obj.hp/obj.maxHp);
                    }
                }
                else if (obj.type==="treasure") SPRITES.objects.treasure(ctx,cx-16,cy-16);
                else if (obj.type==="potion") SPRITES.objects.potion(ctx,cx-16,cy-16);
            }
        }
    }
    
    let hx=hero.x*TILE-camera.x, hy=hero.y*TILE-camera.y;
    let frame=hero.animFrame%4;
    if (SPRITES.hero[frame]) SPRITES.hero[frame](ctx,hx,hy);
}

function moveHero(dx,dy) {
    let nx=hero.x+dx, ny=hero.y+dy;
    if (nx<0||nx>=COLS||ny<0||ny>=ROWS) return false;
    let tile=worldMap[ny][nx];
    if (tile===T.WATER||tile===T.MOUNTAIN) { showMessage("⛔ Непрходимо!"); return false; }
    
    hero.x=nx; hero.y=ny;
    hero.animFrame++;
    hero.direction=dx!==0?(dx>0?1:3):(dy>0?2:0);
    
    let key=ny+","+nx, obj=objects[key];
    if (obj) {
        if (obj.type==="enemy") { startBattle(obj,key); return true; }
        else if (obj.type==="treasure") {
            hero.gold+=obj.gold; hero.exp+=10; delete objects[key];
            showMessage("💰 +"+obj.gold+" золота!"); checkLevelUp();
        }
        else if (obj.type==="potion") {
            hero.hp=Math.min(hero.maxHp,hero.hp+obj.heal); delete objects[key];
            showMessage("🧪 +"+obj.heal+" HP!");
        }
        else if (obj.type==="castle") {
            hero.hp=hero.maxHp; showMessage("🏰 Полное исцеление в "+obj.name+"!");
        }
    }
    
    updateCamera(); updateUI(); return true;
}

let battleState=null;

function startBattle(enemy,key) {
    battleState={enemy:enemy,key:key,turn:"player",log:[],playerHP:hero.hp,playerMaxHP:hero.maxHp,enemyHP:enemy.hp,enemyMaxHP:enemy.maxHp};
    drawBattleScreen();
}

function drawBattleScreen() {
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle="#1a1a2e"; ctx.fillRect(0,0,W,H);
    ctx.fillStyle="#3a3a2a"; ctx.fillRect(0,H-100,W,100);
    ctx.fillStyle="#2a2a1a"; ctx.fillRect(0,H-102,W,2);
    
    let bs=battleState;
    
    ctx.fillStyle="rgba(0,0,0,0.5)";
    ctx.beginPath(); ctx.ellipse(120,240,35,8,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(360,240,35,8,0,0,Math.PI*2); ctx.fill();
    
    if (bs.enemy.enemyType && SPRITES.enemies[bs.enemy.enemyType]) {
        SPRITES.enemies[bs.enemy.enemyType](ctx,104,204,bs.enemyHP/bs.enemyMaxHP);
    }
    SPRITES.hero[0](ctx,344,204);
    
    drawBattleHP(50,30,bs.playerHP,bs.playerMaxHP,"Герой");
    drawBattleHP(250,30,bs.enemyHP,bs.enemyMaxHP,bs.enemy.name);
    
    ctx.fillStyle="rgba(0,0,0,0.6)"; ctx.fillRect(10,H-90,W-20,80);
    ctx.fillStyle="#fff"; ctx.font="12px monospace";
    let logY=H-75;
    let logs=bs.log.slice(-4);
    logs.forEach(l=>{ctx.fillText(l,20,logY); logY+=16;});
    
    if (bs.turn==="player") {
        ctx.fillStyle="#fff"; ctx.font="14px monospace";
        ctx.fillText("[A] Атака  [B] Защита  [X] Зелье",W/2-120,H-12);
    } else {
        ctx.fillText("Враг атакует...",W/2-40,H-12);
        setTimeout(enemyTurn,1000);
    }
    updateUI();
}

function drawBattleHP(x,y,hp,maxHp,name) {
    ctx.fillStyle="#000"; ctx.fillRect(x,y,180,22);
    ctx.strokeStyle="#555"; ctx.strokeRect(x,y,180,22);
    let pct=hp/maxHp;
    ctx.fillStyle=pct>0.5?"#0a0":pct>0.25?"#fa0":"#f00";
    ctx.fillRect(x+1,y+1,178*pct,20);
    ctx.fillStyle="#fff"; ctx.font="11px monospace";
    ctx.fillText(name+": "+hp+"/"+maxHp,x+5,y+15);
}

function playerAttack() {
    let bs=battleState;
    if (bs.turn!=="player") return;
    let dmg=12+Math.floor(Math.random()*10)-bs.enemy.def;
    dmg=Math.max(1,dmg);
    bs.enemyHP-=dmg;
    bs.log.push("⚔️ Герой наносит "+dmg+" урона!");
    if (bs.enemyHP<=0) { endBattle(true); return; }
    bs.turn="enemy"; drawBattleScreen(); setTimeout(enemyTurn,1000);
}

function playerDefend() {
    let bs=battleState;
    if (bs.turn!=="player") return;
    bs.log.push("🛡 Герой защищается! (-50% урона)");
    bs.turn="enemy"; bs.defending=true; drawBattleScreen(); setTimeout(enemyTurn,800);
}

function playerPotion() {
    let bs=battleState;
    if (bs.turn!=="player") return;
    let heal=30;
    bs.playerHP=Math.min(bs.playerMaxHP,bs.playerHP+heal);
    bs.log.push("🧪 Герой лечится на "+heal+" HP!");
    bs.turn="enemy"; drawBattleScreen(); setTimeout(enemyTurn,800);
}

function enemyTurn() {
    let bs=battleState;
    if (bs.turn!=="enemy") return;
    let dmg=bs.enemy.atk+Math.floor(Math.random()*6);
    if (bs.defending) { dmg=Math.floor(dmg/2); bs.defending=false; }
    bs.playerHP-=dmg;
    bs.log.push("👊 "+bs.enemy.name+" наносит "+dmg+" урона!");
    if (bs.playerHP<=0) { endBattle(false); return; }
    bs.turn="player"; drawBattleScreen();
}

function endBattle(victory) {
    let bs=battleState;
    if (victory) {
        hero.gold+=bs.enemy.gold; hero.exp+=bs.enemy.xp; hero.kills++;
        hero.hp=bs.playerHP; delete objects[bs.key];
        showMessage("🏆 Победа! +"+bs.enemy.gold+"💰 +"+bs.enemy.xp+" XP");
        checkLevelUp();
    } else {
        hero.hp=Math.floor(hero.maxHp/3);
        hero.gold=Math.floor(hero.gold*0.7);
        hero.x=7; hero.y=7;
        showMessage("💀 Поражение... -30% золота");
    }
    battleState=null; updateCamera(); updateUI(); drawWorld();
}

function checkLevelUp() {
    while (hero.exp>=hero.expToNext) {
        hero.exp-=hero.expToNext; hero.level++;
        hero.expToNext=Math.floor(hero.expToNext*1.6);
        hero.maxHp+=20; hero.hp=hero.maxHp;
        showMessage("🎉 УРОВЕНЬ "+hero.level+"! +20 HP");
    }
}

function showMessage(text) {
    msgEl.textContent=text; msgEl.classList.add("show");
    clearTimeout(msgEl._timeout);
    msgEl._timeout=setTimeout(()=>msgEl.classList.remove("show"),2000);
}

function updateUI() {
    document.getElementById("lvl").textContent=hero.level;
    document.getElementById("gold").textContent=hero.gold;
    document.getElementById("hp").textContent=hero.hp+"/"+hero.maxHp;
    document.getElementById("kills").textContent=hero.kills;
    document.getElementById("exp").textContent=hero.exp+"/"+hero.expToNext;
}

function handleAction(action) {
    if (battleState) {
        if (action==="A") playerAttack();
        else if (action==="B") playerDefend();
        else if (action==="X") playerPotion();
        return;
    }
    switch(action) {
        case"up": moveHero(0,-1); break;
        case"down": moveHero(0,1); break;
        case"left": moveHero(-1,0); break;
        case"right": moveHero(1,0); break;
        case"A":
            if (hero.hp<hero.maxHp) {
                hero.hp=Math.min(hero.maxHp,hero.hp+10);
                showMessage("⚡ +10 HP"); updateUI();
                if (!battleState) drawWorld();
            }
            break;
    }
    if (!battleState) { updateCamera(); drawWorld(); }
    updateUI();
}

document.querySelector(".up").onclick=()=>handleAction("up");
document.querySelector(".down").onclick=()=>handleAction("down");
document.querySelector(".left").onclick=()=>handleAction("left");
document.querySelector(".right").onclick=()=>handleAction("right");
document.querySelector(".center").onclick=()=>handleAction("A");

document.addEventListener("keydown",e=>{
    if (battleState) {
        if (e.key==="a"||e.key==="A") handleAction("A");
        if (e.key==="b"||e.key==="B") handleAction("B");
        if (e.key==="x"||e.key==="X") handleAction("X");
        return;
    }
    if (e.key==="ArrowUp"||e.key==="w") handleAction("up");
    if (e.key==="ArrowDown"||e.key==="s") handleAction("down");
    if (e.key==="ArrowLeft"||e.key==="a") handleAction("left");
    if (e.key==="ArrowRight"||e.key==="d") handleAction("right");
    if (e.key===" ") { e.preventDefault(); handleAction("A"); }
});

let touchStart={x:0,y:0};
canvas.addEventListener("touchstart",e=>{
    touchStart.x=e.touches[0].clientX; touchStart.y=e.touches[0].clientY;
});
canvas.addEventListener("touchend",e=>{
    if (battleState) return;
    let dx=e.changedTouches[0].clientX-touchStart.x;
    let dy=e.changedTouches[0].clientY-touchStart.y;
    if (Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>25) handleAction(dx>0?"right":"left");
    else if (Math.abs(dy)>25) handleAction(dy>0?"down":"up");
});

updateCamera(); drawWorld(); updateUI();
