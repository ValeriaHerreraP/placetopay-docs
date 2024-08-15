import { LANGUAGES_CODES } from '@/components/LocaleProvider'
import { Book, DocumentCode } from 'iconsax-react'

export const TAB_NAVIGATION = {
  checkout: {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'checkout',
        href: '/checkout',
        icon: Book,
        links: [
          {
            title: 'Checkout',
            links: [
              { title: 'Introducción', href: '/checkout' },
              { title: 'Cómo Funciona', href: '/checkout/how-checkout-works' },
              { title: 'Plugins', href: '/checkout/plugins' },
              { title: 'Lightbox', href: '/checkout/lightbox' },
            ],
          },
          {
            title: 'Integración',
            links: [
              { title: 'Autenticación', href: '/checkout/authentication' },
              { title: 'Crear Sesión', href: '/checkout/create-session' },
              { title: 'Notificación', href: '/checkout/notification' },
              { title: 'Localización', href: '/checkout/localization' },
              { title: 'Tipos de documento', href: '/checkout/document-types' },
              {
                title: 'Campos Adicionales',
                href: '/checkout/additional-fields',
              },
              { title: 'Montos y Monedas', href: '/checkout/tax-details' },
              { title: 'Métodos de pago', href: '/checkout/payment-methods' },
              {
                title: 'Como integrar con móvil',
                href: '/checkout/integration/mobile',
              },
              {
                title: 'Prueba tu integración',
                href: '/checkout/test-your-integration',
              },
              { title: 'Reembolsos', href: '/checkout/refund' },
              {
                title: 'Campos de procesamiento',
                href: '/checkout/processor-fields',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'checkout/api',
        href: '/checkout/api/reference/session',
        icon: DocumentCode,
        links: [
          {
            title: 'Introducción',
            links: [
              { title: 'Politica de cambios', href: '/checkout/api/policy' },
              {
                title: 'Historial de cambios',
                href: '/checkout/api/changelog',
              },
            ],
          },
          {
            title: 'API',
            links: [
              { title: 'Sesión', href: '/checkout/api/reference/session' },
              { title: 'Pagos', href: '/checkout/api/reference/payment' },
              { title: 'Token', href: '/checkout/api/reference/token' },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'checkout',
        href: '/en/checkout',
        icon: Book,
        links: [
          {
            title: 'Checkout',
            links: [
              { title: 'Introduction', href: '/checkout' },
              { title: 'How it works', href: '/checkout/how-checkout-works' },
              { title: 'Plugins', href: '/checkout/plugins' },
              { title: 'Lightbox', href: '/checkout/lightbox' },
            ],
          },
          {
            title: 'Integration',
            links: [
              { title: 'Authentication', href: '/checkout/authentication' },
              { title: 'Create Session', href: '/checkout/create-session' },
              { title: 'Notification', href: '/checkout/notification' },
              { title: 'Localization', href: '/checkout/localization' },
              { title: 'Document Types', href: '/checkout/document-types' },
              {
                title: 'Additional Fields',
                href: '/checkout/additional-fields',
              },
              {
                title: 'Amounts and Currencies',
                href: '/checkout/tax-details',
              },
              { title: 'Payment Methods', href: '/checkout/payment-methods' },
              {
                title: 'How to integrate with mobile',
                href: '/checkout/integration/mobile',
              },
              {
                title: 'Test your integration',
                href: '/checkout/test-your-integration',
              },
              { title: 'Refund', href: '/checkout/refund' },
              {
                title: 'Processor Fields',
                href: '/checkout/processor-fields',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'checkout/api',
        href: '/en/checkout/api/reference/session',
        icon: DocumentCode,
        links: [
          {
            title: 'Introduction',
            links: [
              { title: 'API Policy', href: '/checkout/api/policy' },
              { title: 'Changelog', href: '/checkout/api/changelog' },
            ],
          },
          {
            title: 'API',
            links: [
              { title: 'Session', href: '/checkout/api/reference/session' },
              { title: 'Payments', href: '/checkout/api/reference/payment' },
              { title: 'Token', href: '/checkout/api/reference/token' },
            ],
          },
        ],
      },
    ],
  },
  gateway: {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'gateway',
        href: '/gateway',
        icon: Book,
        links: [
          {
            title: 'Gateway',
            links: [
              { title: 'Introducción', href: '/gateway' },
              {
                title: 'Flujo de una transacción',
                href: '/gateway/transaction-flow',
              },
              { title: 'Obligaciones', href: '/gateway/obligations' },
            ],
          },
          {
            title: 'Integración',
            links: [
              { title: 'Autenticación', href: '/gateway/authentication' },
              {
                title: 'Números de tarjetas de pruebas',
                href: '/gateway/testing-card',
              },
              { title: 'Código de aerolíneas', href: '/gateway/airline-codes' },
              { title: 'Tipos de documentos', href: '/gateway/document-types' },
              {
                title: 'Tipos de transacciones',
                href: '/gateway/transaction-types',
              },
              {
                title: 'Control de idempotencia',
                href: '/gateway/idempotency',
              },
              {
                title: 'Importación ordenes de pago',
                href: '/gateway/import-payment-orders',
              },
              {
                title: 'Procesamiento con cuentas bancarias',
                href: '/gateway/processing-with-bank-accounts',
              },
              {
                title: 'Notificación',
                href: '/gateway/notification',
              },
              {
                title: 'Datos adicionales',
                href: '/gateway/additional-data',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'gateway/api',
        href: '/gateway/api/reference/information',
        icon: DocumentCode,
        links: [
          {
            title: 'Introducción',
            links: [
              { title: 'Politica de cambios', href: '/gateway/api/policy' },
            ],
          },
          {
            title: 'API',
            links: [
              {
                title: 'Obtener información',
                href: '/gateway/api/reference/information',
              },
              {
                title: 'Transacciones',
                href: '/gateway/api/reference/transaction',
              },
              {
                title: 'Tokenización de tarjetas',
                href: '/gateway/api/reference/tokenize',
              },
              { title: 'Proceso 3DS', href: '/gateway/api/reference/3ds' },
              { title: 'Proceso OTP', href: '/gateway/api/reference/otp' },
              {
                title: 'Operaciones con PinPad',
                href: '/gateway/api/reference/pinpad',
              },
              {
                title: 'Reporte de operaciones realizadas',
                href: '/gateway/api/reference/report',
              },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'gateway',
        href: '/en/gateway',
        icon: Book,
        links: [
          {
            title: 'Gateway',
            links: [
              { title: 'Introduction', href: '/gateway' },
              { title: 'Transaction flow', href: '/gateway/transaction-flow' },
              { title: 'Obligations', href: '/gateway/obligations' },
            ],
          },
          {
            title: 'Integration',
            links: [
              { title: 'Authentication', href: '/gateway/authentication' },
              { title: 'Test card numbers', href: '/gateway/testing-card' },
              { title: 'Airline codes', href: '/gateway/airline-codes' },
              { title: 'Document types', href: '/gateway/document-types' },
              {
                title: 'Transaction types',
                href: '/gateway/transaction-types',
              },
              { title: 'Idempotency control', href: '/gateway/idempotency' },
              {
                title: 'Import payment orders',
                href: '/gateway/import-payment-orders',
              },
              {
                title: 'Processing with bank accounts',
                href: '/gateway/processing-with-bank-accounts',
              },
              {
                title: 'Notification',
                href: '/gateway/notification',
              },
              {
                title: 'Additional data',
                href: '/gateway/additional-data',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'gateway/api',
        href: '/en/gateway/api/reference/information',
        icon: DocumentCode,
        links: [
          {
            title: 'Introduction',
            links: [{ title: 'API Policy', href: '/gateway/api/policy' }],
          },
          {
            title: 'API',
            links: [
              {
                title: 'Get information',
                href: '/gateway/api/reference/information',
              },
              {
                title: 'Transactions',
                href: '/gateway/api/reference/transaction',
              },
              {
                title: 'Card tokenization',
                href: '/gateway/api/reference/tokenize',
              },
              { title: '3DS process', href: '/gateway/api/reference/3ds' },
              { title: 'OTP process', href: '/gateway/api/reference/otp' },
              {
                title: 'PinPad Operations',
                href: '/gateway/api/reference/pinpad',
              },
              {
                title: 'Report of operations carried out',
                href: '/gateway/api/reference/report',
              },
            ],
          },
        ],
      },
    ],
  },
  'three-d-s-server': {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'three-d-s-server',
        href: '/three-d-s-server',
        icon: Book,
        links: [
          {
            title: '3DS Server',
            links: [
              { title: 'Introducción', href: '/three-d-s-server' },
              {
                title: '¿Qué es el Protocolo 3-D Secure?',
                href: '/three-d-s-server/introduction',
              },
              {
                title: 'Dominios y Componentes',
                href: '/three-d-s-server/secure-protocol',
              },
              {
                title: 'Acerca del componente 3DS Server',
                href: '/three-d-s-server/server-component',
              },
              {
                title: 'Códigos de Error',
                href: '/three-d-s-server/error-codes',
              },
              {
                title:
                  'Preguntas frecuentes sobre el funcionamiento 3DS Server',
                href: '/three-d-s-server/faq',
              },
              {
                title: 'Códigos HTTP en el proceso de autenticación',
                href: '/three-d-s-server/http-codes',
              },
              {
                title: 'Flujo del servicio de 3DS Server',
                href: '/three-d-s-server/service-flow',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'three-d-s-server/api',
        href: '/three-d-s-server/api',
        icon: DocumentCode,
        links: [
          {
            title: 'Introducción',
            links: [
              {
                title: 'Inicio',
                href: '/three-d-s-server/api'
              },
              {
                title: 'Requerimientos para el cliente que va a integrarse',
                href: '/three-d-s-server/api/client-requirements',
              },
              {
                title: 'Términos y Definiciones',
                href: '/three-d-s-server/api/terms-and-definitions',
              },
              {
                title: 'Datos del proceso de autenticación',
                href: '/three-d-s-server/api/transaction-status',
              },
            ],
          },

          {
            title: 'Integración',
            links: [
              {
                title: 'Autorización',
                href: '/three-d-s-server/api/integration/authorization',
              },
              {
                title: 'Sesión',
                href: '/three-d-s-server/api/integration/session',
              },
              {
                title: 'Obtener información de una autenticación',
                href: '/three-d-s-server/api/integration/authentication-info',
              },
              {
                title: 'Tarjetas de Prueba',
                href: '/three-d-s-server/api/integration/test-cards',
              },
            ],
          },
          {
            title: 'Sesiones',
            links: [
              {
                title: 'Reglas',
                href: '/three-d-s-server/api/sessions/rules',
              },
              {
                title: 'API de sesiones',
                href: '/three-d-s-server/api/sessions',
              },
              {
                title: 'Detalle de los campos del api',
                href: '/three-d-s-server/api/sessions/detail-info',
              },
            ],
          },
          {
            title: 'Transacciones',
            links: [
              {
                title: 'API Detalle de una transacción',
                href: '/three-d-s-server/api/transactions',
              },
            ],
          },
          {
            title: 'Comercios',
            links: [
              {
                title: 'API Comercios',
                href: '/three-d-s-server/api/merchants/create',
              },
              {
                title: 'API Sucursales',
                href: '/three-d-s-server/api/merchants/branch',
              },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'three-d-s-server',
        href: '/en/three-d-s-server',
        icon: 'Book',
        links: [
          {
            title: '3DS',
            links: [
              { title: 'Introduction', href: '/three-d-s-server' },
              {
                title: 'What is the 3-D Secure Protocol?',
                href: '/three-d-s-server/introduction',
              },
              {
                title: 'Domains and Components',
                href: '/three-d-s-server/secure-protocol',
              },
              {
                title: 'About the 3DS Server Component',
                href: '/three-d-s-server/server-component',
              },
              { title: 'Error Codes', href: '/three-d-s-server/error-codes' },
              {
                title: 'Frequently Asked Questions about MPI Functioning',
                href: '/three-d-s-server/faq',
              },
              {
                title: 'HTTP Codes in the Authentication Process',
                href: '/three-d-s-server/http-Codes',
              },
              {
                title: '3DS Server Service Flow',
                href: '/three-d-s-server/service-flow',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'three-d-s-server/api',
        href: '/en/three-d-s-server/api/',
        icon: DocumentCode,
        links: [
          {
            title: 'Introduction',
            links: [
              {
                title: 'Home',
                href: '/three-d-s-server/api'
              },
              {
                title: 'Requirements for the client who is going to integrate',
                href: '/three-d-s-server/api/client-requirements',
              },
              {
                title: 'Terms and Definitions',
                href: '/three-d-s-server/api/terms-and-definitions',
              },
              {
                title: 'Authentication process data',
                href: '/three-d-s-server/api/transaction-status',
              },
            ],
          },

          {
            title: 'Integration',
            links: [
              {
                title: 'Authorization',
                href: '/three-d-s-server/api/integration/authorization',
              },
              {
                title: 'Session',
                href: '/three-d-s-server/api/integration/session',
              },
              {
                title: 'Get authentication information',
                href: '/three-d-s-server/api/integration/authentication-info',
              },
              {
                title: 'Test Cards',
                href: '/three-d-s-server/api/integration/test-cards'
              },
            ],
          },
          {
            title: 'Sessions',
            links: [
              {
                title: 'Rules',
                href: '/three-d-s-server/api/sessions/rules',
              },
              {
                title: 'API Sessions',
                href: '/three-d-s-server/api/sessions'
              },
              {
                title: 'Detail Info',
                href: '/three-d-s-server/api/sessions/detail-info',
              },
            ],
          },
          {
            title: 'Transactions',
            links: [
              {
                title: 'Transaction show',
                href: '/three-d-s-server/api/transactions',
              },
            ],
          },
          {
            title: 'Merchants',
            links: [
              {
                title: 'Merchants API',
                href: '/three-d-s-server/api/merchants/create',
              },
              {
                title: 'Branches API',
                href: '/three-d-s-server/api/merchants/branch',
              },
            ],
          },
        ],
      },
    ],
  },
  'token-requestor': {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'token-requestor',
        href: '/token-requestor',
        icon: Book,
        links: [
          {
            title: 'Token requestor',
            links: [
              { title: 'Introducción', href: '/token-requestor' },
              {
                title: 'Tipos de identificación',
                href: '/token-requestor/business-identification-types',
              },
              {
                title: 'Codigos de respuesta',
                href: '/token-requestor/response-codes',
              },
            ],
          },
          {
            title: 'Integración',
            links: [
              {
                title: 'Autenticación',
                href: '/token-requestor/integration/authentication',
              },
              {
                title: 'Notificaciones',
                href: '/token-requestor/integration/notifications',
              },
              {
                title: 'Prueba tu integración',
                href: '/token-requestor/integration/testing',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'token-requestor/api',
        href: '/token-requestor/api',
        icon: DocumentCode,
        links: [
          {
            title: 'Introducción',
            links: [{ title: 'Inicio', href: '/token-requestor/api' }],
          },
          {
            title: 'API',
            links: [
              { title: 'Onboarding', href: '/token-requestor/api/onboarding' },
              {
                title: 'Enroll card',
                href: '/token-requestor/api/enroll-card',
              },
              { title: 'Checkout', href: '/token-requestor/api/checkout' },
              {
                title: 'Get token status',
                href: '/token-requestor/api/get-token-status',
              },
              {
                title: 'Onboarding status',
                href: '/token-requestor/api/onboarding-status',
              },
              { title: 'Get Keys', href: '/token-requestor/api/keys' },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentación',
        identifier: 'token-requestor',
        href: '/en/token-requestor',
        icon: Book,
        links: [
          {
            title: 'Token requestor',
            links: [
              { title: 'Introduction', href: '/token-requestor' },
              {
                title: 'Merchant Identification Types',
                href: '/token-requestor/business-identification-types',
              },
              {
                title: 'Response Codes',
                href: '/token-requestor/response-codes',
              },
            ],
          },
          {
            title: 'Integration',
            links: [
              {
                title: 'Authentication',
                href: '/token-requestor/integration/authentication',
              },
              {
                title: 'Notifications',
                href: '/token-requestor/integration/notifications',
              },
              {
                title: 'Test Your Integration',
                href: '/token-requestor/integration/testing',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'token-requestor/api',
        href: '/en/token-requestor/api',
        icon: DocumentCode,
        links: [
          {
            title: 'Introduction',
            links: [{ title: 'Home', href: '/token-requestor/api' }],
          },
          {
            title: 'API',
            links: [
              { title: 'Onboarding', href: '/token-requestor/api/onboarding' },
              {
                title: 'Enroll card',
                href: '/token-requestor/api/enroll-card',
              },
              { title: 'Checkout', href: '/token-requestor/api/checkout' },
              {
                title: 'Get token status',
                href: '/token-requestor/api/get-token-status',
              },
              {
                title: 'Onboarding status',
                href: '/token-requestor/api/onboarding-status',
              },
              { title: 'Get Keys', href: '/token-requestor/api/keys' },
            ],
          },
        ],
      },
    ],
  },
  sdks: {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'sdks',
        href: '/sdks/pinpad',
        icon: Book,
        links: [
          { title: 'SDKs', links: [{ title: 'PinPad', href: '/sdks/pinpad' }] },
        ],
      },
      {
        title: 'API',
        identifier: 'sdks/api',
        href: '/sdks/pinpad/api',
        icon: DocumentCode,
        links: [
          { title: 'API SDKs', links: [{ title: 'PinPad', href: '/sdks/pinpad/api' }] }
        ],
        }
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'sdks',
        href: '/sdks/pinpad',
        icon: Book,
        links: [
          {
            title: 'SDKs',
            links: [{ title: 'PinPad', href: '/sdks/pinpad' }],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'sdks/api',
        href: '/en/sdks/pinpad/api',
        icon: DocumentCode,
        links: [
          { title: 'API SDKs', links: [{ title: 'PinPad', href: '/sdks/pinpad/api' }] }
        ],
        }
    ],
  },
  acs: {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'acs',
        href: '/acs',
        icon: Book,
        links: [
          {
            title: 'ACS',
            links: [
              { title: 'Introducción', href: '/acs' },
              {
                title: '¿Qué es el Protocolo 3-D Secure?',
                href: '/acs/3-d-s-secure-protocol',
              },
              {
                title: '¿Cómo configurar ACS?',
                href: '/acs/a-c-s-general-configuration',
              },
              { title: 'Gestión de cuenta', href: '/acs/account' },
              { title: 'Motor de Control de Fraude', href: '/acs/antifraud' },
              {
                title: 'Estados del proceso de autenticación',
                href: '/acs/authentication-status',
              },
              { title: 'Autenticaciones', href: '/acs/authentications' },
              {
                title: 'Suscripción por marcas',
                href: '/acs/brands-subscriptions',
              },
              { title: 'Rangos de tarjetas', href: '/acs/card-ranges' },
              {
                title: 'Certificados',
                href: '/acs/certificates-configurations',
              },
              { title: 'Configuraciones', href: '/acs/configuration-fields' },
              { title: 'Países en ACS', href: '/acs/countries-configurations' },
              {
                title: 'Monedas utilizadas en ACS',
                href: '/acs/currencies-configurations',
              },
              {
                title: 'Autenticaciones Desacopladas',
                href: '/acs/decoupled-authentications',
              },
              { title: 'Disputas', href: '/acs/disputes' },
              { title: 'Códigos de error', href: '/acs/error-codes' },
              {
                title: 'Preguntas frecuentes sobre el funcionamiento ACS',
                href: '/acs/f-a-q',
              },
              {
                title: 'Campos de configuración',
                href: '/acs/fields-configurations',
              },
              { title: 'Marcas en ACS', href: '/acs/franchise-creation' },
              {
                title: 'Códigos HTTP en el proceso de autenticación',
                href: '/acs/http-codes',
              },
              { title: 'Importes', href: '/acs/imports-configurations' },
              { title: 'Invitaciones de usuarios', href: '/acs/invitations' },
              { title: 'Emisores en ACS', href: '/acs/issuer-configuration' },
              { title: 'Servicios del emisor', href: '/acs/issuer-services' },
              {
                title: 'Gestión de idioma',
                href: '/acs/language-configurations',
              },
              { title: 'Logs de Seguridad', href: '/acs/logs' },
              {
                title: 'Códigos de categoría del comercio',
                href: '/acs/merchant-codes-configurations',
              },
              { title: 'Métricas', href: '/acs/metrics' },
              { title: 'Perfiles', href: '/acs/profiles' },
              { title: 'Reportes', href: '/acs/reports' },
              { title: 'Roles', href: '/acs/roles' },
              { title: 'Alertas del servicio', href: '/acs/service-alerts' },
              {
                title: 'Términos y Definiciones',
                href: '/acs/terms-and-definitions',
              },
              { title: 'Tarjetas de Prueba', href: '/acs/test-cards' },
              { title: 'Usuarios', href: '/acs/users' },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'acs',
        href: '/en/acs',
        icon: 'Book',
        links: [
          {
            title: 'ACS',
            links: [
              { title: 'Introduction', href: '/acs' },
              {
                title: 'What is the 3-D Secure Protocol?',
                href: '/acs/3-d-s-secure-protocol',
              },
              {
                title: 'How to configure ACS?',
                href: '/acs/a-c-s-general-configuration',
              },
              { title: 'Account Management', href: '/acs/account' },
              { title: 'Fraud Control Engine', href: '/acs/antifraud' },
              {
                title: 'Authentication Process Status',
                href: '/acs/authentication-status',
              },
              { title: 'Authentications', href: '/acs/authentications' },
              {
                title: 'Brand Subscriptions',
                href: '/acs/brands-subscriptions',
              },
              { title: 'Card Ranges', href: '/acs/card-ranges' },
              {
                title: 'Certificates',
                href: '/acs/certificates-configurations',
              },
              { title: 'Configurations', href: '/acs/configuration-fields' },
              {
                title: 'Countries in ACS',
                href: '/acs/countries-configurations',
              },
              {
                title: 'Currencies Used in ACS',
                href: '/acs/currencies-configurations',
              },
              {
                title: 'Decoupled Authentications',
                href: '/acs/decoupled-authentications',
              },
              { title: 'Disputes', href: '/acs/disputes' },
              { title: 'Error Codes', href: '/acs/error-codes' },
              { title: 'FAQs about ACS Functionality', href: '/acs/f-a-q' },
              {
                title: 'Configuration Fields',
                href: '/acs/fields-configurations',
              },
              { title: 'Brands in ACS', href: '/acs/franchise-creation' },
              {
                title: 'HTTP Codes in the Authentication Process',
                href: '/acs/http-codes',
              },
              { title: 'Amounts', href: '/acs/imports-configurations' },
              { title: 'User Invitations', href: '/acs/invitations' },
              { title: 'Issuers in ACS', href: '/acs/issuer-configuration' },
              { title: 'Issuer Services', href: '/acs/issuer-services' },
              {
                title: 'Language Management',
                href: '/acs/language-configurations',
              },
              { title: 'Security Logs', href: '/acs/logs' },
              {
                title: 'Merchant Category Codes',
                href: '/acs/merchant-codes-configurations',
              },
              { title: 'Metrics', href: '/acs/metrics' },
              { title: 'Profiles', href: '/acs/profiles' },
              { title: 'Reports', href: '/acs/reports' },
              { title: 'Roles', href: '/acs/roles' },
              { title: 'Service Alerts', href: '/acs/service-alerts' },
              {
                title: 'Terms and Definitions',
                href: '/acs/terms-and-definitions',
              },
              { title: 'Test Cards', href: '/acs/test-cards' },
              { title: 'Users', href: '/acs/users' },
            ],
          },
        ],
      },
    ],
  },
  'payment-links': {
    [LANGUAGES_CODES.ES]: [
      {
        title: 'Documentación',
        identifier: 'payment-links',
        href: '/payment-links',
        icon: Book,
        links: [
          {
            title: 'Links de pago',
            links: [
              { title: 'Introducción', href: '/payment-links' },
              {
                title: 'Cómo Funciona',
                href: '/payment-links/how-payment-links-works',
              },
            ],
          },
          {
            title: 'Integración',
            links: [
              { title: 'Autenticación', href: '/payment-links/authentication' },
              { title: 'Notificación', href: '/payment-links/notification' },
              { title: 'Localización', href: '/payment-links/localization' },
              {
                title: 'Prueba tu integración',
                href: '/payment-links/test-your-integration',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'payment-links/api',
        href: '/payment-links/api/reference/payment-links',
        icon: DocumentCode,
        links: [
          {
            title: 'API',
            links: [
              {
                title: 'Links de pago',
                href: '/payment-links/api/reference/payment-links',
              },
            ],
          },
        ],
      },
    ],
    [LANGUAGES_CODES.EN]: [
      {
        title: 'Documentation',
        identifier: 'payment-links',
        href: '/en/payment-links',
        icon: Book,
        links: [
          {
            title: 'Payment Links',
            links: [
              { title: 'Introduction', href: '/payment-links' },
              {
                title: 'How does it work?',
                href: '/payment-links/how-payment-links-works',
              },
            ],
          },
          {
            title: 'Integration',
            links: [
              {
                title: 'Authentication',
                href: '/payment-links/authentication',
              },
              { title: 'Notification', href: '/payment-links/notification' },
              { title: 'Localization', href: '/payment-links/localization' },
              {
                title: 'Test your integration',
                href: '/payment-links/test-your-integration',
              },
            ],
          },
        ],
      },
      {
        title: 'API',
        identifier: 'payment-links/api',
        href: '/en/payment-links/api/reference/payment-links',
        icon: DocumentCode,
        links: [
          {
            title: 'API',
            links: [
              {
                title: 'Links de pago',
                href: '/payment-links/api/reference/payment-links',
              },
            ],
          },
        ],
      },
    ],
  },
}
