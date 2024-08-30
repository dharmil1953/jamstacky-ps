function assertValue<T>(
  v: T | undefined,
  errorMessage: string,
  serverOnly = false
): T {
  if (
    (typeof window === "undefined" ? serverOnly : !serverOnly) &&
    v === undefined
  ) {
    throw new Error(errorMessage);
  }

  return v!;
}
export const MAILCHIMP_ENDPOINT = process.env.MAILCHIMP_ENDPOINT || "";
export const REVALIDATE_DURATION =
  Number(process.env.NEXT_PUBLIC_REVALIDATE_DURATION) || 60;

export const SANITY_API_TOKEN = assertValue(
  process.env.SANITY_API_TOKEN,
  "Missing environment variable: SANITY_API_TOKEN",
  true
);
export const __prod__ = process.env.NODE_ENV === "production";
export const __dev__ = process.env.NODE_ENV === "development";
export const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_APP_URL || "";
export const MAIL_SERVICE_API =
  assertValue(
    process.env.MAIL_SERVICE_API,
    "Missing environment variable: MAIL_SERVICE_API",
    true
  ) + "/api/send-mail";
export const MAIL_SERVER_HOSTNAME = assertValue(
  process.env.MAIL_SERVER_HOSTNAME,
  "Missing environment variable: MAIL_SERVER_HOSTNAME",
  true
);
export const MAIL_SERVER_PORT = process.env.MAIL_SERVER_PORT
  ? Number(process.env.MAIL_SERVER_PORT)
  : null;
export const MAIL_ACCOUNT_EMAIL = assertValue(
  process.env.MAIL_ACCOUNT_EMAIL,
  "Missing environment variable: MAIL_ACCOUNT_EMAIL",
  true
);
export const MAIL_DEFAULT_RECEIVER_ACCOUNT_EMAIL = assertValue(
  process.env.MAIL_DEFAULT_RECEIVER_ACCOUNT_EMAIL,
  "Missing environment variable: MAIL_DEFAULT_RECEIVER_ACCOUNT_EMAIL",
  true
);
export const MAIL_ACCOUNT_PASSWORD = assertValue(
  process.env.MAIL_ACCOUNT_PASSWORD,
  "Missing environment variable: MAIL_ACCOUNT_PASSWORD",
  true
);
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
export const NEXT_PUBLIC_GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID || "NEXT_PUBLIC_GTM_ID_NOT_PROVIDED";
