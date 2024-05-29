import PushNotification from 'react-native-push-notification';

class NotificationService {
  constructor() {
    // Configuração inicial para o serviço de notificação
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
      requestPermissions: Platform.OS === 'ios', 
    });
  }

  // Método para criar um canal de notificação
  createChannel() {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id', // ID do canal
        channelName: 'Default Channel', // Nome do canal
        channelDescription: 'A default channel', // Descrição do canal
        soundName: 'default', // Som padrão para notificações
        importance: 4, // Nível de importância do canal
        vibrate: true, // Habilitar vibração
      },
      (created) => console.log(`createChannel returned '${created}'`) 
    );
  }

  // Método para agendar uma notificação
  scheduleNotification(date, message) {
    PushNotification.localNotificationSchedule({
      channelId: 'default-channel-id', // Canal ao qual esta notificação pertence
      message: message, // Mensagem da notificação
      date: date, // Data para agendar a notificação
      repeatType: "minute",
      repeatTime: 1
    });
  }
}

export default new NotificationService();
