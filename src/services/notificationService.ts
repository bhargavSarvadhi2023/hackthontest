import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // Configure your email service
});

export const sendNotification = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({ to, subject, text });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};