export default {
  async fetch(request, env) {
    // Delegate all requests to the static asset bundle produced by Vite.
    return env.ASSETS.fetch(request);
  },
};
