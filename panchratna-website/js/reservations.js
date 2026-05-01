/* ================================================
   PANCHRATNA — RESERVATIONS.JS
   Form validation, date picker, party size selector, toast
   ================================================ */

'use strict';

// ——— Set minimum date to today ———
(function setMinDate() {
  const dateInput = document.getElementById('res-date');
  if (!dateInput) return;
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
})();

// ——— Party Size Selector ———
const partySizeBtns    = document.querySelectorAll('.party-size-btn');
const partySizeInput   = document.getElementById('party-size-value');

partySizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    partySizeBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (partySizeInput) partySizeInput.value = btn.dataset.size;
    validateField(partySizeInput);
  });
});

// ——— Form Validation ———
const form = document.getElementById('reservation-form');

const validators = {
  'res-name': (v) => v.trim().length >= 2   ? '' : 'Please enter your full name.',
  'res-email': (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email.',
  'res-phone': (v) => /^[\d\s\+\-\(\)]{7,}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.',
  'res-date':  (v) => {
    if (!v) return 'Please select a date.';
    const selected = new Date(v);
    const today    = new Date(); today.setHours(0,0,0,0);
    return selected >= today ? '' : 'Please select a future date.';
  },
  'res-time':        (v) => v ? '' : 'Please select a time slot.',
  'party-size-value':(v) => v ? '' : 'Please select party size.',
};

function validateField(input) {
  if (!input) return true;
  const id      = input.id;
  const value   = input.value;
  const group   = input.closest('.form-group');
  const errorEl = group ? group.querySelector('.form-error-msg') : null;
  const rule    = validators[id];

  if (!rule) return true;

  const error = rule(value);

  if (error) {
    group && group.classList.add('error');
    group && group.classList.remove('success');
    if (errorEl) errorEl.textContent = error;
    return false;
  } else {
    group && group.classList.remove('error');
    group && group.classList.add('success');
    return true;
  }
}

// Live validation on blur
Object.keys(validators).forEach(id => {
  const input = document.getElementById(id);
  if (!input) return;

  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => {
    // Clear error on input
    const group = input.closest('.form-group');
    if (group && group.classList.contains('error')) {
      validateField(input);
    }
  });
});

// ——— Form Submit ———
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all
    let allValid = true;
    Object.keys(validators).forEach(id => {
      const input = document.getElementById(id);
      if (!validateField(input)) allValid = false;
    });

    // Terms checkbox
    const terms = document.getElementById('res-terms');
    if (terms && !terms.checked) {
      allValid = false;
      showToast('error', 'Terms Required', 'Please accept the reservation policy to continue.');
    }

    if (!allValid) return;

    // Simulate submission
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner"></span> Confirming...';
      submitBtn.disabled  = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled  = false;
        form.reset();
        partySizeBtns.forEach(b => b.classList.remove('selected'));
        form.querySelectorAll('.form-group').forEach(g => {
          g.classList.remove('success', 'error');
        });

        // Get booking details for toast
        const name = document.getElementById('res-name').value || 'Valued Guest';
        const date = document.getElementById('res-date').value || '';
        const size = document.getElementById('party-size-value').value || '2';
        const dateStr = date ? new Date(date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' }) : '';

        showToast('success',
          `Reservation Confirmed, ${name}!`,
          `Your table for ${size} on ${dateStr} is reserved. A confirmation has been sent to your email.`
        );
      }, 1800);
    }
  });
}

// ——— Toast Notification ———
function showToast(type, title, message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const icon  = toast.querySelector('.toast-icon');
  const titleEl   = toast.querySelector('.toast-title');
  const messageEl = toast.querySelector('.toast-message');

  if (icon) {
    icon.innerHTML = type === 'success'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    icon.style.color = type === 'success' ? 'var(--color-gold)' : '#e74c3c';
  }
  if (titleEl)   titleEl.textContent   = title;
  if (messageEl) messageEl.textContent = message;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 6000);
}

// ——— Expose showToast globally ———
window.showToast = showToast;
