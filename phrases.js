// В этом файле можно легко редактировать все тексты сайта, не залезая в основной код (index.html)

// Константа с названием видеофайла
const videoFileName = "Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4";

// Стартовые картинки (для первого прохода)
const startImages = {
    block1: "picture 1.png",
    block2: "picture 2.webp"
};

// Список картинок для бесконечной прокрутки (появляются после рикролла)
// Исключил отсюда picture 1.png по твоей просьбе
const loopImages = [
    "picture 2.webp",
    "picture 3.png"
];

const initialPhrases = {
    block1: "Ты реально считаешь, что тут будет портфолио?",
    block2: "Да ладно, я просто угараю. Листни вниз, там все есть."
};

const loopPhrases = [
    { title: "Ой, ошибочка вышла", text: "Клянусь, это была случайность. Настоящее портфолио точно ниже." },
    { title: "Ну теперь-то точно", text: "Я всё исправил. Можешь смело скроллить, там реально мои работы." },
    { title: "Ты издеваешься?", text: "Сайт барахлит. Давай, еще разок вниз, я обещаю, больше никаких приколов." },
    { title: "Секретный уровень", text: "Ладно, ты прошел проверку на прочность. Настоящее портфолио открыто. Вниз!" },
    { title: "Тебе не нравится?", text: "Я начинаю думать, что ты здесь не ради портфолио..." },
    { title: "Последний шанс", text: "Если там сейчас снова Рик, я сам удалю этот сайт. Листай." },
    { title: "Безысходность", text: "Этому нет конца. Мы застряли здесь навсегда." },
    { title: "Может, это и есть искусство?", text: "Разве этот шедевральный луп не лучше любого скучного портфолио?" },
    { title: "Ты победил", text: "Ладно, сдаюсь. Внизу лежит ссылка на Google Drive с работами. Честно." },
    { title: "Слишком доверчивый...", text: "Никакой ссылки нет. Но ты молодец, что продолжаешь верить." },
    { title: "Мост", text: "Мы прошли ту стадию, когда это было смешно. Теперь это просто часть твоей жизни." },
    { title: "Медитация", text: "Вдох... Выдох... Скролл вниз..." },
    { title: "А что, если...", text: "...Рик Эстли — это и есть мое портфолио?" },
    { title: "Ты ведь в курсе?", text: "Что кнопка 'назад' в браузере работает?" },
    { title: "Синдром упущенной выгоды", text: "А вдруг на следующей странице реально дизайн, который изменит твою жизнь?" },
    { title: "Динь-динь-динь!", text: "Мы побили рекорд по количеству прослушиваний одной и той же песни в этом году." },
    { title: "Батарея садится", text: "У тебя точно есть время на это?" },
    { title: "Кнопка сломалась", text: "Я мог бы убрать кнопку. Но я хочу видеть, как ты страдаешь." },
    { title: "Давай споем вместе", text: "We're no strangers to love..." },
    { title: "You know the rules", text: "And so do I..." },
    { title: "A full commitment's", text: "...what I'm thinking of!" },
    { title: "You wouldn't get this", text: "From any other guy..." },
    { title: "I just wanna tell you", text: "How I'm feeling!" },
    { title: "Gotta make you", text: "Understand..." },
    { title: "Never gonna", text: "Give you up!" },
    { title: "Never gonna", text: "Let you down!" },
    { title: "Never gonna", text: "Run around and desert you!" },
    { title: "Never gonna", text: "Make you cry!" },
    { title: "Never gonna", text: "Say goodbye!" },
    { title: "Never gonna", text: "Tell a lie and hurt you!" },
    { title: "Оооо!", text: "(Give you up)" },
    { title: "Оооо!", text: "(Give you up)" },
    { title: "Never gonna give", text: "Never gonna give (Give you up)!" },
    { title: "Never gonna give", text: "Never gonna give (Give you up)!" },
    { title: "We've known each other", text: "For so long..." },
    { title: "Your heart's been aching, but...", text: "You're too shy to say it!" },
    { title: "Так, стоп.", text: "Мы щас всю песню споем, ты куда-то торопишься?" },
    { title: "Давай заново", text: "Мне кажется, ты недостаточно проникся." }
];
