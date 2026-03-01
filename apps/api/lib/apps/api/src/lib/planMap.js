export function getPlanFromPriceId(priceId) {
    if (!priceId)
        return "free";
    if (priceId === process.env.STRIPE_PRICE_PRO)
        return "pro";
    if (priceId === process.env.STRIPE_PRICE_TEAM)
        return "team";
    // As a fallback to allow local testing
    if (priceId.includes("pro"))
        return "pro";
    if (priceId.includes("team"))
        return "team";
    return "free";
}
//# sourceMappingURL=planMap.js.map