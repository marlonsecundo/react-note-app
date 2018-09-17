import PushNotification from 'react-native-push-notification';
import { Alert } from 'react-native';
import colors from '../styles/colors';

export default class Reminder {

    config = {

        ticker: "Attach Notes",
        autoCancel: false,
        largeIcon: 'ic_launcher',
        smallIcon: 'ic_notification',
        bigText: 'Lembrete',
        color: colors.background,
        vibrate: true,
        vibration: 500,
        tag: 'Lembretes',
        group: 'groud',
        ongoing: false,
        playSound: true,
        soundName: 'default',
        number: 9,
        actions: '["Ahh, Vou Ver!"]',
        subText: 'Attach Notes',

    };

    constructor(onNotif = () => {}) {
        PushNotification.configure({
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            onNotification: onNotif,

            popInitialNotification: true,
            requestPermissions: true,
        });
    }

    getTimeLeft = (time) => {
        let now = new Date(Date.now());
        let reminder = new Date();

        reminder.setHours(time.hour);
        reminder.setMinutes(time.minute);

        let left = reminder.getTime() - now.getTime();

        return left;
    }

    registerNewNoteAlarm = (note) => {

        let timeLeft = this.getTimeLeft(note.time);

        PushNotification.localNotificationSchedule({
            ...this.config,

            id: note.id,
            userInfo: { id: note.id },
            bigText: 'Lembrete!',
            title: 'Se liga naquela Nota lá!',
            message: note.text,
            date: new Date(Date.now() + timeLeft),
        });
    }


    deleteAlarm = (id) => {
        PushNotification.cancelLocalNotifications({ id });
    }


}