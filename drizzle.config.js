/**@type {import("drizzle-kit").Config} */
export default {
    dialect: "postgresql",
    schema: "./config/schema.js",
    dbCredentials: {
        url: 'postgresql://neondb_owner:daiFxr0p9MeO@ep-jolly-cell-a9rjnvuw.gwc.azure.neon.tech/ai-short-video-generator?sslmode=require'
    }
};
