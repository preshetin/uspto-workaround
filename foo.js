var currentDate = new Date();

var paymentDeadline = new Date('2023-12-10'); // Replace this with your desired date.

var distanceInDays = (paymentDeadline - currentDate) / (1000 * 60 * 60 * 24);

distanceInDays = Math.floor(distanceInDays);

if (distanceInDays === 30) {
  console.log('Время отправлять письмо!');
  // Посылаем запрос в SendGrid с текстом письма
} else{
  console.log('Время отправлять письмо еще не настало', distanceInDays)
}
