const textarea = document.getElementById('markdown');
const preview = document.getElementById('preview');
const clearBtn = document.getElementById('clearBtn');
const downloadBtn = document.getElementById('downloadBtn');
const themeBtn = document.getElementById('themeBtn');

// Live preview using marked.js
textarea.addEventListener('input', () => {
  preview.innerHTML = marked.parse(textarea.value);
});

// Clear button
clearBtn.addEventListener('click', () => {
  textarea.value = '';
  preview.innerHTML = '';
});

// Download HTML
downloadBtn.addEventListener('click', () => {
  const blob = new Blob([preview.innerHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'markdown.html';
  link.click();
});

// Toggle theme
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
