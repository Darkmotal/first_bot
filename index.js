process.env.NTBA_FIX_319 = 1;
const TelegramApi = require('node-telegram-bot-api')

const token = '2006238116:AAF6ApKzaGQJsl9Cmd_SiAhFV-d53V_gwSc'

const bot = new TelegramApi(token, {polling:true})

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Текст', callback_data: 'bara'}]
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начало'},
        {command: '/info', description: 'Информация'},

    ])

    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id

        if (text === '/start') {
            return bot.sendMessage(chatId, 'Здарова лох!')
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, 'ебет?', gameOptions)
        }
        return bot.sendMessage(chatId,'че?')
    })
}

start()