const cron = require('node-cron-tz')
const { bsToAd } = require('@sbmdkl/nepali-date-converter')

class NepaliScheduler {

    scheduleNepaliDateJob(nepaliDate, time, task) {
        try {
            const englishDate = bsToAd(nepaliDate);
            const [year, month, day] = englishDate.split('-');
            const [hours, minutes] = time.split(':');

            const timezone = 'Asia/Kathmandu';

            const cronExpression = `${minutes} ${hours} ${day} ${month} * ${year}`;

            cron.schedule(cronExpression, task, { timezone });
        }

        catch (error) {
            console.log(error)
        }
    }
}

module.exports = NepaliScheduler