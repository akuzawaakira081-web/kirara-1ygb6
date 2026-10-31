/* ============================================================
   ひらめき画像メーカー 導線設定（URLはここだけで管理）
   - FEATURE_HIRAMEKI_PLUGIN を true にし、PLUGIN_URL を設定すると
     data-hirameki-link のボタンがすべて Plugin へ切り替わる。
   - 旧GPTは Plugin 公開・安定確認まで削除しない（rollback 用）。
   ============================================================ */
window.HIRAMEKI_CONFIG = {
  FEATURE_HIRAMEKI_PLUGIN: false,
  PLUGIN_URL: '',
  LEGACY_GPT_URL: 'https://chatgpt.com/g/g-6a180c33d46c8191a7493c1e66ca82d2-kiraramuse-hiramekihua-xiang-meka'
};

(function () {
  const c = window.HIRAMEKI_CONFIG;
  const url = c.FEATURE_HIRAMEKI_PLUGIN && c.PLUGIN_URL ? c.PLUGIN_URL : c.LEGACY_GPT_URL;
  document.querySelectorAll('[data-hirameki-link]').forEach(a => { a.href = url; });
})();
