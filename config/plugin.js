module.exports = ({ env }) => ({
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
      "vercel-deploy": {
        enabled: true,
        config: {
          deployHook: env('VERCEL_DEPLOY_PLUGIN_HOOK'),
          apiToken: env('VERCEL_DEPLOY_PLUGIN_API_TOKEN'),
          appFilter: env('VERCEL_DEPLOY_PLUGIN_APP_FILTER'),
          teamFilter: env('VERCEL_DEPLOY_PLUGIN_TEAM_FILTER'),
          roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
      },
      email: {
        config: {
          provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'zizi.artesanatos.es@gmail.com',
            defaultReplyTo: 'zizi.artesanatos.es@gmail.com',
            testAddress: 'zizi.artesanatos.es@gmail.com',
          },
        },
      },
  })