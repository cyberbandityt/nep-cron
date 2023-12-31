# Nep-Cron

Nep-cron is an npm package that allows you to schedule tasks based on Nepali dates and times, while also considering the Nepal time zone (Asia/Kathmandu). It includes a Nepali date to English date conversion feature for scheduling tasks using the popular "node-cron-tz" library.

## Features

- Schedule jobs based on Nepali dates and times in the Asia/Kathmandu time zone.

## Installation

You can install the Nepali Date Scheduler package using npm:

```bash
npm install nep-cron
```

## Usage
Here's an example of how to use the Nepali Date Scheduler in your Node.js application:

```javascript
const { NepaliScheduler } = require('nep-cron');

const scheduler = new NepaliScheduler();

scheduler.scheduleNepaliDateJob('2079-07-15', '14:30', () => {
  console.log('Job is scheduled according to Nepali date and time in Nepal time zone.');
});

```
This code schedules a job for the Nepali date '2079-07-15' at 14:30 in the Asia/Kathmandu time zone.

`Note: Make sure the date is in YYYY-MM-DD Format.`

## Dependencies
This package relies on 2 packages:
- [node-cron-tz](https://www.npmjs.com/package/node-cron-tz) for scheduling job.
- [nepali-date-converter](https://www.npmjs.com/package/@sbmdkl/nepali-date-converter) for converting date.

## Contributing
Contributions to the Nep-cron are welcome! If you would like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and write tests if applicable.
4. Ensure all tests pass.
5. Create a pull request to the main repository.

## License
This package is distributed under the [ISC License](https://github.com/cyberbandityt/nep-cron/blob/main/License.txt). Feel free to use and modify it as needed.

## Contact
If you have any questions, issues, or suggestions, you can contact us at whois@poudel-aayush.com.np

----------------------------------
Happy scheduling in Nepali dates and times!