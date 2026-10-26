// Единственное место, где задаётся адрес бота.
// Замени BOT_URL на настоящий (например https://t.me/sol_vpn_bot) — все кнопки на сайте подхватят.
window.SOL = { BOT_URL: "https://t.me/YourBot" };
document.querySelectorAll("a[data-bot]").forEach(function (a) { a.href = window.SOL.BOT_URL; });
