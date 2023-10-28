export const SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js";
export const DEFAULT_SCRIPT_ID = "cf-turnstile-script";

/**
 * Function to check if an element with the given id exists in the document.
 *
 * @param id Id of the element to check.
 * @returns
 */
export const checkElementExistence = (id: string) =>
  !!document.getElementById(id);

/**
 * Function to inject the cloudflare turnstile script
 *
 * @param param0
 * @returns
 */
export const injectTurnstileScript = () => {
  const scriptId = DEFAULT_SCRIPT_ID;

  if (checkElementExistence(scriptId)) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;

  script.src = `${SCRIPT_URL}`;

  // Prevent duplicate script injection with the same src
  if (document.querySelector(`script[src="${script.src}"]`)) {
    return;
  }

  script.defer = true;
  script.async = true;

  const parentEl = document.body;

  parentEl!.appendChild(script);
};
