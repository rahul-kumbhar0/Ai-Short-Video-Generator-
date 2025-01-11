/**@type {import("drizzle-kit").Config} */
export default {
    dialect: "postgresql",
    schema: "./config/schema.js",
    dbCredentials: {
        url: 'NEXT_PUBLIC_DRIZZLE_DATABASE_URL'
    }
};
