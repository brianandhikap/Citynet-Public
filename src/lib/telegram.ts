import axios from 'axios';

const BOT_TOKEN = '7162194423:AAFRwOsTrD1tooEb9i8Ta8o9mZUoQh4jf0w';
const CHAT_ID = '5347066915';

export const sendToTelegram = async (data: any) => {
  const message = `Hallo ada yang daftar
Nama = ${data.fullName}
No WA = ${data.whatsapp}
Ambil Paket = ${data.package}
Info dari = ${data.source || '-'}
Link Google maps = https://www.google.com/maps?q=${data.location}`;

  try {
    const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message
    });
    
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};