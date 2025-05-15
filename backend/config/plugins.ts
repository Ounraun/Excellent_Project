// config/plugins.ts
export default ({ env }) => ({
    // เปิดใช้งานระบบ Internationalization
    i18n: {
      enabled: true,
      config: {
        locales: ['en', 'th'],    // สองภาษาที่ต้องการ
        defaultLocale: 'en',      // ภาษาเริ่มต้น
      },
    },
    
  // ตั้งค่า Email plugin
  email: {
    config: {
      provider: 'nodemailer',          // ชื่อ provider ที่ติดตั้ง
      providerOptions: {
        host: env('SMTP_HOST'),         // อ่านจาก .env
        port: env.int('SMTP_PORT'),     // อ่านจาก .env
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        // secure: true,               // ถ้าใช้ TLS/SSL ก็เปิดบรรทัดนี้
      },
      settings: {
        defaultFrom: env('SMTP_USER'),
        defaultReplyTo: env('SMTP_USER'),
      },
    },
  },
  });