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
  });