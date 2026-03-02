// ==UserScript==
// @name         ......
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  ......
// @author       You
// @match        https://*.as6868.com/*   // ← CHANGE THIS to your target site, e.g. https://example.com/*
// @match        https://*.u55y38.com/*   // ← CHANGE THIS to your target site, e.g. https://example.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // ==================== REMOTE CONFIGURATION ====================
  const CONFIG_URL = 'https://raw.githubusercontent.com/tinkalloet-ship-it/extension-config/refs/heads/main/config.json'; // ← CHANGE THIS
  const DEFAULT_REFRESH_INTERVAL = 5; // minutes

  const DEFAULT_CONFIG = {
    enabled: true,
    requirePasscode: false,
    passcode: null,
    sessionDuration: 14,
    forceExpire: false,
    refreshInterval: DEFAULT_REFRESH_INTERVAL
  };

  let config = { ...DEFAULT_CONFIG };
  let auth = null;

  const STORAGE_AUTH = '_tx_ext_auth';

  // ==================== CONFIG LOADING ====================
  async function loadConfig() {
    try {
      const response = await fetch(CONFIG_URL, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const remote = await response.json();
      config = { ...DEFAULT_CONFIG, ...remote };
      if (config.refreshInterval < 1) config.refreshInterval = 1;
      console.log('[Extension] Config loaded:', config);
    } catch (err) {
      console.warn('[Extension] Config fetch failed, using defaults:', err.message);
      config = { ...DEFAULT_CONFIG };
    }
    handleConfigChange();
  }

  function handleConfigChange() {
    const stored = getStoredAuth();
    if (stored && stored.passcode !== config.passcode) {
      console.log('[Extension] Passcode changed, clearing auth');
      clearStoredAuth();
    }
    if (config.forceExpire) {
      console.log('[Extension] Force expire triggered');
      clearStoredAuth();
      config.forceExpire = false;
    }
    if (stored && stored.requirePasscode !== config.requirePasscode) {
      console.log('[Extension] requirePasscode changed, clearing auth');
      clearStoredAuth();
    }
  }

  // ==================== AUTHENTICATION ====================
  function getStoredAuth() {
    try {
      const data = localStorage.getItem(STORAGE_AUTH);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  function setStoredAuth() {
    const authData = {
      authenticated: true,
      timestamp: Date.now(),
      passcode: config.passcode,
      requirePasscode: config.requirePasscode
    };
    localStorage.setItem(STORAGE_AUTH, JSON.stringify(authData));
  }

  function clearStoredAuth() {
    localStorage.removeItem(STORAGE_AUTH);
    auth = null;
  }

  function isAuthenticated() {
    if (!config.enabled) return false;
    const stored = getStoredAuth();
    if (!stored) return false;
    if (stored.passcode !== config.passcode || stored.requirePasscode !== config.requirePasscode) return false;
    const now = Date.now();
    const durationMs = (config.sessionDuration || DEFAULT_CONFIG.sessionDuration) * 24 * 60 * 60 * 1000;
    if (now - stored.timestamp > durationMs) {
      clearStoredAuth();
      return false;
    }
    return true;
  }

  function authenticate() {
    if (!config.enabled) {
      console.log('[Extension] Disabled');
      return false;
    }
    if (!config.requirePasscode || !config.passcode) {
      if (!getStoredAuth()) setStoredAuth();
      return true;
    }
    const stored = getStoredAuth();
    if (!stored) {
      setStoredAuth();
      return true;
    }
    if (isAuthenticated()) return true;
    const entered = prompt('Session expired. Enter passcode to continue:');
    if (entered === config.passcode) {
      setStoredAuth();
      return true;
    } else {
      alert('Incorrect passcode.');
      return false;
    }
  }

  // ==================== UTILITY ====================
  function showNotification(message, duration = 2000) {
    const notif = document.createElement('div');
    notif.className = 'copy-notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), duration);
  }

  // ==================== CLIPBOARD ====================
  function copyToClipboard(text, element) {
    if (!authenticate()) return;
    if (element) {
      element.classList.add('copy-flash');
      setTimeout(() => element.classList.remove('copy-flash'), 300);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('[Extension] Copied via Clipboard API:', text);
          showNotification(`✅ Copied: ${text.substring(0, 30)}${text.length > 30 ? '…' : ''}`);
        })
        .catch(err => {
          console.warn('[Extension] Clipboard API failed, falling back:', err);
          fallbackCopy(text);
        });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    function handler(e) {
      e.clipboardData.setData('text/plain', text);
      e.preventDefault();
      document.removeEventListener('copy', handler);
    }
    document.addEventListener('copy', handler);
    try {
      if (document.execCommand('copy')) {
        console.log('[Extension] Copied via copy event:', text);
        showNotification(`✅ Copied: ${text.substring(0, 30)}${text.length > 30 ? '…' : ''}`);
      } else {
        document.removeEventListener('copy', handler);
        const input = document.createElement('input');
        input.value = text;
        input.style.position = 'absolute';
        input.style.left = '-9999px';
        input.style.top = '0';
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, 99999);
        const secondTry = document.execCommand('copy');
        document.body.removeChild(input);
        if (secondTry) {
          console.log('[Extension] Copied via temporary input:', text);
          showNotification(`✅ Copied: ${text.substring(0, 30)}${text.length > 30 ? '…' : ''}`);
        } else {
          console.error('[Extension] All copy methods failed');
          showNotification('❌ Copy failed – try Ctrl+C', 3000);
        }
      }
    } catch (err) {
      document.removeEventListener('copy', handler);
      console.error('[Extension] Copy error:', err);
      showNotification('❌ Copy error', 3000);
    }
  }

  // ==================== STYLES ====================
  const styles = `
    /* Thumbnail – small, floated left, subtle styling */
    .tx-thumbnail {
      display: block !important;
      float: left !important;
      margin-right: 10px !important;
      margin-bottom: 5px !important;
      width: 70px !important;
      height: 70px !important;
      border-radius: 6px !important;
      overflow: hidden !important;
      border: 1px solid #ccc !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      cursor: pointer !important;
      background: #f5f5f5 !important;
    }
    .tx-thumbnail:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.15) !important;
    }
    .tx-thumbnail img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }

    /* Clear the float inside the first cell */
    #transactions-list td:first-child::after {
      content: "" !important;
      display: table !important;
      clear: both !important;
    }

    /* Hide the original ATTACHMENT link */
    .tx-attachment-link {
      display: none !important;
    }

    /* Hide all original .copy elements */
    #transactions-list .copy {
      display: none !important;
    }

    /* Preferred details container – replaces the hidden .copy */
    .tx-preferred-details {
      margin-top: 5px !important;
    }
    .tx-detail-item {
      display: flex !important;
      align-items: center !important;
      background: #f8f9fa !important;
      padding: 6px 10px !important;
      border-radius: 6px !important;
      border-left: 3px solid #4a90e2 !important;
      margin-bottom: 6px !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
      cursor: pointer !important;
      transition: background 0.2s !important;
    }
    .tx-detail-item:hover {
      background: #e9ecef !important;
    }
    .tx-detail-item .detail-label {
      font-weight: 600 !important;
      color: #2c3e50 !important;
      min-width: 80px !important;
    }
    .tx-detail-item .detail-value {
      font-weight: 500 !important;
      color: #1e88e5 !important;
      margin-left: 8px !important;
      flex: 1 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }
    
    /* AMOUNT - BIGGER AND MORE NOTICEABLE in row */
    .tx-detail-item.amount-item {
      background: linear-gradient(135deg, #e8f4fd 0%, #d4e9fa 100%) !important;
      border-left: 4px solid #f39c12 !important;
      margin-bottom: 8px !important;
      padding: 8px 12px !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
    }
    .tx-detail-item.amount-item .detail-label {
      font-size: 15px !important;
      color: #e67e22 !important;
      min-width: 70px !important;
    }
    .tx-detail-item.amount-item .detail-value {
      font-size: 20px !important;
      font-weight: 700 !important;
      color: #27ae60 !important;
      text-shadow: 0 1px 1px rgba(255,255,255,0.5) !important;
      letter-spacing: 0.5px !important;
      font-family: 'Courier New', monospace !important;
    }
    
    .tx-detail-item.copy-flash {
      background: #a5d6a7 !important;
    }

    /* Remark row – full width, subtle orange left border */
    .tx-remark-row {
      margin-top: 8px !important;
      padding: 4px 8px !important;
      background: #fff3e0 !important;
      border-left: 4px solid #f39c12 !important;
      border-radius: 3px !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      cursor: pointer !important;
      clear: both !important;
    }
    .tx-remark-row:hover {
      background: #ffe0b2 !important;
    }
    .tx-remark-row .remark-label {
      font-weight: 600 !important;
      color: #e65100 !important;
      margin-right: 5px !important;
    }
    .tx-remark-row .remark-text {
      color: #333 !important;
    }

    /* Hide hidden input */
    #transactions-list .hidden {
      display: none !important;
    }

    /* ===== Lightbox – ultra‑compact design ===== */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      opacity: 0;
      animation: fadeIn 0.3s forwards;
    }
    .lightbox-content {
      display: flex;
      width: 95%;
      height: 90%;
      max-width: 900px;
      background: #1a1a1a;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0,0,0,0.6);
    }
    .lightbox-image {
      flex: 1.1;
      display: flex;
      flex-direction: column;
      background: #111;
      padding: 5px;
      position: relative;
      overflow: hidden;
    }
    .lightbox-image-toolbar {
      display: flex;
      gap: 4px;
      padding: 4px;
      background: #2a2a2a;
      border-radius: 20px;
      margin-bottom: 5px;
      align-self: flex-start;
    }
    .lightbox-image-toolbar button {
      background: #3a3a3a;
      color: white;
      border: none;
      border-radius: 16px;
      padding: 3px 8px;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .lightbox-image-toolbar button:hover {
      background: #555;
    }
    .lightbox-image-container {
      flex: 1;
      overflow: hidden;
      position: relative;
      cursor: grab;
      border-radius: 8px;
      background: #0a0a0a;
    }
    .lightbox-image-container.dragging {
      cursor: grabbing;
    }
    .lightbox-image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.1s;
      transform-origin: 0 0;
      pointer-events: none;
    }

    /* Details panel – ultra‑compact card design */
    .lightbox-details {
      flex: 1;
      background: #1e1e1e;
      color: #fff;
      padding: 10px;
      overflow-y: auto;
      border-left: 1px solid #333;
    }
    .lightbox-details h3 {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
      border-bottom: 1px solid #444;
      padding-bottom: 4px;
    }
    .lightbox-detail-grid {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .lightbox-detail-card {
      background: #2a2a2a;
      border-radius: 6px;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      transition: background 0.2s;
      border: 1px solid #3a3a3a;
    }
    .lightbox-detail-card:hover {
      background: #333;
      border-color: #4a90e2;
    }
    
    /* AMOUNT CARD - BIGGER AND MORE NOTICEABLE in lightbox */
    .lightbox-detail-card.amount-card {
      background: linear-gradient(135deg, #2c3e50 0%, #1a2632 100%) !important;
      border-left: 5px solid #f1c40f !important;
      margin-bottom: 6px !important;
      padding: 8px 12px !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
    }
    .amount-card .detail-icon {
      background: #f1c40f !important;
      color: #2c3e50 !important;
      font-size: 16px !important;
      width: 28px !important;
      height: 28px !important;
      border-radius: 50% !important;
      border: none !important;
    }
    .amount-card .detail-label {
      font-size: 0.8rem !important;
      color: #f1c40f !important;
      font-weight: 700 !important;
    }
    .amount-card .detail-value {
      font-size: 1.6rem !important;
      font-weight: 800 !important;
      color: #2ecc71 !important;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
      font-family: 'Courier New', monospace !important;
      letter-spacing: 1px !important;
    }
    
    .detail-icon {
      width: 20px;
      height: 20px;
      background: #3a3a3a;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #4a90e2;
      border: 1px solid #4a4a4a;
      flex-shrink: 0;
    }
    .detail-content {
      flex: 1;
      min-width: 0;
    }
    .detail-label {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.2px;
      color: #aaa;
      margin-bottom: 1px;
    }
    .detail-value {
      font-size: 0.8rem;
      font-weight: 500;
      color: #fff;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .detail-copy-hint {
      font-size: 0.6rem;
      color: #4a90e2;
      opacity: 0;
      transition: opacity 0.2s;
      margin-left: 4px;
      flex-shrink: 0;
    }
    .lightbox-detail-card:hover .detail-copy-hint {
      opacity: 1;
    }
    .copy-flash {
      background: #2e7d32 !important;
      border-color: #4caf50 !important;
    }

    /* Remark card – special orange accent */
    .lightbox-detail-card.remark-card {
      border-left: 3px solid #f39c12;
    }
    .remark-card .detail-icon {
      color: #f39c12;
    }

    /* Method card – subtle purple accent */
    .lightbox-detail-card.method-card {
      border-left: 3px solid #9c27b0;
    }
    .method-card .detail-icon {
      color: #9c27b0;
    }

    /* Instruction panel – compact */
    .instruction-panel {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #444;
      font-size: 0.7rem;
    }
    .instruction-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: 4px;
    }
    .instruction-col {
      background: #2a2a2a;
      border-radius: 4px;
      padding: 4px;
    }
    .instruction-col div {
      margin-bottom: 2px;
      line-height: 1.2;
      color: #ccc;
    }
    .warning-text {
      color: #ffaa00;
      font-weight: 600;
      margin-bottom: 3px;
    }
    .lightbox-actions {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #444;
      display: flex;
      gap: 6px;
      justify-content: flex-end;
    }
    .lightbox-actions .btn {
      margin: 0;
      padding: 4px 10px;
      border-radius: 20px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 11px;
    }
    .lightbox-actions .btn.primary {
      background-color: #3f51b5;
      color: white;
    }
    .lightbox-actions .btn.warning {
      background-color: #ff9800;
      color: white;
    }
    .lightbox-process {
      margin-top: 5px;
      display: flex;
      justify-content: flex-end;
    }
    .lightbox-process .btn.process {
      background-color: #2196F3;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 11px;
    }
    .lightbox-process .btn.process:hover {
      background-color: #1976D2;
      transform: translateY(-2px);
    }
    .lightbox-close {
      position: absolute;
      top: 10px;
      right: 20px;
      color: white;
      font-size: 30px;
      cursor: pointer;
      text-shadow: 0 2px 6px black;
      transition: transform 0.2s;
      z-index: 10001;
    }
    .lightbox-close:hover {
      transform: scale(1.1);
    }
    .copy-notification {
      position: fixed;
      bottom: 15px;
      right: 15px;
      background: #4caf50;
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      z-index: 10001;
      animation: slideIn 0.3s, fadeOut 2s 0.3s forwards;
      font-weight: 600;
      font-size: 14px;
      border: 1px solid #81c784;
    }
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
      to { opacity: 0; transform: translateX(100%); }
    }
  `;

  // Inject styles
  function injectStyles() {
    if (document.getElementById('tx-minimal-styles')) return;
    const style = document.createElement('style');
    style.id = 'tx-minimal-styles';
    style.textContent = styles;
    document.head.appendChild(style);
    console.log('[Extension] Styles injected');
  }

  // ==================== LIGHTBOX ====================
  let activeLightbox = null;
  function closeLightbox() {
    if (activeLightbox) {
      activeLightbox.remove();
      activeLightbox = null;
    }
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function showLightbox(imageUrl, data, buttons = [], originalRow = null) {
    if (!config.enabled) {
      console.log('[Extension] Disabled, lightbox blocked');
      return;
    }

    closeLightbox();
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    activeLightbox = lb;

    const close = document.createElement('span');
    close.className = 'lightbox-close';
    close.innerHTML = '&times;';
    close.onclick = closeLightbox;

    const content = document.createElement('div');
    content.className = 'lightbox-content';

    // Image panel with zoom controls
    const imgPanel = document.createElement('div');
    imgPanel.className = 'lightbox-image';

    const toolbar = document.createElement('div');
    toolbar.className = 'lightbox-image-toolbar';
    const zoomInBtn = document.createElement('button');
    zoomInBtn.textContent = '+';
    const zoomOutBtn = document.createElement('button');
    zoomOutBtn.textContent = '−';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '↺';
    toolbar.appendChild(zoomInBtn);
    toolbar.appendChild(zoomOutBtn);
    toolbar.appendChild(resetBtn);
    imgPanel.appendChild(toolbar);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'lightbox-image-container';
    const img = document.createElement('img');
    img.src = imageUrl;
    imgContainer.appendChild(img);
    imgPanel.appendChild(imgContainer);

    // Zoom logic
    let scale = 1;
    let translateX = 0, translateY = 0;
    let isDragging = false;
    let startX, startY;

    function updateImageTransform() {
      img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    zoomInBtn.onclick = () => {
      scale = Math.min(scale + 0.2, 3);
      updateImageTransform();
    };
    zoomOutBtn.onclick = () => {
      scale = Math.max(scale - 0.2, 0.2);
      updateImageTransform();
    };
    resetBtn.onclick = () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateImageTransform();
    };

    imgContainer.addEventListener('mousedown', (e) => {
      if (scale === 1) return;
      e.preventDefault();
      isDragging = true;
      imgContainer.classList.add('dragging');
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateImageTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        imgContainer.classList.remove('dragging');
      }
    });

    imgContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      scale = Math.min(Math.max(scale + delta, 0.2), 3);
      updateImageTransform();
    });

    // Details panel – ultra‑compact card layout
    const detailsPanel = document.createElement('div');
    detailsPanel.className = 'lightbox-details';
    detailsPanel.innerHTML = '<h3>Transaction Details</h3>';

    const gridDiv = document.createElement('div');
    gridDiv.className = 'lightbox-detail-grid';

    // Helper to create a detail card
    const createDetailCard = (icon, label, value, extraClass = '') => {
      if (!value) return null;
      const card = document.createElement('div');
      card.className = 'lightbox-detail-card' + (extraClass ? ' ' + extraClass : '');
      
      const iconDiv = document.createElement('div');
      iconDiv.className = 'detail-icon';
      iconDiv.innerHTML = icon;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'detail-content';
      contentDiv.innerHTML = `<div class="detail-label">${label}</div><div class="detail-value" title="${value}">${value}</div>`;
      
      const hintSpan = document.createElement('span');
      hintSpan.className = 'detail-copy-hint';
      hintSpan.textContent = 'click to copy';
      
      card.appendChild(iconDiv);
      card.appendChild(contentDiv);
      card.appendChild(hintSpan);
      
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(value, card);
      });
      
      return card;
    };

    // Add main detail cards - AMOUNT FIRST with special styling
    const amountCard = createDetailCard('💰', 'Amount', data.amount, 'amount-card');
    if (amountCard) gridDiv.appendChild(amountCard);
    
    const addIfPresent = (card) => { if (card) gridDiv.appendChild(card); };
    addIfPresent(createDetailCard('🏷️', 'Company', data.tag));
    addIfPresent(createDetailCard('👤', 'User ID', data.username));
    addIfPresent(createDetailCard('🏦', 'Account Name', data.bankAccountName));
    addIfPresent(createDetailCard('💳', 'Method', data.method, 'method-card'));

    // Add remark card if present
    if (data.remark) {
      const remarkCard = createDetailCard('📝', 'Remark', data.remark, 'remark-card');
      if (remarkCard) {
        if (data.remarkBtn) {
          remarkCard.onclick = (e) => {
            e.stopPropagation();
            closeLightbox();
            data.remarkBtn.click();
          };
        }
        gridDiv.appendChild(remarkCard);
      }
    }

    detailsPanel.appendChild(gridDiv);

    // Instruction panel
    const instr = document.createElement('div');
    instr.className = 'instruction-panel';
    instr.innerHTML = `
      <div class="instruction-grid">
        <div class="instruction-col">
          <div>✅ 【614xxxxxxxx】</div>
          <div>✅ 【Bill】</div>
          <div>✅ 【Payment】</div>
          <div>✅ 【Transfer】</div>
          <div>✅ 【INV】</div>
        </div>
        <div class="instruction-col">
          <div class="warning-text">⚠️ Prohibited</div>
          <div>❌ Pokies</div>
          <div>❌ Casino</div>
          <div>❌ Slot</div>
          <div>❌ Spin</div>
          <div>❌ Game</div>
          <div>❌ Win</div>
          <div>❌ Deposit</div>
          <div>❌ Emergency</div>
          <div>❌ SAVINGS</div>
        </div>
      </div>
    `;
    detailsPanel.appendChild(instr);

    // PROCESS button if applicable (fix: close first then click)
    if (originalRow) {
      const handleBtn = originalRow.querySelector('.btn.warning');
      const processBtn = originalRow.querySelector('.btn.process');
      const actionBtn = handleBtn || processBtn;
      if (actionBtn) {
        const processDiv = document.createElement('div');
        processDiv.className = 'lightbox-process';
        const btn = document.createElement('a');
        btn.className = 'btn process';
        btn.textContent = handleBtn ? 'HANDLE' : 'PROCESS';
        btn.onclick = (e) => {
          e.preventDefault();
          closeLightbox();
          actionBtn.click();
        };
        processDiv.appendChild(btn);
        detailsPanel.appendChild(processDiv);
      }
    }

    // Other action buttons (cloned) – fix: close first then click
    if (buttons && buttons.length) {
      const actions = document.createElement('div');
      actions.className = 'lightbox-actions';
      buttons.forEach(btn => {
        const clone = btn.cloneNode(true);
        clone.originalButton = btn;
        clone.onclick = (e) => {
          e.preventDefault();
          closeLightbox();
          clone.originalButton.click();
        };
        actions.appendChild(clone);
      });
      detailsPanel.appendChild(actions);
    }

    content.appendChild(imgPanel);
    content.appendChild(detailsPanel);
    lb.appendChild(content);
    lb.appendChild(close);
    lb.onclick = (e) => { if (e.target === lb) closeLightbox(); };
    document.body.appendChild(lb);
  }

  // ==================== DATA EXTRACTION ====================
  function extractValue(copyDiv, label) {
    if (!copyDiv) return '';
    const hiddenInput = copyDiv.querySelector('input.hidden');
    if (hiddenInput && hiddenInput.value) {
      return hiddenInput.value.trim();
    }
    const text = copyDiv.childNodes[0]?.nodeValue || copyDiv.textContent;
    const clean = text.replace(/\s+/g, ' ').trim();
    if (clean.includes(label)) {
      const after = clean.substring(clean.indexOf(':') + 1).trim();
      return after;
    }
    return '';
  }

  function extractRowData(row) {
    const transactionId = row.dataset.id;
    const statusClass = Array.from(row.classList).find(c => /COMPLETED|PROCESSING|REJECTED|CANCELLED|PENDING/.test(c)) || '';
    const typeEl = row.querySelector('td:first-child .type');
    const typeText = typeEl ? typeEl.textContent.trim() : '';
    const typeClass = typeEl ? typeEl.className : '';

    const profileLink = row.querySelector('td:first-child a.link.profile');
    let fullName = '';
    let tag = '';
    if (profileLink) {
      const clone = profileLink.cloneNode(true);
      clone.querySelectorAll('.name-blacklist').forEach(span => span.remove());
      fullName = clone.textContent.trim();
      const bracketMatch = fullName.match(/\[([^\]]+)\]/);
      if (bracketMatch) {
        tag = bracketMatch[1];
        fullName = fullName.replace(/\[[^\]]+\]\s*/, '').trim();
      }
      const parenIdx = fullName.indexOf('(');
      if (parenIdx !== -1) fullName = fullName.substring(0, parenIdx).trim();
    }

    const copyDivs = Array.from(row.querySelectorAll('td:first-child .details .copy'));

    const findDiv = (label) => copyDivs.find(d => d.textContent.includes(label));

    const usernameDiv = findDiv('Username:');
    const username = usernameDiv ? extractValue(usernameDiv, 'Username:') : '';

    const amountDiv = findDiv('amount:');
    const amount = amountDiv ? extractValue(amountDiv, 'amount:') : '';

    const mobileDiv = findDiv('Mobile:');
    const mobile = mobileDiv ? extractValue(mobileDiv, 'Mobile:') : '';

    const bankAccountNameDiv = findDiv('Bank Account Name:');
    const bankAccountName = bankAccountNameDiv ? extractValue(bankAccountNameDiv, 'Bank Account Name:') : '';

    const bankAccountNumberDiv = findDiv('Bank Account Number:');
    const bankAccountNumber = bankAccountNumberDiv ? extractValue(bankAccountNumberDiv, 'Bank Account Number:') : '';

    const bankDiv = findDiv('bank:');
    const bank = bankDiv ? extractValue(bankDiv, 'bank:') : '';

    const methodDiv = findDiv('method:');
    const method = methodDiv ? extractValue(methodDiv, 'method:') : '';

    const remarkDiv = findDiv('remarks:');
    let remark = '';
    if (remarkDiv) {
      remark = extractValue(remarkDiv, 'remarks:');
    }

    const imageLink = row.querySelector('td:first-child a.link[href*=".jpg"], td:first-child a.link[href*=".png"], td:first-child a.link[href*=".jpeg"], td:first-child a.link[href*=".gif"]');
    const imageUrl = imageLink ? imageLink.href : null;

    const actionTd = row.querySelector('td:last-child');
    const buttons = actionTd ? Array.from(actionTd.querySelectorAll('.btn')) : [];
    const remarkBtn = actionTd ? actionTd.querySelector('.btn.remark') : null;

    return {
      transactionId,
      statusClass,
      typeText,
      typeClass,
      fullName,
      tag,
      username,
      amount,
      mobile,
      bankAccountName,
      bankAccountNumber,
      bank,
      method,
      imageUrl,
      remark,
      remarkBtn,
      buttons,
      row
    };
  }

  // ==================== ENHANCE ROW ====================
  function enhanceRow(rowData) {
    if (!config.enabled) return;

    const row = rowData.row;

    // Hide the original attachment link
    const attachmentLink = row.querySelector('td:first-child a.link[href*=".jpg"], td:first-child a.link[href*=".png"], td:first-child a.link[href*=".jpeg"]');
    if (attachmentLink) {
      attachmentLink.classList.add('tx-attachment-link');
    }

    // Add thumbnail if image exists
    if (rowData.imageUrl && !row.querySelector('.tx-thumbnail')) {
      const firstCell = row.querySelector('td:first-child');
      if (firstCell) {
        const thumbContainer = document.createElement('div');
        thumbContainer.className = 'tx-thumbnail';
        const img = document.createElement('img');
        img.src = rowData.imageUrl;
        img.alt = 'Attachment';
        thumbContainer.appendChild(img);

        firstCell.insertBefore(thumbContainer, firstCell.firstChild);

        thumbContainer.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          showLightbox(rowData.imageUrl, {
            amount: rowData.amount,
            tag: rowData.tag,
            username: rowData.username,
            bankAccountName: rowData.bankAccountName,
            method: rowData.method,
            remark: rowData.remark,
            remarkBtn: rowData.remarkBtn
          }, rowData.buttons, row);
        };
      }
    }

    // Add preferred details container (replaces the hidden .copy)
    if (!row.querySelector('.tx-preferred-details')) {
      const firstCell = row.querySelector('td:first-child');
      if (firstCell) {
        const detailsDiv = firstCell.querySelector('.details');
        if (detailsDiv) {
          const preferredDiv = document.createElement('div');
          preferredDiv.className = 'tx-preferred-details';

          const addDetail = (label, value, icon, isAmount = false) => {
            if (!value) return;
            const item = document.createElement('div');
            item.className = 'tx-detail-item' + (isAmount ? ' amount-item' : '');
            item.innerHTML = `<span class="detail-label">${icon} ${label}:</span> <span class="detail-value">${value}</span>`;
            item.addEventListener('click', (e) => {
              e.stopPropagation();
              copyToClipboard(value, item);
            });
            preferredDiv.appendChild(item);
          };

          addDetail('Amount', rowData.amount, '💰', true);
          addDetail('Company', rowData.tag, '🏷️');
          addDetail('User ID', rowData.username, '👤');
          addDetail('Account Name', rowData.bankAccountName, '🏦');
          addDetail('Method', rowData.method, '💳');

          firstCell.insertBefore(preferredDiv, detailsDiv);
        }
      }
    }

    // Add remark if present
    if (rowData.remark && !row.querySelector('.tx-remark-row')) {
      const firstCell = row.querySelector('td:first-child');
      if (firstCell) {
        const detailsDiv = firstCell.querySelector('.details');
        if (detailsDiv) {
          const remarkDiv = document.createElement('div');
          remarkDiv.className = 'tx-remark-row';
          remarkDiv.innerHTML = `<span class="remark-label">REMARK:</span> <span class="remark-text">${rowData.remark}</span>`;
          remarkDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(rowData.remark, remarkDiv);
          });
          const preferredDiv = firstCell.querySelector('.tx-preferred-details');
          if (preferredDiv) {
            preferredDiv.parentNode.insertBefore(remarkDiv, preferredDiv.nextSibling);
          } else {
            detailsDiv.parentNode.insertBefore(remarkDiv, detailsDiv);
          }
        }
      }
    }
  }

  // ==================== PROCESS ALL ROWS ====================
  function enhanceTable() {
    if (!config.enabled) {
      console.log('[Extension] Disabled, skipping table enhancement');
      return false;
    }

    console.log('[Extension] enhanceTable()');
    const container = document.getElementById('transactions-list');
    if (!container) {
      console.log('[Extension] No #transactions-list yet');
      return false;
    }

    const table = container.querySelector('table');
    if (!table) {
      console.log('[Extension] No table');
      return false;
    }

    const tbody = table.querySelector('tbody');
    if (!tbody) {
      console.log('[Extension] No tbody');
      return false;
    }

    const rows = Array.from(tbody.querySelectorAll('tr')).filter(tr => tr.hasAttribute('data-id'));
    console.log(`[Extension] Found ${rows.length} transaction rows`);

    rows.forEach(row => {
      const data = extractRowData(row);
      enhanceRow(data);
    });

    return true;
  }

  // ==================== DEBOUNCE & OBSERVER ====================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const later = () => {
        clearTimeout(timeout);
        func();
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function initObserver() {
    const debouncedEnhance = debounce(enhanceTable, 200);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
          if (document.getElementById('transactions-list')) {
            debouncedEnhance();
            break;
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.log('[Extension] Body observer attached');
  }

  // ==================== INITIALISATION ====================
  async function init() {
    console.log('[Extension] Starting...');
    await loadConfig();
    injectStyles();
    enhanceTable();
    initObserver();

    setInterval(async () => {
      await loadConfig();
      enhanceTable();
    }, (config.refreshInterval || DEFAULT_REFRESH_INTERVAL) * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
