"use client";

import HCaptchaWidget from "@hcaptcha/react-hcaptcha";

const HCAPTCHA_SITEKEY = "58c86af6-1b76-4ba8-af40-97f42ac07f1a";

/**
 * hCaptcha widget for Formspark forms.
 * Renders the checkbox challenge and injects `h-captcha-response` into the parent form on verify.
 */
const HCaptcha = () => {
  return <HCaptchaWidget sitekey={HCAPTCHA_SITEKEY} sentry={false} />;
};

export default HCaptcha;
