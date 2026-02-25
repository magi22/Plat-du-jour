export const APPLE_STORE_URL = 'https://apps.apple.com/app/plat-du-jour';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.platdujour';

export function getStoreLink(): string {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return APPLE_STORE_URL;
  }

  if (/android/i.test(ua)) {
    return PLAY_STORE_URL;
  }

  return '#download';
}
