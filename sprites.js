// ============================================
//  SPRITES.JS — Графические ресурсы игры
//  Все спрайты рисуются программно (без PNG)
// ============================================

const SPRITES = {};

// ========== ТАЙЛЫ (32x32) ==========
SPRITES.tiles = {};

// Трава
SPRITES.tiles.grass = function(ctx, x, y) {
    // База
    ctx.fillStyle = "#7ec850";
    ctx.fillRect(x, y, 32, 32);
    
    // Узор травы
    ctx.fillStyle = "#6ab840";
    ctx.fillRect(x+2, y+20, 3, 8);
    ctx.fillRect(x+8, y+24, 2, 6);
    ctx.fillRect(x+14, y+18, 3, 10);
    ctx.fillRect(x+20, y+22, 2, 7);
    ctx.fillRect(x+26, y+19, 3, 9);
    
    // Светлые пятна
    ctx.fillStyle = "#8ed860";
    ctx.fillRect(x+4, y+4, 4, 3);
    ctx.fillRect(x+18, y+8, 3, 2);
    ctx.fillRect(x+28, y+2, 3, 3);
    
    // Цветок
    ctx.fillStyle = "#ff0";
    ctx.fillRect(x+12, y+10, 2, 2);
    ctx.fillRect(x+10, y+12, 2, 2);
    ctx.fillRect(x+14, y+12, 2, 2);
    ctx.fillRect(x+12, y+14, 2, 2);
    ctx.fillStyle = "#fa0";
    ctx.fillRect(x+11, y+11, 1, 1);
    ctx.fillRect(x+13, y+13, 1, 1);
    
    // Травинки
    ctx.fillStyle = "#5a9e30";
    ctx.fillRect(x+3, y+28, 1, 4);
    ctx.fillRect(x+7, y+26, 1, 6);
    ctx.fillRect(x+15, y+25, 1, 7);
    ctx.fillRect(x+21, y+27, 1, 5);
    ctx.fillRect(x+29, y+28, 1, 4);
};

// Земля/тропа
SPRITES.tiles.dirt = function(ctx, x, y) {
    ctx.fillStyle = "#c8a050";
    ctx.fillRect(x, y, 32, 32);
    
    ctx.fillStyle = "#b89040";
    ctx.fillRect(x+4, y+6, 5, 4);
    ctx.fillRect(x+15, y+12, 6, 3);
    ctx.fillRect(x+24, y+20, 4, 5);
    
    ctx.fillStyle = "#a07830";
    ctx.fillRect(x+8, y+22, 3, 2);
    ctx.fillRect(x+20, y+4, 2, 3);
    ctx.fillRect(x+2, y+14, 4, 2);
    
    // Камешки
    ctx.fillStyle = "#909090";
    ctx.fillRect(x+10, y+16, 3, 2);
    ctx.fillRect(x+26, y+10, 2, 2);
    ctx.fillRect(x+6, y+26, 2, 1);
};

// Камень
SPRITES.tiles.stone = function(ctx, x, y) {
    ctx.fillStyle = "#909090";
    ctx.fillRect(x, y, 32, 32);
    
    ctx.fillStyle = "#808080";
    ctx.fillRect(x+2, y+2, 28, 28);
    
    // Трещины
    ctx.fillStyle = "#707070";
    ctx.fillRect(x+5, y+8, 8, 1);
    ctx.fillRect(x+14, y+8, 10, 1);
    ctx.fillRect(x+18, y+15, 1, 8);
    ctx.fillRect(x+10, y+22, 12, 1);
    
    // Свет
    ctx.fillStyle = "#a0a0a0";
    ctx.fillRect(x+3, y+3, 4, 4);
    ctx.fillRect(x+25, y+4, 3, 3);
};

// Вода
SPRITES.tiles.water = function(ctx, x, y) {
    ctx.fillStyle = "#3878c0";
    ctx.fillRect(x, y, 32, 32);
    
    ctx.fillStyle = "#3068b0";
    ctx.fillRect(x, y+10, 32, 12);
    
    // Волны
    ctx.fillStyle = "#4898d8";
    ctx.beginPath();
    ctx.arc(x+6, y+14, 5, 0, Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+16, y+16, 4, 0, Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+26, y+13, 5, 0, Math.PI);
    ctx.fill();
    
    // Блики
    ctx.fillStyle = "#a0d8ff";
    ctx.fillRect(x+10, y+4, 3, 2);
    ctx.fillRect(x+22, y+20, 2, 1);
    ctx.fillRect(x+4, y+24, 2, 2);
};

// Лес
SPRITES.tiles.forest = function(ctx, x, y) {
    ctx.fillStyle = "#3a6820";
    ctx.fillRect(x, y, 32, 32);
    
    // Деревья
    ctx.fillStyle = "#2e5818";
    ctx.beginPath();
    ctx.arc(x+8, y+12, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+22, y+10, 9, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+15, y+20, 11, 0, Math.PI*2);
    ctx.fill();
    
    // Стволы
    ctx.fillStyle = "#5a3a1a";
    ctx.fillRect(x+6, y+18, 4, 8);
    ctx.fillRect(x+20, y+16, 4, 8);
    
    // Свет
    ctx.fillStyle = "#4a7830";
    ctx.fillRect(x+2, y+2, 5, 4);
};

// Горы
SPRITES.tiles.mountain = function(ctx, x, y) {
    ctx.fillStyle = "#686868";
    ctx.fillRect(x, y, 32, 32);
    
    // Гора
    ctx.fillStyle = "#787878";
    ctx.beginPath();
    ctx.moveTo(x+2, y+30);
    ctx.lineTo(x+16, y+2);
    ctx.lineTo(x+30, y+30);
    ctx.fill();
    
    // Тень
    ctx.fillStyle = "#585858";
    ctx.beginPath();
    ctx.moveTo(x+16, y+2);
    ctx.lineTo(x+30, y+30);
    ctx.lineTo(x+22, y+30);
    ctx.fill();
    
    // Снег
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(x+16, y+6, 5, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#e8e8e8";
    ctx.beginPath();
    ctx.arc(x+13, y+8, 3, 0, Math.PI*2);
    ctx.fill();
};

// Песок
SPRITES.tiles.sand = function(ctx, x, y) {
    ctx.fillStyle = "#e8d890";
    ctx.fillRect(x, y, 32, 32);
    
    ctx.fillStyle = "#d8c880";
    ctx.fillRect(x+5, y+5, 6, 4);
    ctx.fillRect(x+18, y+12, 4, 5);
    ctx.fillRect(x+10, y+22, 5, 3);
    
    ctx.fillStyle = "#c8b870";
    ctx.fillRect(x+2, y+16, 3, 2);
    ctx.fillRect(x+24, y+6, 2, 3);
};

// Болото
SPRITES.tiles.swamp = function(ctx, x, y) {
    ctx.fillStyle = "#4a6830";
    ctx.fillRect(x, y, 32, 32);
    
    ctx.fillStyle = "#3e5828";
    ctx.fillRect(x+4, y+4, 24, 24);
    
    // Пузыри
    ctx.fillStyle = "#5a7840";
    ctx.beginPath();
    ctx.arc(x+8, y+14, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+20, y+20, 3, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+14, y+8, 3, 0, Math.PI*2);
    ctx.fill();
};

// ========== ГЕРОЙ (32x32, 4 кадра анимации) ==========
SPRITES.hero = [];

// Кадр 0 — стоит
SPRITES.hero[0] = function(ctx, x, y) {
    let cx = x + 16, cy = y + 20;
    
    // Тень
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+6, 10, 3, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Ноги
    ctx.fillStyle = "#555";
    ctx.fillRect(cx-6, cy-2, 5, 8);
    ctx.fillRect(cx+1, cy-2, 5, 8);
    
    // Сапоги
    ctx.fillStyle = "#333";
    ctx.fillRect(cx-7, cy+4, 7, 3);
    ctx.fillRect(cx+0, cy+4, 7, 3);
    
    // Тело
    ctx.fillStyle = "#3355cc";
    ctx.beginPath();
    ctx.arc(cx, cy-8, 10, 0, Math.PI*2);
    ctx.fill();
    
    // Кольчуга
    ctx.fillStyle = "#8899aa";
    ctx.fillRect(cx-7, cy-9, 14, 12);
    ctx.fillStyle = "#99aabb";
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(cx-6, cy-8+i*3, 12, 1);
    }
    
    // Руки
    ctx.fillStyle = "#3355cc";
    ctx.fillRect(cx-12, cy-6, 5, 8);
    ctx.fillRect(cx+7, cy-6, 5, 8);
    
    // Щит
    ctx.fillStyle = "#cc8833";
    ctx.beginPath();
    ctx.arc(cx-12, cy-4, 7, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#ffd700";
    ctx.beginPath();
    ctx.arc(cx-12, cy-4, 3, 0, Math.PI*2);
    ctx.fill();
    
    // Меч
    ctx.fillStyle = "#ddd";
    ctx.fillRect(cx+11, cy-12, 2, 14);
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(cx+9, cy-14, 6, 3);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(cx+10, cy-16, 4, 5);
    
    // Шлем
    ctx.fillStyle = "#667788";
    ctx.beginPath();
    ctx.arc(cx, cy-16, 9, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(cx-8, cy-16, 16, 4);
    
    // Забрало
    ctx.fillStyle = "#334";
    ctx.fillRect(cx-4, cy-13, 8, 3);
    
    // Плюмаж
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.moveTo(cx, cy-22);
    ctx.lineTo(cx+7, cy-28);
    ctx.lineTo(cx+4, cy-20);
    ctx.fill();
    ctx.fillStyle = "#ff3333";
    ctx.beginPath();
    ctx.moveTo(cx, cy-22);
    ctx.lineTo(cx+5, cy-26);
    ctx.lineTo(cx+2, cy-20);
    ctx.fill();
    
    // Глаза
    ctx.fillStyle = "#fff";
    ctx.fillRect(cx-5, cy-14, 4, 3);
    ctx.fillRect(cx+1, cy-14, 4, 3);
};

// Кадр 1 — шаг левой
SPRITES.hero[1] = function(ctx, x, y) {
    SPRITES.hero[0](ctx, x, y);
    let cx = x + 16, cy = y + 20;
    
    // Поднятая левая нога
    ctx.fillStyle = "#555";
    ctx.fillRect(cx-8, cy-6, 5, 8);
    ctx.fillStyle = "#333";
    ctx.fillRect(cx-9, cy-8, 7, 3);
};

// Кадр 2 — стоит (копия 0)
SPRITES.hero[2] = SPRITES.hero[0];

// Кадр 3 — шаг правой
SPRITES.hero[3] = function(ctx, x, y) {
    SPRITES.hero[0](ctx, x, y);
    let cx = x + 16, cy = y + 20;
    
    // Поднятая правая нога
    ctx.fillStyle = "#555";
    ctx.fillRect(cx+3, cy-6, 5, 8);
    ctx.fillStyle = "#333";
    ctx.fillRect(cx+2, cy-8, 7, 3);
};

// ========== ВРАГИ (32x32) ==========
SPRITES.enemies = {};

// Гоблин
SPRITES.enemies.goblin = function(ctx, x, y, hpPct) {
    let cx = x + 16, cy = y + 18;
    
    // Тень
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+8, 9, 3, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Тело
    ctx.fillStyle = "#6b8e23";
    ctx.beginPath();
    ctx.arc(cx, cy-4, 10, 0, Math.PI*2);
    ctx.fill();
    
    // Живот
    ctx.fillStyle = "#8fbc3a";
    ctx.beginPath();
    ctx.arc(cx, cy-2, 7, 0, Math.PI*2);
    ctx.fill();
    
    // Ноги
    ctx.fillStyle = "#556b1a";
    ctx.fillRect(cx-7, cy+2, 5, 6);
    ctx.fillRect(cx+2, cy+2, 5, 6);
    
    // Уши
    ctx.fillStyle = "#6b8e23";
    ctx.beginPath();
    ctx.arc(cx-8, cy-10, 5, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+8, cy-10, 5, 0, Math.PI*2);
    ctx.fill();
    
    // Глаза
    ctx.fillStyle = "#ff0";
    ctx.beginPath();
    ctx.arc(cx-4, cy-7, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+4, cy-7, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(cx-3, cy-7, 2, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+3, cy-7, 2, 0, Math.PI*2);
    ctx.fill();
    
    // Рот
    ctx.fillStyle = "#c00";
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI);
    ctx.fill();
    
    // HP бар
    if (hpPct !== undefined) drawHPBar(ctx, cx, cy-18, hpPct);
};

// Скелет
SPRITES.enemies.skeleton = function(ctx, x, y, hpPct) {
    let cx = x + 16, cy = y + 16;
    
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+10, 8, 3, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Тело
    ctx.fillStyle = "#ddd";
    ctx.beginPath();
    ctx.arc(cx, cy-4, 10, 0, Math.PI*2);
    ctx.fill();
    
    // Рёбра
    ctx.strokeStyle = "#bbb";
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy-4+i*1.5, 8-i, -0.5, 0.5);
        ctx.stroke();
    }
    
    // Глаза
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(cx-4, cy-7, 3, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+4, cy-7, 3, 0, Math.PI*2);
    ctx.fill();
    
    // Руки-кости
    ctx.fillStyle = "#ddd";
    ctx.fillRect(cx-13, cy-6, 4, 2);
    ctx.fillRect(cx+9, cy-6, 4, 2);
    ctx.fillRect(cx-13, cy-4, 2, 6);
    ctx.fillRect(cx+11, cy-4, 2, 6);
    
    // Ноги-кости
    ctx.fillRect(cx-5, cy+4, 3, 8);
    ctx.fillRect(cx+2, cy+4, 3, 8);
    
    if (hpPct !== undefined) drawHPBar(ctx, cx, cy-18, hpPct);
};

// Орк
SPRITES.enemies.orc = function(ctx, x, y, hpPct) {
    let cx = x + 16, cy = y + 16;
    
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+12, 12, 4, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Тело
    ctx.fillStyle = "#8b4513";
    ctx.beginPath();
    ctx.arc(cx, cy-4, 13, 0, Math.PI*2);
    ctx.fill();
    
    // Мышцы
    ctx.fillStyle = "#6b3410";
    ctx.fillRect(cx-10, cy-8, 8, 10);
    ctx.fillRect(cx+2, cy-8, 8, 10);
    
    // Голова
    ctx.fillStyle = "#8b4513";
    ctx.beginPath();
    ctx.arc(cx, cy-14, 8, 0, Math.PI*2);
    ctx.fill();
    
    // Челюсть
    ctx.fillStyle = "#6b3410";
    ctx.fillRect(cx-6, cy-8, 12, 4);
    
    // Клыки
    ctx.fillStyle = "#fff";
    ctx.fillRect(cx-3, cy-6, 2, 3);
    ctx.fillRect(cx+1, cy-6, 2, 3);
    
    // Глаза
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(cx-3, cy-16, 3, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+3, cy-16, 3, 0, Math.PI*2);
    ctx.fill();
    
    // Топор
    ctx.fillStyle = "#888";
    ctx.fillRect(cx+12, cy-10, 3, 12);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(cx+9, cy-12, 9, 5);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(cx+10, cy-14, 7, 3);
    
    if (hpPct !== undefined) drawHPBar(ctx, cx, cy-24, hpPct);
};

// Слизень
SPRITES.enemies.slime = function(ctx, x, y, hpPct) {
    let cx = x + 16, cy = y + 18;
    
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+6, 12, 4, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Тело (капля)
    ctx.fillStyle = "#0a0";
    ctx.beginPath();
    ctx.arc(cx, cy-4, 12, 0, Math.PI*2);
    ctx.fill();
    ctx.fillRect(cx-12, cy-4, 24, 10);
    ctx.beginPath();
    ctx.arc(cx, cy+4, 11, 0, Math.PI);
    ctx.fill();
    
    // Блик
    ctx.fillStyle = "#0f0";
    ctx.beginPath();
    ctx.arc(cx-4, cy-6, 5, 0, Math.PI*2);
    ctx.fill();
    
    // Глаза
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx-5, cy-5, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+5, cy-5, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(cx-4, cy-5, 2, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+4, cy-5, 2, 0, Math.PI*2);
    ctx.fill();
    
    if (hpPct !== undefined) drawHPBar(ctx, cx, cy-18, hpPct);
};

// Бандит
SPRITES.enemies.bandit = function(ctx, x, y, hpPct) {
    let cx = x + 16, cy = y + 16;
    
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.ellipse(cx, cy+10, 9, 3, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Тело
    ctx.fillStyle = "#654321";
    ctx.beginPath();
    ctx.arc(cx, cy-4, 10, 0, Math.PI*2);
    ctx.fill();
    
    // Одежда
    ctx.fillStyle = "#333";
    ctx.fillRect(cx-7, cy-9, 14, 14);
    
    // Капюшон
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(cx, cy-12, 9, Math.PI, 0);
    ctx.fill();
    
    // Глаза (только красные точки из-под капюшона)
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.arc(cx-3, cy-9, 2, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx+3, cy-9, 2, 0, Math.PI*2);
    ctx.fill();
    
    // Кинжалы
    ctx.fillStyle = "#ccc";
    ctx.fillRect(cx-13, cy-8, 2, 10);
    ctx.fillRect(cx+11, cy-8, 2, 10);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(cx-14, cy-10, 4, 3);
    ctx.fillRect(cx+10, cy-10, 4, 3);
    
    if (hpPct !== undefined) drawHPBar(ctx, cx, cy-22, hpPct);
};

// ========== ОБЪЕКТЫ ==========
SPRITES.objects = {};

// Замок
SPRITES.objects.castle = function(ctx, x, y) {
    let cx = x + 16, cy = y + 12;
    
    // Стены
    ctx.fillStyle = "#8a7a5a";
    ctx.fillRect(cx-16, cy-2, 32, 20);
    ctx.fillStyle = "#9a8a6a";
    ctx.fillRect(cx-16, cy-4, 32, 4);
    
    // Башни
    ctx.fillStyle = "#9a8a6a";
    ctx.fillRect(cx-16, cy-14, 12, 18);
    ctx.fillRect(cx+4, cy-14, 12, 18);
    
    // Крыши
    ctx.fillStyle = "#c44";
    ctx.beginPath();
    ctx.moveTo(cx-17, cy-14);
    ctx.lineTo(cx-10, cy-24);
    ctx.lineTo(cx-3, cy-14);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx+3, cy-14);
    ctx.lineTo(cx+10, cy-24);
    ctx.lineTo(cx+17, cy-14);
    ctx.fill();
    
    // Флаги
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(cx-10, cy-26, 2, 12);
    ctx.fillRect(cx-8, cy-26, 8, 4);
    ctx.fillRect(cx+10, cy-26, 2, 12);
    ctx.fillRect(cx+12, cy-26, 8, 4);
    
    // Ворота
    ctx.fillStyle = "#3a2a0a";
    ctx.fillRect(cx-5, cy+4, 10, 14);
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 2;
    ctx.strokeRect(cx-5, cy+4, 10, 14);
};

// Сокровище
SPRITES.objects.treasure = function(ctx, x, y) {
    let cx = x + 16, cy = y + 16;
    
    // Свечение
    let glow = ctx.createRadialGradient(cx, cy, 2, cx, cy, 14);
    glow.addColorStop(0, "rgba(255,215,0,0.6)");
    glow.addColorStop(1, "rgba(255,215,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI*2);
    ctx.fill();
    
    // Мешочек
    ctx.fillStyle = "#b8860b";
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#ffd700";
    ctx.beginPath();
    ctx.arc(cx, cy-2, 6, Math.PI, 0);
    ctx.fill();
    
    // Завязка
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(cx-4, cy-10, 8, 3);
    
    // Блик
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx-2, cy-3, 2.5, 0, Math.PI*2);
    ctx.fill();
};

// Зелье
SPRITES.objects.potion = function(ctx, x, y) {
    let cx = x + 16, cy = y + 14;
    
    // Бутылка
    ctx.fillStyle = "#0a0";
    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI*2);
    ctx.fill();
    
    // Жидкость
    ctx.fillStyle = "#0f0";
    ctx.beginPath();
    ctx.arc(cx-1, cy-1, 4, 0, Math.PI*2);
    ctx.fill();
    
    // Горлышко
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(cx-3, cy-12, 6, 5);
    ctx.fillRect(cx-5, cy-10, 10, 3);
    
    // Блик
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx-2, cy-3, 1.5, 0, Math.PI*2);
    ctx.fill();
};

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function drawHPBar(ctx, cx, cy, pct) {
    ctx.fillStyle = "#000";
    ctx.fillRect(cx-12, cy, 24, 4);
    ctx.strokeStyle = "#555";
    ctx.strokeRect(cx-12, cy, 24, 4);
    ctx.fillStyle = pct > 0.5 ? "#0a0" : pct > 0.25 ? "#fa0" : "#f00";
    ctx.fillRect(cx-11, cy+1, 22*pct, 2);
}

// Экспорт
if (typeof module !== "undefined") module.exports = SPRITES;
