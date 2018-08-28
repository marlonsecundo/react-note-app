import PushNotification from 'react-native-push-notification';
import colors from '../styles/colors';

class Reminder {

    constructor() {
        if (!Reminder.instance) {
            Reminder.instance = this;
            PushNotification.configure({
                permissions: {
                    alert: true,
                    badge: true,
                    sound: true
                },

                popInitialNotification: true,
                requestPermissions: true,
            });
        }

        return Reminder.instance;
    }

    getTimeLeft = (time) => {
        let now = new Date(Date.now());
        let reminder = new Date();

        reminder.setHours(time.hour);
        reminder.setMinutes(time.minute);

        let left = reminder.getTime() - now.getTime();

        return left;
    }

    registerNewAlarm = (note) => {

        let timeLeft = this.getTimeLeft(note.time);

        PushNotification.localNotificationSchedule({
            id: note.id,
            userInfo: { id: note.id },
            ticker: "My Notification Ticker",
            autoCancel: false,
            largeIcon: 'ic_launcher',
            smallIcon: 'ic_notification',
            bigText: 'Lembrete',
            subText: 'subText',
            color: colors.background,
            vibrate: true,
            vibration: 500,
            tag: 'Daily Notes',
            group: 'groud',
            ongoing: false,
            title: 'Se liga naquela Nota lá!',
            message: note.text,
            playSound: true,
            soundName: 'default',
            number: 9,
            actions: '["Ahh, Vou Ver!"]',

            date: new Date(Date.now() + timeLeft),
        });
    }

    deleteAlarm = (id) => {
        PushNotification.cancelLocalNotifications({ id });
    }


}

const instance = new Reminder();

Object.freeze(instance);

export default instance;